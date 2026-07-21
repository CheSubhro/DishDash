
import React, { useState } from 'react';
import { Container, Heading, Flex, Button, Spinner } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { usePackages } from '../hooks/usePackage';
import { createNewPackage, updateExistingPackage, removePackage } from '../features/package/packageSlice';
import { PackageModal } from '../features/package/components/PackageModal';
import { PackageTable } from '../features/package/components/PackageTable';
import Modal from '../components/common/Modal';

export const Packages = () => {
    const { packages, loading, dispatch } = usePackages();
    
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);

    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [packageToDelete, setPackageToDelete] = useState(null);

    const handleOpenAddModal = () => {
        setSelectedPackage(null);
        setIsOpen(true);
    };

    const handleOpenEditModal = (pkg) => {
        setSelectedPackage(pkg);
        setIsOpen(true);
    };

    const handleSavePackage = async (packageData) => {
        try {
            if (selectedPackage) {
                await dispatch(updateExistingPackage({ id: selectedPackage._id, packageData })).unwrap();
                toast.success('Package updated successfully!'); 
            } else {
                await dispatch(createNewPackage(packageData)).unwrap();
                toast.success('Package created successfully!'); 
            }
            setIsOpen(false);
        } catch (error) {
            toast.error(error?.message || 'Something went wrong!'); 
        }
    };

    const handleOpenDeleteModal = (id) => {
        setPackageToDelete(id);
        setIsDeleteOpen(true);
    };

    const handleConfirmDelete = async () => {
        try {
            await dispatch(removePackage(packageToDelete)).unwrap();
            toast.success('Package deleted successfully!'); 
            setIsDeleteOpen(false);
            setPackageToDelete(null);
        } catch (error) {
            toast.error(error?.message || 'Failed to delete package!'); 
        }
    };

    return (
        <Container maxW="container.xl" py={8}>
            <Flex justify="space-between" align="center" mb={6}>
                <Heading size="lg" color="gray.700">Catering Packages Management</Heading>
                <Button 
                    colorScheme="teal" 
                    onClick={handleOpenAddModal}
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                >
                    <FaPlus /> Add Package
                </Button>
            </Flex>

            {loading ? (
                <Flex justify="center" align="center" h="50vh">
                    <Spinner size="xl" color="teal.500" />
                </Flex>
            ) : (
                <PackageTable 
                    packages={packages} 
                    onEdit={handleOpenEditModal} 
                    onDelete={handleOpenDeleteModal} 
                />
            )}

            <PackageModal 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)} 
                onSave={handleSavePackage} 
                initialData={selectedPackage} 
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
                        Are you sure you want to delete this package? This action cannot be undone.
                    </Heading>
                </Flex>
            </Modal>
        </Container>
    );
};