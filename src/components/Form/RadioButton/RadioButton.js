import React from 'react';
import './RadioButton.css';

function RadioButton({ label, onChange, name }) {
  return (
    <div className="form-group">
      <label className="form-group__label">
        <input className="form-group__checkbox" type="radio" onChange={onChange} name={name} />
        {label}
      </label>
    </div>
  );
}

export default RadioButton;
