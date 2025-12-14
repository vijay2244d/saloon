import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import { isSalonOpen, updateSalonStatus } from '../store';

export default function SaloonStatus() {
  const isOpen = useStore(isSalonOpen);

  const toggleStatus = () => {
    updateSalonStatus(!isOpen);
  };

  return (
    <div className="saloon-status">
      <label className="switch">
        <input type="checkbox" checked={isOpen} onChange={toggleStatus} />
        <span className="slider round"></span>
      </label>
      <span className="status-text">{isOpen ? 'Open' : 'Closed'}</span>
    </div>
  );
}
