import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Dashboard } from "./Dashboard";
import { Teachers } from "./Teachers";
import { Students } from "./Students";
import { AddStudent } from "./AddStudent";
import { AddTeacher } from "./AddTeacher";
import { TeacherDetails } from "./TeacherDetails";
import { StudentDetails } from "./StudentDetails";
import { EditTeacher } from "./EditTeacher";
import { EditStudent } from "./EditStudent";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [teachers, setTeacher] = useState([
    {
      id: "01",
      name: "AKASH",
      gender: "MALE",
      subject: "Tamil",
      address: "pondy",
      email: "akaska@gmail.com",
      contact: 123456456,
    },
    {
      id: "01",
      name: "ARTHY",
      gender: "Female",
      subject: "English",
      address: "Bangalore",
      email: "arthya@gmail.com",
      contact: 1234567890,
    },
    {
      id: "02",
      name: "SHERIN",
      gender: "FEMale",
      subject: "Tamil",
      address: "Chennai",
      email: "sherinsa@gmail.com",
      contact: 1234567890,
    },
  ]);
  const [students,setStudent] = useState([
    {
      id: "1",
      name: "ANBU",
      standard: "12",
      batch: "B",
      address: "MADRAS",
      email: "anbub@gmail.com",
      contact: 98765432660,
    },
    {
      id: "2",
      name: "BALAJI",
      standard: "12",
      batch: "B",
      address: "ARANI",
      email: "balajij@gmail.com",
      contact: 7856543210,
    },
    {
      id: "3",
      name: "DEVA",
      standard: "12",
      batch: "B",
      address: "CHEYYAR",
      email: "devad@gmail.com",
      contact: 9876543210,
    },
  ]);
  const navigate = useNavigate();
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/teachers")}>
              Teacher
            </Button>
            <Button color="inherit" onClick={() => navigate("/students")}>
              Student
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/teachers" element={<Teachers teachers={teachers} setTeacher={setTeacher} />} />
        <Route path="/students" element={<Students students={students} setStudent={setStudent} />} />
        <Route path="/teacher/details/:id" element={<TeacherDetails teachers={teachers} />} />
        <Route path="/student/details/:id" element={<StudentDetails students={students} />} />
        <Route path="/add/teacher" element={<AddTeacher teachers={teachers} setTeacher={setTeacher} />} />
        <Route path="/add/student" element={<AddStudent students={students} setStudent={setStudent} />} />
        <Route path="/teacher/edit/:id" element={<EditTeacher teachers={teachers} setTeacher={setTeacher} />} />
        <Route path="/student/edit/:id" element={<EditStudent students={students} setStudent={setStudent} />} />
      </Routes>
    </div>
  );
}

export default App;