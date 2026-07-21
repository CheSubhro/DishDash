
import React from 'react';
import { Box, Button, Badge } from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export const CategoryTable = ({ categories, onEdit, onDelete }) => {
    
    return (
        <Box bg="white" boxShadow="md" borderRadius="md" overflowX="auto" p={4}>
            <Box as="table" w="full" style={{ borderCollapse: 'collapse', textAlign: 'left' }}>
                <Box as="thead" bg="gray.50" borderBottom="2px solid" borderColor="gray.100">
                    <Box as="tr">
                        <Box as="th" p={4} fontSize="sm" fontWeight="bold" color="gray.600">Name</Box>
                        <Box as="th" p={4} fontSize="sm" fontWeight="bold" color="gray.600">Type</Box>
                        <Box as="th" p={4} fontSize="sm" fontWeight="bold" color="gray.600">Parent Category</Box>
                        <Box as="th" p={4} fontSize="sm" fontWeight="bold" color="gray.600" textAlign="right">Actions</Box>
                    </Box>
                </Box>
                <Box as="tbody">
                    {categories.map((cat) => (
                        <Box as="tr" key={cat._id} borderBottom="1px solid" borderColor="gray.100">
                            <Box as="td" p={4} fontWeight="medium" color="gray.800">{cat.name}</Box>
                            <Box as="td" p={4}>
                                <Badge colorScheme={cat.type === 'main' ? 'green' : 'purple'}>
                                    {cat.type}
                                </Badge>
                            </Box>
                            <Box as="td" p={4} color="gray.600">{cat.parentCategory?.name || '-'}</Box>
                            <Box as="td" p={4} textAlign="right">
                                <Button
                                    size="sm"
                                    colorScheme="blue"
                                    variant="ghost"
                                    mr={2}
                                    onClick={() => onEdit(cat)}
                                >
                                    <FaEdit />
                                </Button>
                                <Button
                                    size="sm"
                                    colorScheme="red"
                                    variant="ghost"
                                    onClick={() => onDelete(cat._id)}
                                >
                                    <FaTrash />
                                </Button>
                            </Box>
                        </Box>
                    ))}
                    {categories.length === 0 && (
                        <Box as="tr">
                            <Box as="td" colSpan={4} textAlign="center" py={6} color="gray.500">
                                No categories found.
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};