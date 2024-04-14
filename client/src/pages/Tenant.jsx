
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const TenantPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    residence: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSend = () => {
    // Build the URL with form data as query parameters
    const queryParams = new URLSearchParams(formData).toString();
    const url = `/landlord?${queryParams}`;
    // Navigate to the new page with the form data
    window.location.href = url;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Tenant Page</h1>

      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '400px', width: '100%' }}>
        {/* Form inputs go here */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px', width: '100%' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px', width: '100%' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px', width: '100%' }}>
          <label htmlFor="residence">Residence:</label>
          <input
            type="text"
            id="residence"
            name="residence"
            value={formData.residence}
            onChange={handleChange}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px', width: '100%' }}>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Use a button to submit the form and navigate */}
        <button
          type="button"
          onClick={handleSend}
          style={{ backgroundColor: 'blue', color: 'white', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}
        >
          Send
        </button>

        <Link
          to="/create-listing"
          style={{
            marginTop: '20px',
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            cursor: 'pointer',
            textAlign: 'center',
          }}
        >
          Back
        </Link>
      </form>
    </div>
  );
};

export default TenantPage;
