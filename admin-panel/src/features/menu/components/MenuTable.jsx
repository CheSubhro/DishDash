
import React,{useState} from 'react';
import { Box, Button, Badge, Image } from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Pagination from '../../../components/common/pagination/Pagination';

export const MenuTable = ({ menuItems, onEdit, onDelete }) => {

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; 

    // Pagination calculations
    const totalPages = Math.ceil(menuItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = menuItems.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    
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
                    {currentItems.map((item) => (
                        <Box as="tr" key={item._id} borderBottom="1px solid" borderColor="gray.100">
                            <Box as="td" p={4}>
                                <Image
                                    src={item.image || 'https://dummyimage.com/150x150/007bff/ffffff&text=Food'}
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
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </Box>
    );
};