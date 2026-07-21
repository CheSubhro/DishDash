
import { Box, Flex, Heading, Button, IconButton, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; 
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../features/auth/authSlice'; 

export const Navbar = () => {

    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const isLoggedIn = Boolean(user);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Box bg="gray.800" color="white" px={6} py={4} boxShadow="md">
            <Flex justify="space-between" align="center">
                <Heading size="md" as={RouterLink} to="/">DishDash Admin</Heading>
                
                {isLoggedIn ? (
                    <HStack spacing={4}>
                        <IconButton 
                            as={RouterLink}
                            to="/profile"
                            aria-label="Profile" 
                            icon={<FaUserCircle size={24} />} 
                            variant="ghost" 
                            colorScheme="whiteAlpha"
                        />
                        <Button 
                            onClick={handleLogout} 
                            colorScheme="teal" 
                            size="sm"
                        >
                            Logout
                        </Button>
                    </HStack>
                ) : (
                    <Button 
                        as={RouterLink} 
                        to="/login"    
                        colorScheme="teal" 
                        size="sm"
                    >
                        Login
                    </Button>
                )}
            </Flex>
        </Box>
    );
};