import React from 'react';
import './styles.css';

const StepThree = ({ data, errors, handleChange }) => {
  return (
    <div>
      <h2>Step 3: Additional Information</h2>
      <div>
        <label htmlFor="field3">Field 3:</label>
        <input
          type="text"
          id="field3"
          name="field3"
          value={data.field3 || ''}
          onChange={(e) => handleChange('field3', e.target.value)}
        />
        {errors.field3 && <span className="error">{errors.field3}</span>}
      </div>

      {/* 
        Add more input fields for Step 3 as needed
        Example:
        <div>
          <label htmlFor="field4">Field 4:</label>
          <input
            type="text"
            id="field4"
            name="field4"
            value={data.field4 || ''}
            onChange={(e) => handleChange('field4', e.target.value)}
          />
          {errors.field4 && <span className="error">{errors.field4}</span>}
        </div>
      */}
    </div>
  );
};

export default StepThree;


