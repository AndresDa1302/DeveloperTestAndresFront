import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Menu } from '@mui/material';


function App() {
  const [id, setId] = useState("")
  const [values,setValues]=useState([]);
  let currentValues=[];

  const handleData = (e) => { setId(e.target.value) }
  /*const handleSubmit = (e) => {
    fetch(`http://localhost:8080/v1/employee/${id}`, { method: "GET" }).then((response)=> {response.json()}).then((data) => { console.log(data) }).catch((error) => { console.log(error) })
  }*/
  const handleSubmit = (e) => { fetch(`http://localhost:8080/v1/employee/${id}`)
  .then((res) => res.json())
  .then((data) => {
    if (data) {
      console.log(data);
      data.map(createData(data.id,data.employee_name,data.employee_salary,data.employee_age,data.employee_anual_salary,data.profile_image))
      setValues(data);
    }
  });}
  function createData(id, employee_name, employee_salary, employee_age, employee_anual_salary,profile_image) {
    return { id, employee_name, employee_salary, employee_age, employee_anual_salary,profile_image };
  }
  const rows = [ 

    createData(1,'Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData(2,'Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData(3,'Eclair', 262, 16.0, 24, 6.0),
    createData(4,'Cupcake', 305, 3.7, 67, 4.3),
    createData(5,'Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    
    <Grid direction="column" container style={{ alignItems: "center", justifyContent: "center" }}>
      <Grid item xs={12} md={12} lg={12}>
        <TextField placeholder="Employee Id" style={{ display: "block", margin: "10px" }} variant="filled" value={id} onChange={(e) => handleData(e)} />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Button variant="contained" onClick={(e) => handleSubmit(e)} style={{ display: "block", margin: "10px" }} >Search</Button>
      </Grid>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Employee name</TableCell>
            <TableCell align="right">Employee salary</TableCell>
            <TableCell align="right">Employee age</TableCell>
            <TableCell align="right">Employee anual salary</TableCell>
            <TableCell align="right">Profile image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.employee_name}</TableCell>
              <TableCell align="right">{row.employee_salary}</TableCell>
              <TableCell align="right">{row.employee_age}</TableCell>
              <TableCell align="right">{row.employee_anual_salary}</TableCell>
              <TableCell align="right">{row.profile_image}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    
  );
}

export default App;
