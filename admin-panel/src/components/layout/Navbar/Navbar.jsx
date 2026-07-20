
import { Box, Flex, Heading, Button, IconButton } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; 

export const Navbar = () => {

	const isLoggedIn = false; 

	return (
		<Box bg="gray.800" color="white" px={6} py={4} boxShadow="md">
			<Flex justify="space-between" align="center">
				<Heading size="md">DishDash Admin</Heading>
				
				{isLoggedIn ? (
				<IconButton 
					aria-label="Profile" 
					icon={<FaUserCircle size={24} />} 
					variant="ghost" 
					colorScheme="whiteAlpha"
				/>
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