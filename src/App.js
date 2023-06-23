import React, { useState } from 'react';
import './css/App.css'

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getContent = () => {
    switch (activeTab) {
      case 'home':
        return <div className='right-panel home-panel'>Home Content</div>;
      case 'contact':
        return <div className='right-panel contact-panel'>Contact Information</div>;
      case 'information':
        return <div className='right-panel info-panel'>Information Content</div>;
      case 'guide':
        return <div className='right-panel guide-panel'>Guide Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className='page'>
      <div className="left-panel">
        <div className={`tab ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabClick('home')}>
          Home
        </div>
        <div className={`tab ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => handleTabClick('contact')}>
          Contact
        </div>
        <div className={`tab ${activeTab === 'information' ? 'active' : ''}`} onClick={() => handleTabClick('information')}>
          Information
        </div>
        <div className={`tab ${activeTab === 'guide' ? 'active' : ''}`} onClick={() => handleTabClick('guide')}>
          Guide
        </div>
      </div>
      <div className="content-panel">{getContent()}</div>
    </div>
  );
};

export default App;
