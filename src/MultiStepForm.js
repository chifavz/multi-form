// Import statements...
import React, { useState } from 'react';
import './MultiStepForm.css'; // Import your CSS file for styling

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
   
    // Add more fields as needed...
  });
  const [errors, setErrors] = useState({});

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const validateStep = () => {
    // Validation logic...
    // For simplicity, let's assume all steps are valid.
    return true;
  };

  const handleSubmit = () => {
    if (validateStep()) {
      console.log('Form submitted:', formData);
      // Additional submission logic...
    }
  };

  const handleChange = (name, value) => {
    // Handle form field changes...
    // Update formData and errors state accordingly
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // For simplicity, clear errors for the changed field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const renderStep = () => {
    // Render steps based on currentStep...
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2>Step 1: Basic Information</h2>
            <div>
              <label htmlFor="field1">Name:</label>
              <input
                type="text"
                id="field1"
                name="field1"
                value={formData.field1}
                onChange={(e) => handleChange('field1', e.target.value)}
              />
              {errors.field1 && <span className="error">{errors.field1}</span>}
            </div>
            <div>
              <label htmlFor="field2">Email Address:</label>
              <input
                type="text"
                id="field2"
                name="field2"
                value={formData.field2}
                onChange={(e) => handleChange('field2', e.target.value)}
              />
              {errors.field2 && <span className="error">{errors.field2}</span>}
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Additional Information</h2>
            <div>
              <label htmlFor="field3">Phone Number:</label>
              <input
                type="text"
                id="field3"
                name="field3"
                value={formData.field3}
                onChange={(e) => handleChange('field3', e.target.value)}
              />
              {errors.field3 && <span className="error">{errors.field3}</span>}
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Confirmation</h2>
            <p>Review your information before submitting:</p>
            <ul>
              <li>Field 1: {formData.field1}</li>
              <li>Field 2: {formData.field2}</li>
              <li>Field 3: {formData.field3}</li>
             
              {/* Add more fields as needed... */}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      {renderStep()}

      <div className="button-container">
        {currentStep > 1 && <button onClick={prevStep}>Go back</button>}

        {currentStep < 3 ? (
          <button onClick={nextStep} disabled={!validateStep()}>
            Next Step
          </button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;