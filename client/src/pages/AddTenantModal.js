import React, { useState } from 'react';
import Modal from 'react-modal';

const AddTenantModal = ({ isOpen, onRequestClose, onSave }) => {
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

  const handleSave = () => {
    onSave(tenantInfo);
    setTenantInfo({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Add Tenant Modal'
    >
      <h2>Add New Tenant</h2>
      <form>
        <input
          type='text'
          id='firstName'
          placeholder='First Name'
          value={tenantInfo.firstName}
          onChange={handleInputChange}
          required
        />
        {/* Add other input fields for last name, email, phone, address */}
        <button type='button' onClick={handleSave}>
          Save
        </button>
        <button type='button' onClick={onRequestClose}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default AddTenantModal;
