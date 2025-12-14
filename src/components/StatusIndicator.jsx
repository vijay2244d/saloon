import React from 'react';
import { useStore } from '@nanostores/react';
import { isSalonOpen } from '../store';

export default function StatusIndicator() {
  const isOpen = useStore(isSalonOpen);

  return (
    <div className={`status-indicator ${isOpen ? 'open' : 'closed'}`}>
      <i className={`fa-solid ${isOpen ? 'fa-door-open' : 'fa-door-closed'}`}></i>
      <span>{isOpen ? 'Open' : 'Closed'}</span>
    </div>
  );
}
