
import React, { useState } from 'react';
import {
    Box,
    VStack,
    Heading,
    Input,
    Button,
    Text
} from '@chakra-ui/react';

export const SettingsPage = () => {
    const [businessName, setBusinessName] = useState(localStorage.getItem('businessName') || 'DishDash Catering');
    const [phone, setPhone] = useState(localStorage.getItem('phone') || '+91 9876543210');
    const [email, setEmail] = useState(localStorage.getItem('email') || 'support@dishdash.com');
    
    // Toast-er bodole simple success message state
    const [successMessage, setSuccessMessage] = useState('');

    const handleSave = (e) => {
        e.preventDefault();
        localStorage.setItem('businessName', businessName);
        localStorage.setItem('phone', phone);
        localStorage.setItem('email', email);
        
        setSuccessMessage('Settings updated successfully!');
        
        // 3 second por message-ti hide kore dibe
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    return (
        <Box maxW="container.md" p={6} bg="white" shadow="sm" borderRadius="lg">
            <Heading size="lg" mb={6}>Admin Settings</Heading>
            
            {successMessage && (
                <Box mb={4} p={3} bg="green.550" color="white" borderRadius="md">
                    <Text fontSize="sm">{successMessage}</Text>
                </Box>
            )}

            <form onSubmit={handleSave}>
                <VStack spacing={5} align="stretch">
                    <Heading size="md" color="teal.600">Business Profile</Heading>
                    
                    <Box>
                        <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.700">Business Name</Text>
                        <Input value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                    </Box>

                    <Box>
                        <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.700">Phone Number</Text>
                        <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </Box>

                    <Box>
                        <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.700">Email Address</Text>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Box>

                    <Button type="submit" colorScheme="teal" size="md" alignSelf="flex-start" mt={4}>
                        Save Changes
                    </Button>
                </VStack>
            </form>
        </Box>
    );
};