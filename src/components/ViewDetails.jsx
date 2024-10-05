import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ViewDetails = ({ users }) => {
    const { id } = useParams();
    const user = users.find((user) => user.id === parseInt(id));

    if (!user) {
        return <div className="not-found">User not found</div>;
    }

    return (
        <div className="details-container">
            <div className="details-card">
                <h1 className="details-title">User Details</h1>
                <div className="details-info">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Teacher ID:</strong> {user.teacherId}</p>
                    <p><strong>Department:</strong> {user.department}</p>
                    <p><strong>Students:</strong> {user.students}</p>
                    <p><strong>Status:</strong> <span className={`status ${user.status.toLowerCase()}`}>{user.status}</span></p>
                </div>
            </div>
            <Link to='/' className="home-button">Go to Home</Link>
        </div>
    );
};

export default ViewDetails;
