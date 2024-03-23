// import React from 'react';
// import { UserContextProvider } from './context/userContext';
// import axios from 'axios';
// import { Toaster } from 'react-hot-toast';

// import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Login from '../src/pages/Login';
// import Dashboard from './pages/Dashboard';

// axios.defaults.baseURL = 'http://localhost:8000';
// axios.defaults.withCredentials = true;

// function App() {
//   return (
//     <UserContextProvider>
//       <Navbar />
//       <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </UserContextProvider>
//   );
// }

// export default App;

import React from 'react';
import { UserContextProvider } from './context/userContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

import './App.css';

import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import Dashboard from './pages/Dashboard';
import AlumniSearch from './pages/AlumniSearch';
import AlumniSearchCourseUsers from './pages/AlumniSearchCourseUsers';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<AlumniSearch />} />
        <Route path="/search-course" element={<AlumniSearchCourseUsers />} />
      </Routes>
    </UserContextProvider>
    //<FormAlumniSearch />
  );
}

export default App;
