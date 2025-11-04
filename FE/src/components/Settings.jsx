import React from 'react';

const Settings = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      paddingTop: '80px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Settings</h1>
        <p>Manage your account preferences</p>
      </div>
    </div>
  );
};

export default Settings;