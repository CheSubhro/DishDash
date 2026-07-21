
import React from 'react';
import { Pagination as HeroPagination } from "@heroui/react";

/**
 * @param {number} totalPages - The total number of available pages
 * @param {number} currentPage - The active page the user is currently viewing
 * @param {function} onPageChange - Callback function triggered when a page is changed
 */
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    // No need to render pagination if there is only one page or less
    if (totalPages <= 1) return null; 

    return (
        <div className="flex justify-center py-4">
            <HeroPagination
                total={totalPages}
                page={currentPage}
                onChange={onPageChange}
                showControls
                color="primary"
                variant="bordered"
                size="sm"
            />
        </div>
    );
};

export default Pagination;