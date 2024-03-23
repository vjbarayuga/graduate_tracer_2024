import React from 'react';

const TrainingsAdvancedStudiesAttended = ({ data, setData }) => {
  return (
    <div className="space-y-6">
      {/* Advanced Study */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Title of Training or Advanced Study
        </label>
        <input
          onChange={(e) => setData({ ...data, advancedstudy: e.target.value })}
          value={data.advancedstudy}
          type="text"
          id="advancedstudy"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Reason to Pursue Advance Study - Promotion */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Reason to pursue advanced study - Promotion
        </label>
        <input
          onChange={(e) => setData({ ...data, promotion: e.target.value })}
          value={data.promotion}
          type="text"
          id="promotion"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Reason to Pursue Advance Study - Promotion */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Reason to pursue advanced study - Professional Development
        </label>
        <input
          onChange={(e) =>
            setData({ ...data, professionaldev: e.target.value })
          }
          value={data.professionaldev}
          type="text"
          id="professionaldev"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      {/* Reason to Pursue Advance Study - Promotion */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Reason to pursue advanced study - Others please specify
        </label>
        <input
          onChange={(e) =>
            setData({ ...data, otherplsspecify: e.target.value })
          }
          value={data.otherplsspecify}
          type="text"
          id="otherplsspecify"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default TrainingsAdvancedStudiesAttended;
