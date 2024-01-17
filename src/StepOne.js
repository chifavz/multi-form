import React from 'react';
import './styles.css';

const StepOne = ({ data, errors, handleChange }) => {
  return (
    <div>
      <h2>Step 1: Basic Information</h2>
      <div>
        <label htmlFor="field1">Field 1:</label>
        <input
          type="text"
          id="field1"
          name="field1"
          value={data.field1 || ''}
          onChange={(e) => handleChange('field1', e.target.value)}
        />
        {errors.field1 && <span className="error">{errors.field1}</span>}
      </div>

      <div>
        <label htmlFor="field2">Field 2:</label>
        <input
          type="text"
          id="field2"
          name="field2"
          value={data.field2 || ''}
          onChange={(e) => handleChange('field2', e.target.value)}
        />
        {errors.field2 && <span className="error">{errors.field2}</span>}
      </div>

      {/* Add more input fields for Step 1 as needed */}
    </div>
  );
};

export default StepOne;


