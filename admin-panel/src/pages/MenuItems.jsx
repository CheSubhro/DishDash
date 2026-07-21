
import React, { useState } from 'react';
import { Container, Heading, Flex, Button, Spinner } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { useMenu } from '../hooks/useMenu';
import { MenuTable } from '../features/menu/components/MenuTable';
import { MenuModal } from '../features/menu/components/MenuModal';
import Modal from '../components/common/Modal';

export const MenuItems = () => {
    
    const { menuItems, isLoading, addMenuItem, editMenuItem, deleteMenuItem } = useMenu();
    
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const handleOpenAddModal = () => {
        setSelectedItem(null);
        setIsOpen(true);
    };

    const handleOpenEditModal = (item) => {
        setSelectedItem(item);
        setIsOpen(true);
    };

    const handleSubmitItem = async (formData) => {
        if (selectedItem) {
            await editMenuItem(selectedItem._id, formData);
        } else {
            await addMenuItem(formData);
        }
        setIsOpen(false);
    };

    const handleOpenDeleteModal = (itemId) => {
        setItemToDelete(itemId);
        setIsDeleteOpen(true);
    };

    const handleConfirmDelete = async () => {
        await deleteMenuItem(itemToDelete);
        setIsDeleteOpen(false);
        setItemToDelete(null);
    };

    return (
        <Container maxW="container.xl" py={8}>
            <Flex justify="space-between" align="center" mb={6}>
                <Heading size="lg" color="gray.700">Menu Management</Heading>
                <Button 
                    colorScheme="teal" 
                    onClick={handleOpenAddModal}
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                >
                    <FaPlus /> Add Menu Item
                </Button>
            </Flex>

            {isLoading ? (
                <Flex justify="center" align="center" h="50vh">
                    <Spinner size="xl" color="teal.500" />
                </Flex>
            ) : (
                <MenuTable 
                    menuItems={menuItems} 
                    onEdit={handleOpenEditModal} 
                    onDelete={handleOpenDeleteModal} 
                />
            )}

            <MenuModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSubmit={handleSubmitItem}
                itemToEdit={selectedItem}
            />

            <Modal
                isOpen={isDeleteOpen}
                onClose={() => setIsDeleteOpen(false)}
                title="Delete Confirmation"
                size="sm"
                footer={
                    <>
                        <Button variant="outline" mr={3} onClick={() => setIsDeleteOpen(false)}>
                            Cancel
                        </Button>
                        <Button colorScheme="red" onClick={handleConfirmDelete}>
                            Delete
                        </Button>
                    </>
                }
            >
                <Flex direction="column" py={2}>
                    <Heading size="sm" color="gray.600" fontWeight="normal">
                        Are you sure you want to delete this menu item? This action cannot be undone.
                    </Heading>
                </Flex>
            </Modal>
        </Container>
    );
};