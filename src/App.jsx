import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import ViewDetails from "./components/ViewDetails";
import useDebounce from "./hooks/useDebounce";
import usersData from './data.js'
import Dashboard from "./Pages/Dashboard";



const App = () => {
  const [users, setUsers] = useState([]); // Users state
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ department: "", status: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    setUsers(usersData);
    setFilteredUsers(usersData);
  }, []);

  useEffect(() => {
    let filtered = users;

    // Search logic
    if (debouncedSearchTerm) {
      filtered = filtered.filter((user) =>
        user.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
    }

    // Apply department filter
    if (filters.department) {
      filtered = filtered.filter(
        (user) => user.department === filters.department
      );
    }

    // Apply status filter
    if (filters.status) {
      filtered = filtered.filter((user) => user.status === filters.status);
    }

    setFilteredUsers(filtered);
  }, [debouncedSearchTerm, filters, users]);

  // Filter handler
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              searchInput={searchTerm}
              onSearch={(e) => setSearchTerm(e.target.value)}
              usersPerPage={usersPerPage}
              totalUsers={filteredUsers.length}
              paginate={paginate}
              users={currentUsers}
              onFilter={handleFilterChange}
            />
          }
        />

        <Route path="/user/:id" element={<ViewDetails users={users} />} />
      </Routes>
    </div>
  );
};

export default App;
