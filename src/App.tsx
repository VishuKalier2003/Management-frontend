import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import StudentListPage from './component/StudentListPage';
import Feedback from './component/Feedback';
import StudentData from './component/StudentData';
import AdminPage from './component/Admin/AdminPage';
import DirectorPage from './component/Admin/DirectorPage';
import AdminListPage from './component/Admin/AdminListPage';
import StudentDashboard from './component/Dashboard/StudentDashboard';
import AdminDashboard from './component/Dashboard/AdminDashboard';
import DirectorDashboard from './component/Dashboard/DirectorDashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/student/get/database" element={<StudentListPage />}></Route>
          <Route path="/student/add/studentData" element={<StudentData />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
          <Route path="/admin/feedback" element={<Feedback />}></Route>
          <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
          <Route path="/director" element={<DirectorPage />}></Route>
          <Route path='/director/adminList' element={<AdminListPage />}></Route>
          <Route path='/student/dashboard' element={<StudentDashboard />}></Route>
          <Route path='/director/dashboard' element={<DirectorDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
