
import { Box, Center } from '@chakra-ui/react';
import { LoginForm } from '../features/auth/components/LoginForm';

const Login = () => {
    return (
        <Center h="80vh">
            <Box w="400px" p={8} borderWidth={1} borderRadius="lg" boxShadow="lg">
                <LoginForm />
            </Box>
        </Center>
    );
};

export default Login;