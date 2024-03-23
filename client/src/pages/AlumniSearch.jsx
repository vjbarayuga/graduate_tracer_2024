import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AlumniSearchUser from '../components/AlumniSearchUser';
import Navbar from '../components/Navbar';

const AlumniSearch = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  //const [idVisible] = useState(false);
  const [setActiveForm] = useState('alumni');

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

        const response = await axios.get('/profile', {
          withCredentials: true,
        });

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
      ) : (
        <>
          {!!user && user.id ? (
            <>
              {/* <div className="flex justify-end items-center bg-gray-100">
                <div className="text-right">
                  <h2 className="text-2xl font-bold">
                    Hi {user.username} {idVisible ? user.id : ''}!
                  </h2>
                </div>
                <button
                  onClick={handleLogout}
                  className="ml-4 text-red-500 hover:text-blue-600 px-4 py-2"
                >
                  Logout
                </button>
              </div> */}
              <AlumniSearchUser />
            </>
          ) : (
            <p>Please log in to view the alumni search page.</p>
          )}
        </>
      )}
    </div>
  );
};

export default AlumniSearch;
