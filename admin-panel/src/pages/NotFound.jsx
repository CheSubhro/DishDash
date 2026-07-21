
import { Box, Heading, Text, Button, VStack, Container } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaUtensils, FaHome } from 'react-icons/fa';

export const NotFound = () => {

    return (
        <Container maxW="container.xl" h="80vh" display="flex" alignItems="center" justifyContent="center">
            <VStack spacing={6} textAlign="center">
                {/* Stylish Icon or Logo */}
                <Box 
                    p={6} 
                    bg="teal.50" 
                    color="teal.500" 
                    borderRadius="full" 
                    boxShadow="lg"
                >
                    <FaUtensils size={50} />
                </Box>

                {/* 404 Heading */}
                <Heading 
                    fontSize={{ base: "6rem", md: "8rem" }} 
                    fontWeight="extrabold" 
                    color="teal.500" 
                    lineHeight="1"
                >
                    404
                </Heading>

                {/* Message */}
                <VStack spacing={2}>
                    <Heading size="xl" fontWeight="bold">
                        Oops! Menu Item Not Found
                    </Heading>
                    <Text fontSize="md" color="gray.500" maxW="md">
                        It looks like you have wandered into a page that is not on our menu or has been removed.
                    </Text>
                </VStack>

                {/* Return Home Button */}
                <Button 
                    as={RouterLink} 
                    to="/" 
                    colorScheme="teal" 
                    size="lg" 
                    leftIcon={<FaHome />}
                    px={8}
                    mt={4}
                    boxShadow="md"
                    _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                >
                    Back to Dashboard
                </Button>
            </VStack>
        </Container>
    );
};