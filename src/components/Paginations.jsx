import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginations = ({ usersPerPage, totalUsers, paginate }) => {
    const pageCount = Math.ceil(totalUsers / usersPerPage); 

    return (
        <Stack spacing={2} className="pagination-nav">
            <Pagination
                count={pageCount}
                color="primary" 
                onChange={(event, value) => paginate(value)} 
                showFirstButton
                showLastButton
            />
        </Stack>
    );
};

export default Paginations;
