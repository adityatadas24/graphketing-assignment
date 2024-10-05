// Filters.jsx
import React from 'react';

const Filters = ({ onFilter }) => {
    return (
        <div className="filters">
            <div>
            <label>Department:</label>
            <select name="department" onChange={onFilter}>
                <option value="">All</option>
                <option value="Finance">Finance</option>
                <option value="Engineer">Engineer</option>
                <option value="Arts">Arts</option>
            </select>
            </div>
           <div>
           <label>Status:</label>
            <select name="status" onChange={onFilter}>
                <option value="">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Blocked">Blocked</option>
                <option value="Suspended">Suspended</option>
            </select>
           </div>

           
        </div>
    );
};

export default Filters;
