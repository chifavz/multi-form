// StepTwo.js
import React from 'react';
import './styles.css';

const StepTwo = ({ data, errors, handleChange }) => {
  return (
    <div>
      <h2>Step 2: Additional Information</h2>
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

      {/* Add more input fields for Step 2 as needed */}
    </div>
  );
};

export default StepTwo;


