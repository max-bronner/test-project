import React from 'react';

function TextInput({ label, value, onChange, name }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} name={name} />
    </div>
  );
}

export default TextInput;
