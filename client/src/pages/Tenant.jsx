import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function TenantManagement() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tenantInfo, setTenantInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setTenantInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const saveTenantInfo = async () => {
    try {
      setLoading(true);
      // Assuming you have an API endpoint to save tenant info
      const res = await fetch('/api/tenant/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...tenantInfo,
          userId: currentUser.id,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success) {
        // Optional: show success message or navigate to another page
        console.log('Tenant information saved successfully.');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>
        Tenant Management
      </h1>
      <div className='border p-4 mb-4'>
        <h2 className='text-xl font-semibold mb-2'>Manage Tenant Information</h2>
        <form onSubmit={saveTenantInfo}>
          <input
            type='text'
            id='firstName'
            placeholder='First Name'
            value={tenantInfo.firstName}
            onChange={handleInputChange}
            className='border p-2 mb-2 rounded'
            required
          />
          <input
            type='text'
            id='lastName'
            placeholder='Last Name'
            value={tenantInfo.lastName}
            onChange={handleInputChange}
            className='border p-2 mb-2 rounded'
            required
          />
          <input
            type='email'
            id='email'
            placeholder='Email'
            value={tenantInfo.email}
            onChange={handleInputChange}
            className='border p-2 mb-2 rounded'
            required
          />
          <input
            type='tel'
            id='phone'
            placeholder='Phone'
            value={tenantInfo.phone}
            onChange={handleInputChange}
            className='border p-2 mb-2 rounded'
            required
          />
          <textarea
            id='address'
            placeholder='Address'
            value={tenantInfo.address}
            onChange={handleInputChange}
            className='border p-2 mb-2 rounded'
            required
          />
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </form>
        {error && <p className='text-red-500 mt-2'>{error}</p>}
      </div>
    </main>
  );
}
