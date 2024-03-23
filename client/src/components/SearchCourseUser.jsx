// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8000/search-users';

// const initialSearchParams = {
//   campus: '',
//   collegeuniversity: '',
//   degree: '',
//   yeargraduated: '',
// };

// const SearchCourseUser = () => {
//   const [searchParams, setSearchParams] = useState(initialSearchParams);
//   const [userData, setUserData] = useState([]);

//   const handleInputChange = (e) => {
//     setSearchParams({
//       ...searchParams,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSearch = useCallback(async () => {
//     try {
//       const response = await axios.get(API_BASE_URL, { params: searchParams });
//       console.log('API Response:', response.data);
//       setUserData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }, [searchParams]);

//   useEffect(() => {
//     handleSearch();
//   }, [handleSearch]);

//   return (
//     <div className="container mx-auto mt-8">
//       <div className="grid grid-cols-2 gap-6 mb-4">
//         {Object.keys(initialSearchParams).map((param) => (
//           <div key={param} className="mt-4">
//             <label className="block text-sm font-medium text-gray-700 pb-2">
//               {param.charAt(0).toUpperCase() + param.slice(1)}
//             </label>
//             <input
//               type="text"
//               name={param}
//               value={searchParams[param]}
//               onChange={handleInputChange}
//               placeholder={param.charAt(0).toUpperCase() + param.slice(1)}
//               className="block h-12 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//             />
//           </div>
//         ))}
//         <button
//           onClick={handleSearch}
//           className="col-span-2 bg-[#BF202F] text-white p-2 rounded"
//         >
//           Search
//         </button>
//       </div>

//       {userData.length > 0 && (
//         <div className="mb-8">
//           <h2 className="text-xl font-bold mb-4">Alumni Tracer Data</h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full border border-gray-300">
//               <thead>
//                 <tr>
//                   <th className="p-2 border-b">Name</th>
//                   <th className="p-2 border-b">Degree</th>
//                   <th className="p-2 border-b">College/University</th>
//                   <th className="p-2 border-b">Campus</th>
//                   <th className="p-2 border-b">Year Graduated</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {userData.map((user) => (
//                   <tr key={user.id}>
//                     <td className="p-2 border-b">
//                       {user.educationalAttainment.name}
//                     </td>
//                     <td className="p-2 border-b">
//                       {user.educationalAttainment.degree}
//                     </td>
//                     <td className="p-2 border-b">
//                       {user.educationalAttainment.collegeuniversity}
//                     </td>
//                     <td className="p-2 border-b">
//                       {user.educationalAttainment.campus}
//                     </td>
//                     <td className="p-2 border-b">
//                       {user.educationalAttainment.yeargraduated}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchCourseUser;

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/search-users';

const initialSearchParams = {
  campus: '',
  college: '',
  degree: '',
  yeargraduated: '',
};

const campusOptions = [
  'Main Campus',
  'Candon Campus',
  'Santa Maria Campus',
  'Tagudin Campus',
  'Cervantes Campus',
  'Narvacan Campus',
  'Santiago Campus',
];

const collegeOptions = {
  'Main Campus': [
    'College of Arts and Sciences',
    'College of Teacher Education',
    'College of Business and Entrepreneurship',
  ],
  'Santa Maria Campus': [
    'College of Agriculture, Forestry and DevCom',
    'College of Teacher Education',
    'College of Business and Entrepreneurship',
    'College of Computing Studies',
  ],
  // Add options for other campuses as needed
};

const degreeOptions = {
  'College of Arts and Sciences': [
    'BS Computer Science',
    'BS in English',
    'BS in Political Science',
  ],
  // Add options for other colleges as needed
};

const yearOptions = [
  '2005',
  '2006',
  '2007',
  '2008',
  '2009',
  '2010' /* Add more years as needed */,
];

const SearchCourseUser = () => {
  const [searchParams, setSearchParams] = useState(initialSearchParams);
  const [userData, setUserData] = useState([]);

  const handleInputChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = useCallback(async () => {
    try {
      console.log('Sending request with params:', searchParams);
      const response = await axios.get(API_BASE_URL, { params: searchParams });
      console.log('API Response:', response.data);
      setUserData(response.data);
    } catch (error) {
      console.error(error);
      setUserData([]);
    }
  }, [searchParams]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  const filteredData = userData.filter((user) => {
    const educationalAttainment = user.educationalAttainment || {};
    return (
      educationalAttainment.degree === searchParams.degree &&
      educationalAttainment.yeargraduated === searchParams.yeargraduated
    );
  });

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-2 gap-6 mb-4">
        {Object.keys(initialSearchParams).map((param) => (
          <div key={param} className="mt-4">
            <label className="block text-sm font-medium text-gray-700 pb-2">
              {param.charAt(0).toUpperCase() + param.slice(1)}
            </label>
            {param === 'campus' && (
              <select
                name={param}
                value={searchParams[param]}
                onChange={handleInputChange}
                className="block h-12 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select Campus</option>
                {campusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {param === 'college' && (
              <select
                name={param}
                value={searchParams[param]}
                onChange={handleInputChange}
                className="block h-12 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select College/Department</option>
                {collegeOptions[searchParams.campus]?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {param === 'degree' && (
              <select
                name={param}
                value={searchParams[param]}
                onChange={handleInputChange}
                className="block h-12 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select Degree</option>
                {degreeOptions[searchParams.college]?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {param === 'yeargraduated' && (
              <select
                name={param}
                value={searchParams[param]}
                onChange={handleInputChange}
                className="block h-12 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select Year Graduated</option>
                {yearOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
        <button
          onClick={handleSearch}
          className="col-span-1 sm:col-span-2 bg-[#BF202F] text-white p-1 sm:p-2 rounded"
          style={{ width: 'fit-content' }}
        >
          Search
        </button>
      </div>

      {!filteredData.length && (
        <p className="text-red-500 text-center font-semibold mb-4">
          No data found for the given search criteria.
        </p>
      )}

      {filteredData.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            Count of Students for {searchParams.degree} in{' '}
            {searchParams.yeargraduated}:
            <span className="text-lg font-semibold ml-2">
              {filteredData.length}
            </span>
          </h2>
        </div>
      )}
    </div>
  );
};

export default SearchCourseUser;
