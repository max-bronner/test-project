import React from 'react';

function Checkbox({ label, checked, onChange, name }) {
  return (
    <div className="form-group">
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} name={name} />
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
