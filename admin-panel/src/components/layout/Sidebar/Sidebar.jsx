
import { Box, VStack, Link, HStack, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { MdDashboard, MdCategory, MdRestaurantMenu, MdSettings } from 'react-icons/md';

export const Sidebar = () => {

    const menuItems = [
        { name: 'Dashboard', path: '/dashboard', icon: MdDashboard },
        { name: 'Categories', path: '/categories', icon: MdCategory },
        { name: 'Menu Items', path: '/menu-items', icon: MdRestaurantMenu },
        { name: 'Settings', path: '/settings', icon: MdSettings },
    ];

    return (
        <Box w="250px" bg="gray.50" minH="calc(100vh - 140px)" p={4} borderRight="1px solid" borderColor="gray.200">
        <VStack align="stretch" spacing={2}>
            {menuItems.map((item) => (
            <Link
                key={item.name}
                as={RouterLink}
                to={item.path}
                _hover={{ textDecoration: 'none', bg: 'blue.50', color: 'blue.600' }}
                p={3}
                borderRadius="md"
                transition="0.2s"
            >
                <HStack spacing={3}>
                <Box as={item.icon} size="20px" />
                <Text fontWeight="medium">{item.name}</Text>
                </HStack>
            </Link>
            ))}
        </VStack>
        </Box>
    );
};