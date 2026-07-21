
import React from 'react';
import { HStack, Button, IconButton } from '@chakra-ui/react';
import {
    FiChevronLeft,
    FiChevronRight,
} from 'react-icons/fi';

const Pagination = ({
    totalPages,
    currentPage,
    onPageChange,
}) => {
    const pages = Array.from(
        { length: totalPages },
        (_, i) => i + 1
    );

    if (totalPages <= 1) return null;

    return (
        <HStack
            gap={2}
            justifyContent="center"
            py={4}
        >
            <IconButton
                onClick={() =>
                    onPageChange(currentPage - 1)
                }
                disabled={currentPage === 1}
                aria-label="Previous Page"
                variant="outline"
                size="sm"
            >
                <FiChevronLeft />
            </IconButton>

            {pages.map((page) => (
                <Button
                    key={page}
                    onClick={() =>
                        onPageChange(page)
                    }
                    colorPalette={
                        currentPage === page
                            ? 'teal'
                            : 'gray'
                    }
                    variant={
                        currentPage === page
                            ? 'solid'
                            : 'outline'
                    }
                    size="sm"
                >
                    {page}
                </Button>
            ))}

            <IconButton
                onClick={() =>
                    onPageChange(currentPage + 1)
                }
                disabled={
                    currentPage === totalPages
                }
                aria-label="Next Page"
                variant="outline"
                size="sm"
            >
                <FiChevronRight />
            </IconButton>
        </HStack>
    );
};

export default Pagination;