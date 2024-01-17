import React from 'react';
import MultiStepForm from './MultiStepForm';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  return (
    <div className="app-container">
      <h1>Multi-Step Form </h1>
      <ErrorBoundary>
        <MultiStepForm />
      </ErrorBoundary>
    </div>
  );
};

export default App;

