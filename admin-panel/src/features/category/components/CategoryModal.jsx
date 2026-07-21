
import React, { useState, useEffect } from 'react';
import {
    Input,
    VStack,
    Button,
    Text,
    Box,
} from '@chakra-ui/react';
import Modal from '../../../components/common/Modal'; 

export const CategoryModal = ({ isOpen, onClose, onSubmit, categoryToEdit, categories }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('main');
    const [parentCategory, setParentCategory] = useState('');

    useEffect(() => {
        if (categoryToEdit) {
            setName(categoryToEdit.name || '');
            setType(categoryToEdit.type || 'main');
            setParentCategory(categoryToEdit.parentCategory?._id || categoryToEdit.parentCategory || '');
        } else {
            setName('');
            setType('main');
            setParentCategory('');
        }
    }, [categoryToEdit, isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { name, type };
        if (type === 'sub' && parentCategory) {
            payload.parentCategory = parentCategory;
        }
        onSubmit(payload);
        onClose();
    };

    const availableParents = (categories || []).filter(
        (cat) => cat.type === 'main' && cat._id !== categoryToEdit?._id
    );

    const modalFooter = (
        <>
            <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
            </Button>
            <Button colorScheme="teal" type="submit" form="category-form">
                {categoryToEdit ? 'Update' : 'Add'}
            </Button>
        </>
    );

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={categoryToEdit ? 'Edit Category' : 'Add New Category'}
            footer={modalFooter}
            size="md"
        >
            <form id="category-form" onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                    <Box>
                        <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.700">
                            Category Name *
                        </Text>
                        <Input 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="e.g. Beverages" 
                            required
                        />
                    </Box>

                    <Box>
                        <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.700">
                            Type *
                        </Text>
                        <Box 
                            as="select" 
                            value={type} 
                            onChange={(e) => setType(e.target.value)}
                            width="100%"
                            height="10"
                            px={3}
                            borderRadius="md"
                            border="1px solid"
                            borderColor="inherit"
                            bg="transparent"
                            _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
                        >
                            <option value="main">Main Category</option>
                            <option value="sub">Sub Category</option>
                        </Box>
                    </Box>

                    {type === 'sub' && (
                        <Box>
                            <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.700">
                                Parent Category *
                            </Text>
                            <Box 
                                as="select" 
                                value={parentCategory} 
                                onChange={(e) => setParentCategory(e.target.value)}
                                width="100%"
                                height="10"
                                px={3}
                                borderRadius="md"
                                border="1px solid"
                                borderColor="inherit"
                                bg="transparent"
                                required
                                _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
                            >
                                <option value="">Select parent category</option>
                                {availableParents.map((cat) => (
                                    <option key={cat._id} value={cat._id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </Box>
                        </Box>
                    )}
                </VStack>
            </form>
        </Modal>
    );
};