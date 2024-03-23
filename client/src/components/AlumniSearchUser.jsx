import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonalInfoPart from './PersonalInfoPart';
import EducationalAttainment from './EducationalAttainment';
import TrainingsAdvancedStudiesAttended from './TrainingsAdvancedStudiesAttended';
import Employment from './Employment';
import logo from '../assets/ISPSC_LOGO_new.png';

const apiEndpoints = {
  personalInfo: '/personal-info/',
  educationalAttainment: '/educational-attainment/',
  trainingsAdvancedStudies: '/trainings',
  employment: '/employment/',
  searchByUsername: '/user/',
};

const AlumniSearchUser = ({ user, setUser }) => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({});
  const [searchedUsername, setSearchedUsername] = useState('');
  const [searchedUserData, setSearchedUserData] = useState(null);

  useEffect(() => {
    if (user && user.id) {
      fetchUserData(user.id);
    }
  }, [user]);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(apiEndpoints.personalInfo + userId);
      setSearchedUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const searchByUsername = async () => {
    try {
      const response = await axios.get(
        apiEndpoints.searchByUsername + searchedUsername
      );
      setSearchedUserData(response.data);
    } catch (error) {
      console.error('Error searching user by username:', error);
    }
  };

  const updateUserData = async () => {
    try {
      const response = await axios.put(
        apiEndpoints.searchByUsername + searchedUserData.username,
        data
      );
      console.log('User updated:', response.data);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const deleteUserData = async () => {
    try {
      const response = await axios.delete(
        apiEndpoints.searchByUsername + searchedUserData.username
      );
      console.log('User deleted:', response.data);
      // After deletion, you may want to clear user data or navigate to a different page
    } catch (error) {
      console.error('Error deleting user data:', error);
    }
  };

  const handleSearch = () => {
    searchByUsername();
    setPage(0);
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Backspace' && !searchedUsername) {
      setSearchedUserData(null);
      setData({});
    }
  };

  const titles = [
    'Personal Information',
    'Educational Attainment',
    'Trainings or Advanced Studies Attended',
    'Employment Status Information',
  ];

  const PageDisplay = () => {
    if (searchedUserData) {
      switch (page) {
        case 0:
          return (
            <PersonalInfoPart
              data={searchedUserData.personalInfo}
              setData={setData}
            />
          );
        case 1:
          return (
            <EducationalAttainment
              data={searchedUserData.educationalAttainment}
              setData={setData}
            />
          );
        case 2:
          return (
            <TrainingsAdvancedStudiesAttended
              data={searchedUserData.trainingsAdvancedStudies}
              setData={setData}
            />
          );
        case 3:
          return (
            <Employment data={searchedUserData.employment} setData={setData} />
          );
        default:
          return null;
      }
    } else {
      return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-screen-md">
        <img className="mx-auto h-24 w-auto" src={logo} alt="/" />
        <h1 className="mt-6 text-center text-2xl font-bold text-gray-900">
          {titles[page]}
        </h1>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-6xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="mt-4 flex flex-col justify-center sm:flex-row gap- mb-8">
            <input
              type="text"
              placeholder="Enter username"
              value={searchedUsername}
              onChange={(e) => setSearchedUsername(e.target.value)}
              onKeyUp={handleKeyUp}
              className="p-2 border border-gray-300 rounded"
            />
            <button
              onClick={handleSearch}
              className="w-full sm:w-1/2 bg-[#BF202F] py-2 px-4 text-sm font-medium text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Search by Username
            </button>
          </div>
          <div>{PageDisplay()}</div>
          <div className="flex flex-col sm:flex-row gap-3 pt-8">
            <button
              disabled={page === 0}
              onClick={() => setPage((currPage) => currPage - 1)}
              className="w-full sm:w-1/2 bg-[#BF202F] py-2 px-4 text-sm font-medium text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Prev
            </button>
            <button
              onClick={(e) => {
                if (page === titles.length - 1) {
                  setPage((currPage) => currPage);
                  updateUserData(e);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
              className="w-full sm:w-1/2 bg-[#BF202F] py-2 px-4 text-sm font-medium text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {page === titles.length - 1 ? 'Last' : 'Next'}
            </button>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={updateUserData}
              className="w-full sm:w-1/2 bg-[#BF202F] py-2 px-4 text-sm font-medium text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Update User
            </button>
            <button
              onClick={deleteUserData}
              className="w-full sm:w-1/2 bg-[#BF202F] py-2 px-4 text-sm font-medium text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Delete User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniSearchUser;
