import React from 'react';
import './Checkbox.css';

function Checkbox({ label, checked, onChange, name }) {
  return (
    <div className="form-group">
      <label className="form-group__label">
        <input className="form-group__checkbox" type="checkbox" checked={checked} onChange={onChange} name={name} />
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
