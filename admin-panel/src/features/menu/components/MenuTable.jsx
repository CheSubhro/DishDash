
import React,{useState} from 'react';
import { Box, Button, Badge, Image, Input, HStack, Icon } from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import Pagination from '../../../components/common/pagination/Pagination';

export const MenuTable = ({ menuItems = [], onEdit, onDelete }) => {

    const [searchQuery, setSearchQuery] = useState('');

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; 

    const filteredItems = menuItems.filter((item) => {
        const query = searchQuery.toLowerCase().trim();
        const name = item.name ? item.name.toLowerCase() : '';
        
        let categoryName = '';
        if (typeof item.category === 'object' && item.category !== null) {
            categoryName = item.category.name ? item.category.name.toLowerCase() : '';
        } else if (typeof item.category === 'string') {
            categoryName = item.category.toLowerCase();
        }

        return name.includes(query) || categoryName.includes(query);
    });

    // Pagination calculations
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const getCategoryColor = (categoryName) => {
        if (!categoryName) return { bg: 'gray.100', color: 'gray.800' };
        
        const colorSchemes = [
            { bg: 'purple.50', color: 'purple.700' },
            { bg: 'orange.50', color: 'orange.700' },
            { bg: 'teal.50', color: 'teal.700' },
            { bg: 'cyan.50', color: 'cyan.700' },
            { bg: 'pink.50', color: 'pink.700' },
            { bg: 'blue.50', color: 'blue.700' },
            { bg: 'green.50', color: 'green.700' },
            { bg: 'yellow.50', color: 'yellow.800' }
        ];

        let hash = 0;
        for (let i = 0; i < categoryName.length; i++) {
            hash = categoryName.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % colorSchemes.length;
        return colorSchemes[index];
    };
    
    return (
        <Box bg="white" boxShadow="md" borderRadius="md" overflowX="auto" p={4}>
            <Box mb={4} maxW="300px">
                <Input
                    placeholder="Search by name or category..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    size="sm"
                    borderRadius="md"
                />
            </Box>
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
                    {currentItems.map((item) => {
                        const categoryName = item.category?.name || '-';
                        return (
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
                                <Box as="td" p={4}>
                                    {categoryName !== '-' ? (
                                        (() => {
                                            const themeColor = getCategoryColor(categoryName);
                                            return (
                                                <Box
                                                    as="span"
                                                    display="inline-block"
                                                    px={3}
                                                    py={1}
                                                    borderRadius="full"
                                                    fontSize="xs"
                                                    fontWeight="semibold"
                                                    bg={themeColor.bg}
                                                    color={themeColor.color}
                                                >
                                                    {categoryName}
                                                </Box>
                                            );
                                        })()
                                    ) : (
                                        <Box as="span" color="gray.600">-</Box>
                                    )}
                                </Box>
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
                        );
                    })}
                    {filteredItems.length === 0 && (
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