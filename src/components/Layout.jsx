import React from 'react';
import Sidebar from './Sidebar';
import './Layout.css';

const Layout = ({ children, currentView, onNavigate }) => {
  return (
    <div className="layout">
      <Sidebar currentView={currentView} onNavigate={onNavigate} />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
