import React from 'react';

const ContextMenu = ({ top, left, onHide, options }) => {
  return (
    <div
      className="context-menu"
      style={{ top, left }}
    >
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => {
            onHide();
            option.action();
          }}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default ContextMenu;
