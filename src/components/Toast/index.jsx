import React from 'react';
import './Toast.css';
import { Info, X, Warning, WarningCircle, CheckCircle } from 'phosphor-react';

const Toast = ({
  message,
  hideInfoIcon,
  withoutAction,
  withoutDivider,
  crossIcon,
  notificationIcon,
}) => {
  return (
    <div className='toast'>
      {!hideInfoIcon && renderIcon(notificationIcon)}
      <span className='message'>{message}</span>
      {!withoutDivider && <div className='divider'></div>}
      {!withoutAction && (
        <button
          className='custom-button'
          onClick={() => console.log('Button clicked')}
        >
          Button
        </button>
      )}
      {crossIcon && (
        <button
          className='close-button'
          onClick={() => console.log('Cross Button clicked')}
        >
          <X size={24} />
        </button>
      )}
    </div>
  );
};
const renderIcon = (notificationIcon) => {
  switch (notificationIcon) {
    case 'information':
      return <Info size={24} className='circle-icon' />;
    case 'error':
      return <Warning size={24} className='error-icon' />;
    case 'warning':
      return <WarningCircle size={24} className='warning-icon' />;
    case 'success':
      return <CheckCircle size={24} className='success-icon' />;
    default:
      return null;
  }
};

export default Toast;
