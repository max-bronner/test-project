import React from 'react';
import './TextInput.css';

function TextInput({ label, value, onChange, name }) {
  return (
    <div className="form-group">
      <label className="form-group__label">{label}</label>
      <input className="form-group__input" type="text" value={value} onChange={onChange} name={name} />
    </div>
  );
}

export default TextInput;
