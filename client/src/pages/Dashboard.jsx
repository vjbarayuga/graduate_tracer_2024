import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormAlumni from './FormAlumni';
import AlumniSearch from '../pages/AlumniSearch';
import SearchCourseUser from '../components/SearchCourseUser';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [activeForm, setActiveForm] = useState('alumni');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');

        if (!storedToken || !storedUser) {
          console.error('User data is missing or invalid.');
          navigate('/login', { replace: true });
          return;
        }

        setUser(JSON.parse(storedUser));

        const response = await axios.get('/profile', { withCredentials: true });

        if (response.status === 200) {
          console.log('User profile data:', response.data);
        } else if (response.status === 403) {
          console.error('Unauthorized access. Redirecting to login.');
          navigate('/login', { replace: true });
        } else {
          console.error('Unexpected error:', response.statusText);
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setUser, navigate]);

  const handleLogout = async () => {
    try {
      await axios.post('/logout');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser(null);
      navigate('/login', { replace: true });
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const renderForm = () => {
    switch (activeForm) {
      case 'alumni':
        return <FormAlumni user={user} />;
      case 'alumniSearch':
        return <AlumniSearch user={user} />;
      case 'searchCourse':
        return <SearchCourseUser user={user} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar
        showSearchLink={user?.role === 'admin'}
        isAdmin={user?.role === 'admin'}
        setActiveForm={setActiveForm}
        user={user}
        handleLogout={handleLogout}
      />

      {loading ? (
        <p>Loading...</p>
      ) : user?.id ? (
        <>{renderForm()}</>
      ) : (
        <p>Please log in to view the dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
