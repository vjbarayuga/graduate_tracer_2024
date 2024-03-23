import React from 'react';

const PersonalInfoPart = ({ data, setData }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* First Name Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          First Name
        </label>
        <input
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
          value={data.firstName}
          type="text"
          id="firstName"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Last Name Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Last Name
        </label>
        <input
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
          value={data.lastName}
          type="text"
          id="lastName"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Address Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Address
        </label>
        <input
          onChange={(e) => setData({ ...data, address: e.target.value })}
          value={data.address}
          type="text"
          id="address"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Email */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Email
        </label>
        <input
          onChange={(e) => setData({ ...data, emailadd: e.target.value })}
          value={data.emailadd}
          type="email"
          id="email"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Contact Number */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Telephone or Contact Number
        </label>
        <input
          onChange={(e) => setData({ ...data, contactnumber: e.target.value })}
          value={data.contactnumber}
          type="text"
          id="contactnumber"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Civil Status  */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Civil Status
        </label>
        <select
          onChange={(e) => setData({ ...data, civilstatus: e.target.value })}
          value={data.civilstatus}
          id="civilstatus"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select Civil Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
          {/* Add more civil status options as needed */}
        </select>
      </div>

      {/* Gender Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Gender
        </label>
        <select
          onChange={(e) => setData({ ...data, gender: e.target.value })}
          value={data.gender}
          id="gender"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Birthday */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Birthday
        </label>
        <input
          onChange={(e) => setData({ ...data, birthday: e.target.value })}
          value={data.birthday}
          type="date" // Use "date" type for a birthday input
          id="birthday"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      {/* Region of Origin */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Region of Origin
        </label>
        <select
          onChange={(e) => setData({ ...data, regionorigin: e.target.value })}
          value={data.regionorigin}
          id="regionorigin"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select Region</option>
          <option value="Region1">Region 1</option>
          <option value="Region2">Region 2</option>
          <option value="Region3">Region 3</option>
        </select>
      </div>

      {/* Province */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Province
        </label>
        <select
          onChange={(e) => setData({ ...data, province: e.target.value })}
          value={data.province}
          id="province"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select Province</option>
          <option value="Pangasinan">Pangasinan</option>
          <option value="LaUnion">La Union</option>
          <option value="IlocosSur">Ilocos Sur</option>
        </select>
      </div>

      {/* Location of Residence */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Residence
        </label>
        <select
          onChange={(e) => setData({ ...data, residence: e.target.value })}
          value={data.residence}
          id="province"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select Residence</option>
          <option value="City">City</option>
          <option value="Municipality">Municipality</option>
        </select>
      </div>
    </div>
  );
};

export default PersonalInfoPart;
