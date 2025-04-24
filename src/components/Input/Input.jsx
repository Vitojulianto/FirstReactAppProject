import React from 'react';

const Input = (props) => {
  const { className = '', type, placeholder, name, id ,value, onChange} = props;

  return (
    <div className="w-full text-gray-700">
      <input
        type={type}
        name={name}
        id={id || name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
      />
    </div>
  );
};

export default Input;
