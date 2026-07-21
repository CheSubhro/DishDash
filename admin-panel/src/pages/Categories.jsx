
import React, { useState } from 'react';
import {
    Container,
    Heading,
    Flex,
    Button,
    Spinner,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useCategory } from '../hooks/useCategory';
import { CategoryModal } from '../features/category/components/CategoryModal';
import { CategoryTable } from '../features/category/components/CategoryTable';
import Modal from '../components/common/Modal';

export const Categories = () => {
    const { categories, isLoading, addCategory, editCategory, deleteCategory } = useCategory();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState(null);

    const handleOpenAddModal = () => {
        setSelectedCategory(null);
        setIsOpen(true);
    };

    const handleOpenEditModal = (category) => {
        setSelectedCategory(category);
        setIsOpen(true);
    };

    const handleSubmitCategory = async (data) => {
        try {
            if (selectedCategory) {
                await editCategory(selectedCategory._id, data);
                toast.success('Category updated successfully!');
            } else {
                await addCategory(data);
                toast.success('Category added successfully!');
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something went wrong!');
        }
    };

    const handleOpenDeleteModal = (categoryId) => {
        setCategoryToDelete(categoryId);
        setIsDeleteOpen(true);
    };

    const handleConfirmDelete = async () => {
        try {
            await deleteCategory(categoryToDelete);
            toast.success('Category deleted successfully!');
            setIsDeleteOpen(false);
            setCategoryToDelete(null);
        } catch (error) {
            toast.error('Failed to delete category!');
        }
    };

    return (
        <Container maxW="container.xl" py={8}>
            <Flex justify="space-between" align="center" mb={6}>
                <Heading size="lg" color="gray.700">Category Management</Heading>
                <Button 
                    colorScheme="teal" 
                    onClick={handleOpenAddModal}
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                >
                    <FaPlus /> Add Category
                </Button>
            </Flex>

            {isLoading ? (
                <Flex justify="center" align="center" h="50vh">
                    <Spinner size="xl" color="teal.500" />
                </Flex>
            ) : (
                <CategoryTable 
                    categories={categories} 
                    onEdit={handleOpenEditModal} 
                    onDelete={handleOpenDeleteModal} 
                />
            )}

            <CategoryModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSubmit={handleSubmitCategory}
                categoryToEdit={selectedCategory}
                categories={categories}
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
                        Are you sure you want to delete this category? This action cannot be undone.
                    </Heading>
                </Flex>
            </Modal>
        </Container>
    );
};