import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "green";
    case "Inactive":
      return "yellow";
    case "Blocked":
      return "red";
    case "Suspended":
      return "#f95103";
    default:
      return "black";
  }
};

// Custom style for the status indicator
const StatusIndicator = styled("span")(({ status }) => ({
  color: getStatusColor(status),
  fontSize: "15px",
  marginLeft: "8px",
}));

const UserTable = ({ users }) => {
  return (
    <TableContainer component={Paper} className="table"  style={{borderRadius:'25px',marginBottom:'30px',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Table aria-label="user table" size="small" responsive="true" >

        
        <TableHead style={{backgroundColor:'#034db0',borderRadius:'25px'}}>
          <TableRow >
            <TableCell>
              <Typography variant="subtitle2" style={{color:'white',fontSize:'16px',fontWeight:'500'}}>Record ID</Typography>
            </TableCell>
            <TableCell  >
              <Typography style={{color:'white',fontSize:'16px',fontWeight:'500'}} variant="subtitle2">Teacher Name</Typography>
            </TableCell>
            <TableCell>
              <Typography style={{color:'white',fontSize:'16px',fontWeight:'500'}} variant="subtitle2">Teacher ID</Typography>
            </TableCell>
            <TableCell>
              <Typography style={{color:'white',fontSize:'16px',fontWeight:'500'}} variant="subtitle2">Department</Typography>
            </TableCell>
            <TableCell>
              <Typography style={{color:'white',fontSize:'16px',fontWeight:'500'}} variant="subtitle2">Students</Typography>
            </TableCell>
            <TableCell>
              <Typography style={{color:'white',fontSize:'16px',fontWeight:'500'}} variant="subtitle2">Status</Typography>
            </TableCell>
            <TableCell>
              <Typography style={{color:'white',fontSize:'16px',fontWeight:'500'}} variant="subtitle2">All Details</Typography>
            </TableCell>
          </TableRow>

        </TableHead>
      
        <TableBody>
          {users.map((user) => (
            <TableRow  key={user.id}>
              <TableCell style={{fontSize:'16px',paddingBottom:'20px'}}>{user.id}</TableCell>
              <TableCell style={{fontSize:'16px'}}>{user.name}</TableCell>
              <TableCell style={{fontSize:'16px'}}>{user.teacherId}</TableCell>
              <TableCell style={{fontSize:'18px'}}>{user.department}</TableCell>
              <TableCell style={{fontSize:'16px'}}>{user.students}</TableCell>
              <TableCell style={{fontSize:'16px'}}>
                {user.status}
                <StatusIndicator status={user.status}>●</StatusIndicator>
              </TableCell>
              <TableCell >
                <Link to={`/user/${user.id}`} style={{fontSize:'16px',textDecoration:'none',color:'blue'}}>View More{'>'}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
