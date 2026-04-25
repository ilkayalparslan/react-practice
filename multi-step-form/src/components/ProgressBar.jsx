import useStore from '../store';

function ProgressBar() {
  const currentStep = useStore((state) => state.currentStep);

  const steps = [
    { number: 1, label: 'Personal Info' },
    { number: 2, label: 'Hotel Details' },
    { number: 3, label: 'Review' },
  ];
  return (
    <div className='progress-bar'>
      {steps.map((step, i) => (
        <div
          key={step.number}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <div
            className={`step ${currentStep === step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}
          >
            <span className='step-number'>
              {currentStep > step.number ? '✓' : step.number}
            </span>
            <span className='step-label'>{step.label}</span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`step-line ${currentStep > step.number ? 'active' : ''}`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
export default ProgressBar;
