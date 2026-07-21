
import React, { useState, useEffect } from 'react';
import {
    Input,
    VStack,
    Button,
    Text,
    Box,
    Checkbox,
} from '@chakra-ui/react';
import Modal from '../../../components/common/Modal';
import { useCategory } from '../../../hooks/useCategory';

export const MenuModal = ({ isOpen, onClose, onSubmit, itemToEdit }) => {
    
    const { categories } = useCategory();
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isAvailable, setIsAvailable] = useState(true);
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        if (itemToEdit) {
            setName(itemToEdit.name || '');
            setPrice(itemToEdit.price || '');
            setDescription(itemToEdit.description || '');
            setCategory(itemToEdit.category?._id || itemToEdit.category || '');
            setIsAvailable(itemToEdit.isAvailable ?? true);
        } else {
            setName('');
            setPrice('');
            setDescription('');
            setCategory('');
            setIsAvailable(true);
            setImageFile(null);
        }
    }, [itemToEdit, isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('isAvailable', isAvailable);
        if (imageFile) {
            formData.append('image', imageFile);
        }

        onSubmit(formData);
        onClose();
    };

    const modalFooter = (
        <>
            <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
            </Button>
            <Button colorScheme="teal" type="submit" form="menu-form">
                {itemToEdit ? 'Update Item' : 'Add Item'}
            </Button>
        </>
    );

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={itemToEdit ? 'Edit Menu Item' : 'Add Menu Item'}
            footer={modalFooter}
            size="md"
        >
            <form id="menu-form" onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                    {/* Item Name */}
                    <Box>
                        <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.700">
                            Item Name *
                        </Text>
                        <Input 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Enter item name" 
                            required 
                        />
                    </Box>

                    {/* Price */}
                    <Box>
                        <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.700">
                            Price (₹) *
                        </Text>
                        <Input 
                            type="number" 
                            value={price} 
                            onChange={(e) => setPrice(e.target.value)} 
                            placeholder="Enter price" 
                            required 
                        />
                    </Box>

                    {/* Category Select Box */}
                    <Box>
                        <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.700">
                            Category *
                        </Text>
                        <Box 
                            as="select" 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)}
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
                            <option value="">Select category</option>
                            {categories?.map((cat) => (
                                <option key={cat._id} value={cat._id}>
                                    {cat.name}
                                </option>
                            ))}
                        </Box>
                    </Box>

                    {/* Description */}
                    <Box>
                        <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.700">
                            Description
                        </Text>
                        <Input 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            placeholder="Enter description (optional)" 
                        />
                    </Box>

                    {/* Image Upload */}
                    <Box>
                        <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.700">
                            Image (Optional)
                        </Text>
                        <Input 
                            type="file" 
                            accept="image/*"
                            onChange={(e) => setImageFile(e.target.files[0])} 
                            pt={1}
                        />
                    </Box>

                    {/* Availability Checkbox */}
                    <Box pt={2}>
                        <Checkbox.Root
                            checked={isAvailable}
                            onCheckedChange={(details) => {
                                setIsAvailable(details.checked === true);
                            }}
                        >
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label>Is Available</Checkbox.Label>
                        </Checkbox.Root>
                    </Box>
                </VStack>
            </form>
        </Modal>
    );
};