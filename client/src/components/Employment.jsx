import React from 'react';

const Employment = ({ data, setData }) => {
  if (!data.stayOnJobReasons) {
    data.stayOnJobReasons = {};
  }

  const handleCheckboxChange = (key, value) => {
    setData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleStayOnJobReasonChange = (reason, isChecked) => {
    setData((prevData) => ({
      ...prevData,
      stayOnJobReasons: { ...prevData.stayOnJobReasons, [reason]: isChecked },
    }));
  };

  return (
    <div className="space-y-6">
      {/* presentEmploymentStatus */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Present Employment Status?
        </label>
        <div className="flex items-center">
          <select
            value={data.presentEmploymentStatus || 'Yes'}
            onChange={(e) => {
              const selectedValue = e.target.value;
              if (['Yes', 'No', 'NeverBeenEmployed'].includes(selectedValue)) {
                handleCheckboxChange('presentEmploymentStatus', selectedValue);
              }
            }}
            className="mr-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="NeverBeenEmployed">Never Been Employed</option>
          </select>
        </div>
      </div>

      {/* Reasons why not yet employed */}
      <div>
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Select the reasons:
        </label>
        {[
          'reasonadvancedfurtherstudy',
          'reasonFamilyConcern',
          'reasonHealthRelated',
          'reasonLackOfExperience',
          'reasonNoJobOpportunity',
          'reasonDidNotLookForJob',
          'reasonOther',
        ].map((reason) => (
          <div key={reason}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                onChange={(e) => handleCheckboxChange(reason, e.target.checked)}
                checked={data[reason]}
                className="mr-2"
              />
              {reason.replace('reason', '')}
            </label>
          </div>
        ))}
        {data.reasonOther && (
          <div>
            <input
              type="text"
              onChange={(e) =>
                handleCheckboxChange('otherReason', e.target.value)
              }
              value={data.otherReason}
              className="block w-full mt-2 border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
          </div>
        )}
      </div>

      {/* EMPLOYMENT STATUS */}
      <div>
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Present Employment Status:
        </label>
        {['Regular', 'Temporary', 'Casual', 'Contractual', 'SelfEmployed'].map(
          (status) => (
            <div key={status}>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleCheckboxChange(
                      `employmentStatus${status}`,
                      e.target.checked
                    )
                  }
                  checked={data[`employmentStatus${status}`]}
                  className="mr-2"
                />
                {status}
              </label>
            </div>
          )
        )}
        {data.employmentStatusSelfEmployed && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mt-4">
              If self-employed, what skills acquired in college were you able to
              apply in your work?
            </label>
            <input
              type="text"
              onChange={(e) =>
                handleCheckboxChange('selfEmployedSkills', e.target.value)
              }
              value={data.selfEmployedSkills}
              className="block w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700 mt-4">
            Present occupation (Ex. Grade School Teacher, Electrical Engineer,
            Self-employed)?
          </label>
          <input
            type="text"
            onChange={(e) =>
              handleCheckboxChange('presentOccupation', e.target.value)
            }
            value={data.presentOccupation}
            className="block w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Major Line of Business */}
      <div>
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Major line of business of the company you are presently employed in.
          Check one only.
        </label>
        {['Agriculture, Hunting and Forestry', 'Fishing'].map((business) => (
          <div key={business}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                onChange={() =>
                  handleCheckboxChange('majorLineOfBusiness', business)
                }
                checked={data.majorLineOfBusiness === business}
                className="mr-2"
              />
              {business}
            </label>
          </div>
        ))}
      </div>

      {/* Place of Work */}
      <div>
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Place of work?
        </label>
        {['Local', 'Abroad'].map((place) => (
          <div key={place}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('placeOfWork', place)}
                checked={data.placeOfWork === place}
                className="mr-2"
              />
              {place}
            </label>
          </div>
        ))}
      </div>

      {/* Is this your first job after college? */}
      <div>
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Is this your first job after college?
        </label>
        {['Yes', 'No'].map((answer) => (
          <div key={answer}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                onChange={() =>
                  handleCheckboxChange('firstJobAfterCollege', answer)
                }
                checked={data.firstJobAfterCollege === answer}
                className="mr-2"
              />
              {answer}
            </label>
          </div>
        ))}
      </div>

      {/* Reasons for staying on the job */}
      <div>
        <label className="block text-sm font-medium text-gray-700 pb-2">
          What are your reason(s) for staying on the job?
        </label>
        {[
          'salariesAndBenefits',
          'careerChallenge',
          'relatedToSpecialSkill',
          'relatedToCourseOrProgram',
          'proximityToResidence',
          'peerInfluence',
          'familyInfluence',
          'otherReasons',
        ].map((reason) => (
          <div key={reason}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                onChange={(e) =>
                  handleStayOnJobReasonChange(reason, e.target.checked)
                }
                checked={data.stayOnJobReasons[reason]}
                className="mr-2"
              />
              {reason.replace(/[A-Z]/g, ' $&')}
            </label>
          </div>
        ))}
        {data.stayOnJobReasons.otherReasons && (
          <div>
            <input
              type="text"
              onChange={(e) =>
                handleCheckboxChange('stayOnJobOtherReason', e.target.value)
              }
              value={data.stayOnJobOtherReason}
              className="block w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 shadow-sm focus-border-indigo-500 focus-outline-none focus-ring-indigo-500"
            />
          </div>
        )}
      </div>

      {/* Is your first job related to the course you took up in college? */}
      <div>
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Is your first job related to the course you took up in college?
        </label>
        {['Yes', 'No'].map((answer) => (
          <div key={answer}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                onChange={() =>
                  handleCheckboxChange('firstJobRelatedToCollegeCourse', answer)
                }
                checked={data.firstJobRelatedToCollegeCourse === answer}
                className="mr-2"
              />
              {answer}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employment;
