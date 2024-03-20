// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Toast from './components/Toast';
import Home from './pages/Home';

function App() {
  const [showToast, setShowToast] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const showToastFor3Seconds = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  useEffect(() => {
    if (showToast === true) {
      showToastFor3Seconds();
    }
  }, [showToast]);

  return (
    <div className='App'>
      <Home setShowToast={setShowToast} showToast={showToast} />
      {showToast && !isMobile && (
        <div className='toast-container'>
          <Toast
            message='Message here'
            hideInfoIcon={false}
            withoutAction={false}
            withoutDivider={false}
            crossIcon={false}
            notificationIcon='information'
          />
        </div>
      )}
    </div>
  );
}

export default App;
