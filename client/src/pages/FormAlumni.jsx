import PersonalInfoPart from '../components/PersonalInfoPart';
import EducationalAttainment from '../components/EducationalAttainment';
import TrainingsAdvancedStudiesAttended from '../components/TrainingsAdvancedStudiesAttended';
import Employment from '../components/Employment';
import logo from '../assets/ISPSC_LOGO_new.png';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import axios from 'axios';

const apiEndpoints = {
  personalInfo: '/personal-info/',
  educationalAttainment: '/educational-attainment/',
  trainingsAdvancedStudies: '/trainings',
  employment: '/employment/',
};

const FormAlumni = ({ user, setUser }) => {
  const navigate = useNavigate(); // Initialize useHistory
  console.log('Received userId:', user);
  const [page, setPage] = useState(0);
  const [data, setData] = useState({});

  const RegisterUser = async (e) => {
    e.preventDefault();

    // Check if user is available and has an id property
    if (!user || !user.id) {
      console.error('User ID is missing.', user);
      // Render loading state or handle gracefully
      return;
    }

    const userId = user.id; // Use user.id for the POST requests

    try {
      const {
        firstName,
        lastName,
        address,
        emailadd,
        contactnumber,
        civilstatus,
        gender,
        birthday,
        regionorigin,
        province,
        residence,
        degree,
        collegeuniversity,
        campus,
        yeargraduated,
        honorsreceived,
        advancedstudy,
        promotion,
        professionaldev,
        otherplsspecify,
        // presentEmploymentStatus,
        reasonadvancedfurtherstudy,
        reasonFamilyConcern,
        reasonHealthRelated,
        reasonLackOfExperience,
        reasonNoJobOpportunity,
        reasonDidNotLookForJob,
        reasonOther,
        otherReason,
        employmentStatusRegular,
        employmentStatusTemporary,
        employmentStatusCasual,
        employmentStatusContractual,
        employmentStatusSelfEmployed,
        selfEmployedSkills,
        presentOccupation,
        majorLineOfBusiness,
        placeOfWork,
        firstJobAfterCollege,
        stayOnJobReasons,
        stayOnJobOtherReason,
        firstJobRelatedToCollegeCourseYES,
        firstJobRelatedToCollegeCourseNO,
      } = data;
      e.preventDefault();

      // POST request for User Info
      console.log('Data being sent:', data);
      const personalInfoResponse = await axios.post(apiEndpoints.personalInfo, {
        userId,
        firstName,
        lastName,
        address,
        emailadd,
        contactnumber,
        civilstatus,
        gender,
        birthday,
        regionorigin,
        province,
        residence,
      });
      console.log('Personal Info Created:', personalInfoResponse.data);

      // POST request for Educational Attainment
      const educationalAttainmentResponse = await axios.post(
        apiEndpoints.educationalAttainment,
        {
          userId,
          degree,
          collegeuniversity,
          campus,
          yeargraduated,
          honorsreceived,
        }
      );
      console.log(
        'Educational Attainment Created:',
        educationalAttainmentResponse.data
      );

      // POST request for Trainings
      const trainingsAdvancedStudiesResponse = await axios.post(
        apiEndpoints.trainingsAdvancedStudies,
        {
          userId,
          advancedstudy,
          promotion,
          professionaldev,
          otherplsspecify,
        }
      );
      console.log('Trainings Created:', trainingsAdvancedStudiesResponse.data);

      // POST request for Employment data
      const employmentResponse = await axios.post(apiEndpoints.employment, {
        userId,
        presentEmploymentStatus: data.presentEmploymentStatus || 'Yes',
        reasonadvancedfurtherstudy,
        reasonFamilyConcern,
        reasonHealthRelated,
        reasonLackOfExperience,
        reasonNoJobOpportunity,
        reasonDidNotLookForJob,
        reasonOther,
        otherReason,
        employmentStatusRegular,
        employmentStatusTemporary,
        employmentStatusCasual,
        employmentStatusContractual,
        employmentStatusSelfEmployed,
        selfEmployedSkills,
        presentOccupation,
        majorLineOfBusiness,
        placeOfWork,
        firstJobAfterCollege,
        stayOnJobReasons,
        stayOnJobOtherReason,
        firstJobRelatedToCollegeCourseYES,
        firstJobRelatedToCollegeCourseNO,
      });
      console.log('Employment Data Created:', employmentResponse.data);
      // Clear the form data after successful submission
      // setData({ presentEmploymentStatus: '' });

      // Redirect to the dashboard or '/' after submission
      navigate('/dashboard'); // Change the route as needed
    } catch (error) {
      console.log(error);
      console.error(
        'Error creating Personal Info, Educational Attainment, Trainings, or Employment data:',
        error.response.data
      );
    }
  };

  const titles = [
    'Personal Information',
    'Educational Attainment',
    'Trainings or Advanced Studies Attended',
    'Employment Status Information',
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfoPart data={data} setData={setData} />;
    } else if (page === 1) {
      return <EducationalAttainment data={data} setData={setData} />;
    } else if (page === 2) {
      return <TrainingsAdvancedStudiesAttended data={data} setData={setData} />;
    } else if (page === 3) {
      return <Employment data={data} setData={setData} />;
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
                  alert('Form Submitted');
                  RegisterUser(e);
                  setData({});
                  navigate('/dashboard');
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
              className="w-full sm:w-1/2 bg-[#BF202F] py-2 px-4 text-sm font-medium text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {page === titles.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAlumni;
