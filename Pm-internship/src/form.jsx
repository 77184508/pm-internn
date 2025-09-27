import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
function Forms() {
  const location = useLocation();
  const profile = location.state?.profile || {};

  // Autofill form fields with profile data
  const [education, setEducation] = useState(profile.education || '');
  const [skills, setSkills] = useState(profile.skills || []);
  const [interests, setInterests] = useState(profile.interests || []);
  const [locationPref, setLocationPref] = useState(profile.location || '');
  const [experience, setExperience] = useState(profile.experience || '');

 const handleSubmit = async (e) => {
  e.preventDefault();
  const data = {
    education,
    skills,
    interests,
    location: locationPref,
    experience,
  };
  try {
    const response = await axios.post('http://localhost:9876/submit', data);
    console.log(response.status);
    if (response.status == 200) {
      alert('Form submitted!');
    } else {
      alert('Submission failed.');
    }
  } catch (err) {
    alert('Error submitting form.');
  }
};
  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-8 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4" >
        <div>
          <label className="block font-medium mb-1">Education</label>
          <input
            type="text"
            value={education}
            onChange={e => setEducation(e.target.value)}
            className="w-full border rounded px-3 py-2"
            readOnly
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Skills</label>
          <input
            type="text"
            value={skills.join(', ')}
            className="w-full border rounded px-3 py-2"
            readOnly
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Interests</label>
          <input
            type="text"
            value={interests.join(', ')}
            className="w-full border rounded px-3 py-2"
            readOnly
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Preferred Location</label>
          <input
            type="text"
            value={locationPref}
            className="w-full border rounded px-3 py-2"
            readOnly
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Experience</label>
          <input
            type="text"
            value={experience}
            className="w-full border rounded px-3 py-2"
            readOnly
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default Forms;