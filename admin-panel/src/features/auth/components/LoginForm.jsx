
import { useState } from 'react';
import { VStack, Input, Button, Heading } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { login } from '../authSlice';

export const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData));
    };

    return (
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <VStack spacing={4}>
                <Heading size="lg">Login</Heading>
                
                <Input 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange} 
                    required
                />
                
                <Input 
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                    value={formData.password}
                    onChange={handleChange} 
                    required
                />
                
                <Button type="submit" colorScheme="blue" w="full">
                    Login
                </Button>
            </VStack>
        </form>
    );
};