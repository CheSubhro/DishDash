
import React, { useState } from 'react';
import {
    Container,
    Heading,
    Flex,
    Button,
    Spinner,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { useCategory } from '../hooks/useCategory';
import { CategoryModal } from '../features/category/components/CategoryModal';
import { CategoryTable } from '../features/category/components/CategoryTable';

export const Categories = () => {
    
    const { categories, isLoading, addCategory, editCategory, deleteCategory } = useCategory();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleOpenAddModal = () => {
        setSelectedCategory(null);
        setIsOpen(true);
    };

    const handleOpenEditModal = (category) => {
        setSelectedCategory(category);
        setIsOpen(true);
    };

    const handleSubmitCategory = async (data) => {
        if (selectedCategory) {
            await editCategory(selectedCategory._id, data);
        } else {
            await addCategory(data);
        }
    };

    const handleDelete = async (categoryId) => {
        if (window.confirm('Are you sure you want to delete this category?')) {
            await deleteCategory(categoryId);
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
                    onDelete={handleDelete} 
                />
            )}

            <CategoryModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSubmit={handleSubmitCategory}
                categoryToEdit={selectedCategory}
                categories={categories}
            />
        </Container>
    );
};