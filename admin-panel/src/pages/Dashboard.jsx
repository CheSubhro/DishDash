
import React from 'react';
import {
    Box,
    Heading,
    Text,
    VStack
} from '@chakra-ui/react';

export const Dashboard = () => {
    return (
        <Box maxW="container.xl" py={6}>
            <Heading size="lg" mb={4} color="gray.700">DishDash Dashboard</Heading>
            <VStack spacing={4} align="stretch" bg="white" p={6} shadow="sm" borderRadius="lg" border="1px solid" borderColor="gray.100">
                <Text fontSize="md" color="gray.600">
                    Welcome to the DishDash Admin Panel. Use the sidebar to manage your menu packages, items, and business settings.
                </Text>
                <Text fontSize="md" color="gray.600">
                    Our catering service operates with a dedicated team of 35 to 40 experienced members who work diligently to manage all events, wedding bookings, and corporate parties smoothly and professionally.
                </Text>
            </VStack>
        </Box>
    );
};