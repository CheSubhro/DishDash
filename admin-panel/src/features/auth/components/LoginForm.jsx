
import { useState } from 'react';
import { VStack, Input, Button, Heading } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { login } from '../authSlice';

export const LoginForm = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
                <Heading size="lg">Login</Heading>
                <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit" colorScheme="blue" w="full">Login</Button>
            </VStack>
        </form>
    );
};