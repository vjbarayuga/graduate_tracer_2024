import React from 'react';

const EducationalAttainment = ({ data, setData }) => {
  return (
    <div className="space-y-6">
      {/* Educational Attainment */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Educational Attainment - Degree in College
        </label>
        <input
          onChange={(e) => setData({ ...data, degree: e.target.value })}
          value={data.degree}
          type="text"
          id="degree"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* College Univesity */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          College or University
        </label>
        <input
          onChange={(e) =>
            setData({ ...data, collegeuniversity: e.target.value })
          }
          value={data.collegeuniversity}
          type="text"
          id="collegeuniversity"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Campus */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Campus
        </label>
        <input
          onChange={(e) => setData({ ...data, campus: e.target.value })}
          value={data.campus}
          type="text"
          id="campus"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Year Graduated */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Year Graduated
        </label>
        <input
          onChange={(e) => setData({ ...data, yeargraduated: e.target.value })}
          value={data.yeargraduated}
          type="text"
          id="yeargraduated"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Honors Received */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Honors Received
        </label>
        <input
          onChange={(e) => setData({ ...data, honorsreceived: e.target.value })}
          value={data.honorsreceived}
          type="text"
          id="honorsreceived"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default EducationalAttainment;
