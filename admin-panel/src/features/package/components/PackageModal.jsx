
import React, { useState, useEffect } from 'react';
import {
    Input,
    VStack,
    Button,
    Text,
    Box,
    HStack,
    Textarea
} from '@chakra-ui/react';
import Modal from '../../../components/common/Modal'; 

export const PackageModal = ({ isOpen, onClose, onSave, initialData }) => {
    const [name, setName] = useState('');
    const [eventType, setEventType] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [items, setItems] = useState([{ itemName: '', price: '' }]);

    useEffect(() => {
        if (initialData) {
            setName(initialData.name || '');
            setEventType(initialData.eventType || '');
            setPrice(initialData.price || '');
            setDescription(initialData.description || '');
            const copiedItems = initialData.items?.length 
                ? initialData.items.map(item => ({ ...item })) 
                : [{ itemName: '', price: '' }];
            setItems(copiedItems);
        } else {
            setName('');
            setEventType('');
            setPrice('');
            setDescription('');
            setItems([{ itemName: '', price: '' }]);
        }
    }, [initialData, isOpen]);

    const calculateAndUpdateTotal = (updatedItems) => {
        const total = updatedItems.reduce((sum, item) => {
            const itemPrice = Number(item.price) || 0;
            return sum + itemPrice;
        }, 0);
        setPrice(total > 0 ? total : '');
    };

    const handleItemChange = (index, field, value) => {
        const newItems = items.map((item, i) => {
            if (i === index) {
                return { ...item, [field]: value };
            }
            return item;
        });
        setItems(newItems);

        calculateAndUpdateTotal(newItems);
    };

    const addItemField = () => {
        const newItems = [...items, { itemName: '', price: '' }];
        setItems(newItems);
    };

    const removeItemField = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
        calculateAndUpdateTotal(newItems);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedItems = items.map(item => ({
            itemName: item.itemName,
            price: Number(item.price) || 0
        }));

        onSave({ 
            name, 
            eventType, 
            price: Number(price) || 0, 
            items: formattedItems, 
            description 
        });
        onClose();
    };

    const modalFooter = (
        <>
            <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
            </Button>
            <Button colorScheme="teal" type="submit" form="package-form">
                {initialData ? 'Update Package' : 'Add Package'}
            </Button>
        </>
    );

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={initialData ? 'Edit Package' : 'Add New Package'}
            footer={modalFooter}
            size="xl"
        >
            <form id="package-form" onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                    {/* Package Name */}
                    <Box>
                        <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.700">
                            Package Name *
                        </Text>
                        <Input 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="e.g. Package A" 
                            required 
                        />
                    </Box>

                    {/* Event Type */}
                    <Box>
                        <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.700">
                            Event Type *
                        </Text>
                        <Input 
                            value={eventType} 
                            onChange={(e) => setEventType(e.target.value)} 
                            placeholder="e.g. Wedding, Griha Prabesh" 
                            required 
                        />
                    </Box>

                    {/* Price */}
                    <Box>
                        <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.700">
                            Price (₹) * (Auto-calculated from items, or type manually)
                        </Text>
                        <Input 
                            type="number"
                            value={price} 
                            onChange={(e) => setPrice(e.target.value)} 
                            placeholder="e.g. 500" 
                            required 
                        />
                    </Box>

                    {/* Description */}
                    <Box>
                        <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.700">
                            Description
                        </Text>
                        <Textarea 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            placeholder="Optional description..." 
                        />
                    </Box>

                    {/* Items Included */}
                    <Box>
                        <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.700">
                            Items Included
                        </Text>
                        {items.map((item, index) => (
                            <HStack key={index} mb={2}>
                                <Input
                                    placeholder="Item Name"
                                    value={item.itemName}
                                    onChange={(e) => handleItemChange(index, 'itemName', e.target.value)}
                                />
                                <Input
                                    type="number"
                                    placeholder="Price"
                                    value={item.price}
                                    onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                                    w="150px"
                                />
                                <Button colorScheme="red" size="sm" onClick={() => removeItemField(index)}>X</Button>
                            </HStack>
                        ))}
                        <Button size="sm" colorScheme="teal" mt={2} onClick={addItemField}>+ Add Item</Button>
                    </Box>
                </VStack>
            </form>
        </Modal>
    );
};