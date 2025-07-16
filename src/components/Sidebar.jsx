import React, { useState } from 'react';
import './Sidebar.css';
import gridIcon from '../assets/icons/grid-2.svg';
import userIcon from '../assets/icons/user-square.svg';
import boxIcon from '../assets/icons/box.svg';
import receiptIcon from '../assets/icons/receipt-item.svg';
import dollarIcon from '../assets/icons/dollar-square.svg';
import notificationIcon from '../assets/icons/notification.svg';
import settingIcon from '../assets/icons/setting-2.svg';
import logoutIcon from '../assets/icons/logout.svg';
import arrowUpIcon from '../assets/icons/arrow-up.svg';
import arrowDownIcon from '../assets/icons/arrow-down.svg';
import avatar from '../assets/images/avatar.png';

const Sidebar = ({ onNavigate, currentView }) => {
  const [expandedSection, setExpandedSection] = useState('products');
  const [isHovered, setIsHovered] = useState(false);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div 
      className={`sidebar ${isHovered ? 'expanded' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="sidebar-top">
        <div className="logo-container">
          <div className="logo">
            <div className="logo-bg"></div>
            <div className="logo-arrow"></div>
          </div>
          {isHovered && <span className="company-name">Company S</span>}
        </div>
        
        <div className="nav-items">
          {/* Products Section */}
          <div className="nav-section">
            <div 
              className={`nav-item ${expandedSection === 'products' ? 'active' : ''}`}
              onClick={() => toggleSection('products')}
            >
              <div className="nav-content">
                <img src={gridIcon} alt="Dashboard" className="nav-icon" />
                {isHovered && <span className="nav-label">Quản lý sản phẩm</span>}
                {isHovered && (
                  <img 
                    src={expandedSection === 'products' ? arrowUpIcon : arrowDownIcon} 
                    alt="Toggle" 
                    className="nav-arrow" 
                  />
                )}
              </div>
            </div>
            
            {isHovered && expandedSection === 'products' && (
              <div className="nav-subitems">
                <div className="nav-subitem">
                  <span className="nav-sublabel">Nhà cung cấp</span>
                </div>
                <div className="nav-subitem">
                  <span className="nav-sublabel">Loại sản phẩm</span>
                </div>
                <div 
                  className={`nav-subitem ${currentView === 'product-list' ? 'selected' : ''}`}
                  onClick={() => onNavigate('product-list')}
                >
                  <span className="nav-sublabel">Danh sách sản phẩm</span>
                </div>
                <div className="nav-subitem">
                  <span className="nav-sublabel">Bảng giá</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Users Section */}
          <div className="nav-section">
            <div 
              className={`nav-item ${expandedSection === 'users' ? 'active' : ''}`}
              onClick={() => toggleSection('users')}
            >
              <div className="nav-content">
                <img src={userIcon} alt="Users" className="nav-icon" />
                {isHovered && <span className="nav-label">Quản lý khách hàng</span>}
                {isHovered && (
                  <img 
                    src={expandedSection === 'users' ? arrowUpIcon : arrowDownIcon} 
                    alt="Toggle" 
                    className="nav-arrow" 
                  />
                )}
              </div>
            </div>
          </div>
          
          {/* Inventory Section */}
          <div className="nav-section">
            <div 
              className={`nav-item ${expandedSection === 'inventory' ? 'active' : ''}`}
              onClick={() => toggleSection('inventory')}
            >
              <div className="nav-content">
                <img src={boxIcon} alt="Inventory" className="nav-icon" />
                {isHovered && <span className="nav-label">Quản lý kho</span>}
                {isHovered && (
                  <img 
                    src={expandedSection === 'inventory' ? arrowUpIcon : arrowDownIcon} 
                    alt="Toggle" 
                    className="nav-arrow" 
                  />
                )}
              </div>
            </div>
          </div>
          
          {/* Orders Section */}
          <div className="nav-section">
            <div 
              className={`nav-item ${expandedSection === 'orders' ? 'active' : ''}`}
              onClick={() => toggleSection('orders')}
            >
              <div className="nav-content">
                <img src={receiptIcon} alt="Orders" className="nav-icon" />
                {isHovered && <span className="nav-label">Quản lý đơn hàng</span>}
                {isHovered && (
                  <img 
                    src={expandedSection === 'orders' ? arrowUpIcon : arrowDownIcon} 
                    alt="Toggle" 
                    className="nav-arrow" 
                  />
                )}
              </div>
            </div>
          </div>
          
          {/* Finance Section */}
          <div className="nav-section">
            <div 
              className={`nav-item ${expandedSection === 'finance' ? 'active' : ''}`}
              onClick={() => toggleSection('finance')}
            >
              <div className="nav-content">
                <img src={dollarIcon} alt="Finance" className="nav-icon" />
                {isHovered && <span className="nav-label">Quản lý tài chính</span>}
                {isHovered && (
                  <img 
                    src={expandedSection === 'finance' ? arrowUpIcon : arrowDownIcon} 
                    alt="Toggle" 
                    className="nav-arrow" 
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="sidebar-bottom">
        <div className="divider"></div>
        
        <div className="nav-item">
          <div className="nav-content">
            <img src={notificationIcon} alt="Notifications" className="nav-icon" />
            {isHovered && <span className="nav-label">Thông báo</span>}
            {isHovered && <div className="notification-badge-text">2</div>}
            <div className="notification-badge"></div>
          </div>
        </div>
        
        <div className="nav-section">
          <div 
            className={`nav-item ${expandedSection === 'settings' ? 'active' : ''}`}
            onClick={() => toggleSection('settings')}
          >
            <div className="nav-content">
              <img src={settingIcon} alt="Settings" className="nav-icon" />
              {isHovered && <span className="nav-label">Cài đặt hệ thống</span>}
              {isHovered && (
                <img 
                  src={expandedSection === 'settings' ? arrowUpIcon : arrowDownIcon} 
                  alt="Toggle" 
                  className="nav-arrow" 
                />
              )}
            </div>
          </div>
        </div>
        
        <div className="nav-item">
          <div className="nav-content">
            <img src={logoutIcon} alt="Logout" className="nav-icon logout-icon" />
            {isHovered && <span className="nav-label logout-label">Đăng xuất</span>}
          </div>
        </div>
        
        {isHovered && (
          <div className="profile-section">
            <div className="avatar-container">
              <img src={avatar} alt="Avatar" className="avatar" />
            </div>
            <div className="profile-info">
              <div className="profile-name">Lê Hoàng Anh</div>
              <div className="profile-username">lehoanganh123</div>
            </div>
          </div>
        )}
        
        {!isHovered && (
          <div className="avatar-container">
            <img src={avatar} alt="Avatar" className="avatar" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
