
import React from 'react';
import { Box, Button, Badge, Image } from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export const MenuTable = ({ menuItems, onEdit, onDelete }) => {
    
    return (
        <Box bg="white" boxShadow="md" borderRadius="md" overflowX="auto" p={4}>
            <Box as="table" w="full" style={{ borderCollapse: 'collapse', textAlign: 'left' }}>
                <Box as="thead" bg="gray.50" borderBottom="2px solid" borderColor="gray.100">
                    <Box as="tr">
                        <Box as="th" p={4} fontSize="sm" fontWeight="bold" color="gray.600">Image</Box>
                        <Box as="th" p={4} fontSize="sm" fontWeight="bold" color="gray.600">Name</Box>
                        <Box as="th" p={4} fontSize="sm" fontWeight="bold" color="gray.600">Category</Box>
                        <Box as="th" p={4} fontSize="sm" fontWeight="bold" color="gray.600">Price</Box>
                        <Box as="th" p={4} fontSize="sm" fontWeight="bold" color="gray.600">Status</Box>
                        <Box as="th" p={4} fontSize="sm" fontWeight="bold" color="gray.600" textAlign="right">Actions</Box>
                    </Box>
                </Box>
                <Box as="tbody">
                    {menuItems.map((item) => (
                        <Box as="tr" key={item._id} borderBottom="1px solid" borderColor="gray.100">
                            <Box as="td" p={4}>
                                <Image
                                    src={item.image || 'https://via.placeholder.com/50'}
                                    alt={item.name}
                                    boxSize="40px"
                                    objectFit="cover"
                                    borderRadius="md"
                                />
                            </Box>
                            <Box as="td" p={4} fontWeight="medium" color="gray.800">{item.name}</Box>
                            <Box as="td" p={4} color="gray.600">{item.category?.name || '-'}</Box>
                            <Box as="td" p={4} fontWeight="bold" color="teal.600">₹{item.price}</Box>
                            <Box as="td" p={4}>
                                <Badge
                                    colorPalette={item.isAvailable ? 'green' : 'red'}
                                >
                                    {item.isAvailable ? 'Available' : 'Unavailable'}
                                </Badge>
                            </Box>
                            <Box as="td" p={4} textAlign="right">
                                <Button
                                    size="sm"
                                    colorScheme="blue"
                                    variant="ghost"
                                    mr={2}
                                    onClick={() => onEdit(item)}
                                >
                                    <FaEdit />
                                </Button>
                                <Button
                                    size="sm"
                                    colorScheme="red"
                                    variant="ghost"
                                    onClick={() => onDelete(item._id)}
                                >
                                    <FaTrash />
                                </Button>
                            </Box>
                        </Box>
                    ))}
                    {menuItems.length === 0 && (
                        <Box as="tr">
                            <Box as="td" colSpan={6} textAlign="center" py={6} color="gray.500">
                                No menu items found.
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};