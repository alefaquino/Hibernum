import './Input.css';
import React from 'react';
import { Controller } from 'react-hook-form';
import Inputmask from 'inputmask'; // Importe o inputmask

const Input = ({ id, label, type, name, placeholder, validation, error, onBlur, mask }) => {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (mask && inputRef.current) {
      const inputmask = new Inputmask(mask);
      inputmask.mask(inputRef.current);
    }
  }, [mask]);

  return (
    <div className='d-flex flex-column' id='input-group'>
      <label htmlFor={id}>{label}</label>
      <Controller
        name={name}
        control={validation.control}
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            ref={inputRef}
            id={id}
            type={type}
            className='rounded input-component'
            placeholder={placeholder}
            onBlur={onBlur}
          />
        )}
      />
      {error && <span className='error-message'>{error.message}</span>}
    </div>
  );
};

export default Input;