
import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { Navbar, Sidebar, Footer } from '../components/layout/index'; 

const MainLayout = ({ children }) => {
    return (
        <Flex direction="column" minH="100vh">
            <Navbar />
            <Flex flex="1">
                <Box w="250px" display={{ base: 'none', md: 'block' }} borderRight="1px solid" borderColor="gray.200">
                    <Sidebar />
                </Box>
                
                {/* Main Content */}
                <Box as="main" flex="1" p={6} bg="gray.50">
                    {children}
                </Box>
            </Flex>
            <Footer />
        </Flex>
    );
};

export default MainLayout;