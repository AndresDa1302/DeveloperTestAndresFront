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

function App() {
  const [id, setId] = useState("")

  const handleData = (e) => { setId(e.target.value) }
  /*const handleSubmit = (e) => {
    fetch(`http://localhost:8080/v1/employee/${id}`, { method: "GET" }).then((data) => { console.log(data) }).catch((error) => { console.log(error) })
  }*/
  const handleSubmit = (e) => { fetch(`http://localhost:8080/v1/employee/${id}`)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data); 
  });}
  function createData(id, employee_name, employee_salary, employee_age, employee_anual_salary,profile_image) {
    return { id, employee_name, employee_salary, employee_age, employee_anual_salary,profile_image };
  }
  const rows = [ 
    /*for (var i=0;handleSubmit.length;i++)
    {
      createData(handleSubmit.id,handleSubmit.employee_name,handleSubmit.employee_salary,handleSubmit.employee_age,handleSubmit.employee_anual_salary,handleSubmit.profile_image)
    }*/
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0,8),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3,8),
    createData('Eclair', 262, 16.0, 24, 6.0,5),
    createData('Cupcake', 305, 3.7, 67, 4.3,5),
    createData('Gingerbread', 356, 16.0, 49, 3.9,3),
  ];

  return (
    <Grid direction="column" container style={{ alignItems: "center", justifyContent: "center" }}>
      <Grid item xs={12} md={12} lg={12}>
        <TextField placeholder="id" style={{ display: "block", margin: "10px" }} variant="filled" value={id} onChange={(e) => handleData(e)} />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Button variant="contained" onClick={(e) => handleSubmit(e)} style={{ display: "block", margin: "10px" }} >Contained</Button>
      </Grid>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
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
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
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
