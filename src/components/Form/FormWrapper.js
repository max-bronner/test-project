import React, { useState } from 'react';
import './FormWrapper.css';

function FormWrapper({ children, formType, url, onSubmit }) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log(formData);
    }
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit} data-form-type={formType} action={url}>
      {React.Children.map(children, (child) => React.cloneElement(child, { onChange: handleInputChange, value: formData[child.props.name] || '' }))}
      <button className="form-wrapper__button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default FormWrapper;
