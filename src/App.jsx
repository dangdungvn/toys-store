import React, { useState } from 'react'
import Layout from './components/Layout'
import ProductList from './components/ProductList'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderContent = () => {
    switch(currentView) {
      case 'product-list':
        return <ProductList />;
      default:
        return (
          <div className="app-content">
            <h1>Quản lý phân phối đồ chơi</h1>
            <p>Đây là trang chủ của hệ thống quản lý phân phối đồ chơi.</p>
          </div>
        );
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={setCurrentView}>
      {renderContent()}
    </Layout>
  )
}

export default App
