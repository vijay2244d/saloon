import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import { VscMove } from 'react-icons/vsc';

const Movable = ({ children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [bounds, setBounds] = useState(undefined);
  const nodeRef = useRef(null);

  const handleStart = (e, data) => {
    setIsDragging(true);
    if (nodeRef.current) {
      nodeRef.current.style.cursor = 'grabbing';
      const bodyRect = document.body.getBoundingClientRect();
      const nodeRect = nodeRef.current.getBoundingClientRect();
      setBounds({
        top: -nodeRect.top,
        left: -nodeRect.left,
        right: bodyRect.width - nodeRect.right,
        bottom: bodyRect.height - nodeRect.bottom,
      });
    }
  };

  const handleStop = () => {
    setIsDragging(false);
    if (nodeRef.current) {
      nodeRef.current.style.cursor = 'grab';
    }
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".drag-handle"
      onStart={handleStart}
      onStop={handleStop}
      bounds={bounds}
    >
      <div
        ref={nodeRef}
        className="movable-container relative transition-all duration-300 ease-in-out"
        style={{
          boxShadow: isDragging ? '0 0 30px rgba(0,0,0,0.4)' : '0 10px 20px rgba(0,0,0,0.2)',
          transform: isDragging ? 'scale(1.05)' : 'scale(1)',
          zIndex: 1000,
          cursor: 'grab',
          borderRadius: '1.5rem', /* Fully rounded corners */
          padding: '8px', /* Add some padding around the dock */
          background: 'rgba(255, 255, 255, 0.1)', /* Frosted glass effect */
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="drag-handle absolute top-[-25px] left-1/2 transform -translate-x-1/2 p-2 cursor-move bg-gray-700 bg-opacity-50 rounded-full transition-opacity duration-300"
          style={{
            opacity: isHovered || isDragging ? 1 : 0,
            color: 'white'
          }}
          aria-label="Drag to move"
        >
          <VscMove size={20} />
        </div>
        {children}
      </div>
    </Draggable>
  );
};

export default Movable;
