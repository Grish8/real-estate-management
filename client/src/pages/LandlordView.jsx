import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LandlordView = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    residence: '',
    comment: '',
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const decodedFormData = {
      name: decodeURIComponent(searchParams.get('name') || ''),
      email: decodeURIComponent(searchParams.get('email') || ''),
      residence: decodeURIComponent(searchParams.get('residence') || ''),
      comment: decodeURIComponent(searchParams.get('comment') || ''),
    };
    setFormData(decodedFormData);
  }, [location.search]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h1 className='text-3xl font-semibold text-center my-7'>
    Landlord Page
  </h1> 
      <div>
        <label>Name:</label>
        <span>{formData.name}</span>
      </div>
      <div>
        <label>Email:</label>
        <span>{formData.email}</span>
      </div>
      <div>
        <label>Residence:</label>
        <span>{formData.residence}</span>
      </div>
      <div>
        <label>Comment:</label>
        <span>{formData.comment}</span>
      </div>
      <Link
        to="/tenant"
        style={{
          marginTop: '20px',
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
          cursor: 'pointer',
          textAlign: 'center',
          display: 'block', // Added to make the link a block element
          width: 'fit-content', // Added to adjust the width based on content
        }}
      >
        Back
      </Link>
    </div>
  );
};

export default LandlordView;
