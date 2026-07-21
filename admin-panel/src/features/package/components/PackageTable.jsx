
import React, { useState } from 'react';
import { Box, Button, Badge, Input, HStack, Text } from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export const PackageTable = ({ packages = [], onEdit, onDelete }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPackages = packages.filter((pkg) => {
        const query = searchQuery.toLowerCase().trim();
        const name = pkg.name ? pkg.name.toLowerCase() : '';
        const eventType = pkg.eventType ? pkg.eventType.toLowerCase() : '';

        return name.includes(query) || eventType.includes(query);
    });

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <Box bg="white" boxShadow="md" borderRadius="md" overflowX="auto" p={4}>
            <Box mb={4} maxW="300px">
                <Input
                    placeholder="Search by name or event type..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    size="sm"
                    borderRadius="md"
                />
            </Box>

            <Box as="table" w="full" style={{ borderCollapse: 'collapse', textAlign: 'left' }}>
                <Box as="thead" bg="gray.50" borderBottom="2px solid" borderColor="gray.100">
                    <Box as="tr">
                        <Box as="th" p={4} fontSize="sm" fontWeight="bold" color="gray.600">Name</Box>
                        <Box as="th" p={4} fontSize="sm" fontWeight="bold" color="gray.600">Event Type</Box>
                        <Box as="th" p={4} fontSize="sm" fontWeight="bold" color="gray.600">Price</Box>
                        <Box as="th" p={4} fontSize="sm" fontWeight="bold" color="gray.600">Items Count</Box>
                        <Box as="th" p={4} fontSize="sm" fontWeight="bold" color="gray.600" textAlign="right">Actions</Box>
                    </Box>
                </Box>

                <Box as="tbody">
                    {filteredPackages.map((pkg) => (
                        <Box as="tr" key={pkg._id} borderBottom="1px solid" borderColor="gray.100">
                            <Box as="td" p={4} fontWeight="medium" color="gray.800">{pkg.name}</Box>
                            <Box as="td" p={4}>
                                <Badge colorScheme="purple">{pkg.eventType}</Badge>
                            </Box>
                            <Box as="td" p={4} fontWeight="bold" color="teal.600">₹{pkg.price}</Box>
                            <Box as="td" p={4} color="gray.600">{pkg.items?.length || 0} items</Box>
                            <Box as="td" p={4} textAlign="right">
                                <HStack spacing={2} justify="flex-end">
                                    <Button
                                        size="sm"
                                        colorScheme="blue"
                                        variant="ghost"
                                        onClick={() => onEdit(pkg)}
                                    >
                                        <FaEdit />
                                    </Button>
                                    <Button
                                        size="sm"
                                        colorScheme="red"
                                        variant="ghost"
                                        onClick={() => onDelete(pkg._id)}
                                    >
                                        <FaTrash />
                                    </Button>
                                </HStack>
                            </Box>
                        </Box>
                    ))}

                    {filteredPackages.length === 0 && (
                        <Box as="tr">
                            <Box as="td" colSpan={5} textAlign="center" py={6} color="gray.500">
                                <Text>No packages found.</Text>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};