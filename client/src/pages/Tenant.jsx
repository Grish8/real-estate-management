import React, { useState } from 'react';

export default function TenantPage() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [notices, setNotices] = useState([]);
  const [newNotice, setNewNotice] = useState('');
  const [paySlips, setPaySlips] = useState([]);
  const [newPaySlip, setNewPaySlip] = useState('');
  const [totalTenants, setTotalTenants] = useState(0);
  const [selectedTenant, setSelectedTenant] = useState(null);
  const [message, setMessage] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const handleAddNotice = () => {
    if (newNotice.trim() !== '') {
      setNotices([...notices, newNotice]);
      setNewNotice('');
    }
  };

  const handleAddPaySlip = () => {
    if (newPaySlip.trim() !== '') {
      setPaySlips([...paySlips, newPaySlip]);
      setNewPaySlip('');
    }
  };

  const handleUpdateTotalTenants = () => {
    // Dummy function for fetching total tenants (replace with actual logic)
    const total = fetchTotalTenants();
    setTotalTenants(total);
  };

  const handleSendMessage = () => {
    // Dummy function for sending message (replace with actual logic)
    if (selectedTenant && message.trim() !== '') {
      console.log(`Sending message to ${selectedTenant}: ${message}`);
      // Add logic to send message to the selected tenant
      setSelectedTenant(null);
      setMessage('');
    }
  };

  // Dummy function for fetching total tenants (replace with actual logic)
  const fetchTotalTenants = () => {
    return 501080; // Assuming there are 10 tenants
  };

  return (
    <main className='p-3 max-w-4xl mx-auto flex justify-center items-center'>
      <div className='flex-1 mr-4'>
        {/* Tenants Section */}
        <div className='border p-4 mb-4'>
          <h2 className='text-xl font-semibold mb-2 text-green-400'>Tenants</h2>
          {/* Comments */}
          <div>
            <h3 className='text-lg font-semibold mb-2'>Comments</h3>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder='Write your comment...'
              className='border p-2 mb-2 rounded'
              rows={4}
            />
            <button
              onClick={handleAddComment}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              Add Comment
            </button>
            <ul className='mt-4'>
              {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
          </div>
          {/* Notices */}
          <div className='mt-4'>
            <h3 className='text-lg font-semibold mb-2'>Complaints</h3>
            <textarea
              value={newNotice}
              onChange={(e) => setNewNotice(e.target.value)}
              placeholder='Write your notice...'
              className='border p-2 mb-2 rounded'
              rows={4}
            />
            <button
              onClick={handleAddNotice}
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
            >
              Add Notice
            </button>
            <ul className='mt-4'>
              {notices.map((notice, index) => (
                <li key={index}>{notice}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        {/* Landlord Section */}
        <div className='border p-4 mb-4'>
          <h2 className='text-xl font-semibold mb-2 text-green-400'>Landlord</h2>
          {/* Pay Slips Reports */}
          <div>
            <h3 className='text-lg font-semibold mb-2'>Pay Slips Reports</h3>
            <textarea
              value={newPaySlip}
              onChange={(e) => setNewPaySlip(e.target.value)}
              placeholder='Write your pay slip report...'
              className='border p-2 mb-2 rounded'
              rows={4}
            />
            <button
              onClick={handleAddPaySlip}
              className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'
            >
              Add Pay Slip Report
            </button>
          </div>
          {/* Contact Tenant */}
          <div className='mt-4'>
            <h3 className='text-lg font-semibold mb-2'>Contact Tenant</h3>
            <select
              value={selectedTenant}
              onChange={(e) => setSelectedTenant(e.target.value)}
              className='border p-2 mb-2 rounded'
            >
              <option value='' disabled>Select Tenant</option>
              {/* Map through tenants data to populate options */}
              {/* Replace this with your actual tenants data */}
              {[1, 2, 3, 4, 5].map((tenantId) => (
                <option key={tenantId} value={`Tenant ${tenantId}`}>
                  Tenant {tenantId}
                </option>
              ))}
            </select>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Write your message...'
              className='border p-2 mb-2 rounded'
              rows={4}
            />
            <button
              onClick={handleSendMessage}
              className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
            >
              Send Message
            </button>
          </div>
          {/* Total Tenants section */}
          <div className='mt-4'>
            <h3 className='text-lg font-semibold mb-2'>Total Tenants</h3>
            <p>Total number of tenants: {totalTenants}</p>
            <button
              onClick={handleUpdateTotalTenants}
              className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4'
            >
              Update Total Tenants
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
