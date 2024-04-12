import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function TenantManagement() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tenants, setTenants] = useState([]);

  const handleAddTenant = () => {
    // Add logic to open a modal or form for adding a new tenant
  };

  const handleDeleteTenant = (id) => {
    // Add logic to delete a tenant with the given ID
  };

  const handleViewPayments = () => {
    // Add logic to view payments of all users
  };

  const handleViewBalances = () => {
    // Add logic to view balances of all users
  };

  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>
        Tenant Management
      </h1>
      <div className='flex justify-between mb-4'>
        <button
          onClick={handleAddTenant}
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        >
          Add Tenant
        </button>
        <div>
          <button
            onClick={handleViewPayments}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'
          >
            View Payments
          </button>
          <button
            onClick={handleViewBalances}
            className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'
          >
            View Balances
          </button>
        </div>
      </div>
      {/* Render tenants list here */}
      <div className='border p-4'>
        <h2 className='text-xl font-semibold mb-2'>Tenants List</h2>
        {tenants.length === 0 ? (
          <p>No tenants found.</p>
        ) : (
          <ul>
            {tenants.map((tenant) => (
              <li key={tenant.id} className='flex justify-between items-center'>
                <div>
                  <p>{`${tenant.firstName} ${tenant.lastName}`}</p>
                  <p>Email: {tenant.email}</p>
                  <p>Phone: {tenant.phone}</p>
                  <p>Address: {tenant.address}</p>
                </div>
                <button
                  onClick={() => handleDeleteTenant(tenant.id)}
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && <p className='text-red-500 mt-2'>{error}</p>}
    </main>
  );
}
