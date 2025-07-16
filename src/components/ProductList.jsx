import React, { useState } from 'react';
import './ProductList.css';

const ProductList = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample product data
  const products = [
    {
      id: 1,
      sku: 'PD001',
      name: 'Sản phẩm 1',
      category: 'Loại sản phẩm 1',
      categoryColor: 'lavender',
      inputTax: 10,
      outputTax: 10,
      unit: 'Hộp',
      unitsPerBox: 24,
      inventoryThreshold: 90,
      lastUpdated: '12/12/2025 12:00 bởi'
    },
    {
      id: 2,
      sku: 'PD002',
      name: 'Sản phẩm 2',
      category: 'Loại sản phẩm 2',
      categoryColor: 'pink',
      inputTax: 8,
      outputTax: 8,
      unit: 'Cái',
      unitsPerBox: 12,
      inventoryThreshold: 50,
      lastUpdated: '11/12/2025 14:30 bởi'
    },
    {
      id: 3,
      sku: 'PD003',
      name: 'Sản phẩm 3',
      category: 'Loại sản phẩm 3',
      categoryColor: 'emerald',
      inputTax: 10,
      outputTax: 10,
      unit: 'Hộp',
      unitsPerBox: 36,
      inventoryThreshold: 120,
      lastUpdated: '10/12/2025 09:15 bởi'
    },
    {
      id: 4,
      sku: 'PD004',
      name: 'Sản phẩm 4',
      category: 'Loại sản phẩm 4',
      categoryColor: 'orange',
      inputTax: 5,
      outputTax: 5,
      unit: 'Thùng',
      unitsPerBox: 48,
      inventoryThreshold: 200,
      lastUpdated: '09/12/2025 16:45 bởi'
    }
  ];

  const handleRowSelect = (id) => {
    setSelectedRows(prev => 
      prev.includes(id) 
        ? prev.filter(rowId => rowId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedRows(
      selectedRows.length === products.length 
        ? [] 
        : products.map(product => product.id)
    );
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColorClass = (color) => {
    switch(color) {
      case 'lavender': return 'category-lavender';
      case 'pink': return 'category-pink';
      case 'emerald': return 'category-emerald';
      case 'orange': return 'category-orange';
      case 'skyblue': return 'category-skyblue';
      case 'mint': return 'category-mint';
      case 'gold': return 'category-gold';
      default: return 'category-lavender';
    }
  };

  return (
    <div className="product-list">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-title-section">
          <h1 className="page-title">Danh sách sản phẩm</h1>
          <div className="breadcrumb">
            <span className="breadcrumb-item">Quản lý sản phẩm</span>
            <div className="breadcrumb-dot"></div>
            <span className="breadcrumb-item active">Danh sách sản phẩm</span>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="search-filter-bar">
        <div className="search-actions">
          <div className="search-field">
            <input
              type="text"
              placeholder="Tìm kiếm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img src="/src/assets/search-normal.svg" alt="Search" className="search-icon" />
          </div>
          <button className="filter-button">
            <img src="/src/assets/filter-add.svg" alt="Filter" />
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="table-container">
        {/* Table Header */}
        <div className="table-header">
          <div className="table-cell cell-checkbox">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={selectedRows.length === products.length}
                onChange={handleSelectAll}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="table-cell cell-image"></div>
          <div className="table-cell cell-sku">
            <span className="header-text">Mã SKU</span>
          </div>
          <div className="table-cell cell-name">
            <span className="header-text">Tên sản phẩm</span>
          </div>
          <div className="table-cell cell-category">
            <span className="header-text">Loại sản phẩm</span>
          </div>
          <div className="table-cell cell-input-tax">
            <span className="header-text">Thuế suất<br />đầu vào (%)</span>
          </div>
          <div className="table-cell cell-output-tax">
            <span className="header-text">Thuế suất<br />đầu ra (%)</span>
          </div>
          <div className="table-cell cell-unit">
            <span className="header-text">Đơn vị tính</span>
          </div>
          <div className="table-cell cell-units-per-box">
            <span className="header-text">Đơn vị/thùng</span>
          </div>
          <div className="table-cell cell-threshold">
            <span className="header-text">Ngưỡng cảnh báo tồn kho (đơn vị)</span>
          </div>
          <div className="table-cell cell-updated">
            <span className="header-text">Cập nhật lần cuối</span>
          </div>
          <div className="table-cell cell-actions"></div>
        </div>

        {/* Table Body */}
        <div className="table-body">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`table-row ${selectedRows.includes(product.id) ? 'selected' : ''}`}
            >
              <div className="table-cell cell-checkbox">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(product.id)}
                    onChange={() => handleRowSelect(product.id)}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="table-cell cell-image">
                <div className="product-image"></div>
              </div>
              <div className="table-cell cell-sku">
                <span className="cell-text">{product.sku}</span>
              </div>
              <div className="table-cell cell-name">
                <span className="cell-text">{product.name}</span>
              </div>
              <div className="table-cell cell-category">
                <span className={`category-chip ${getCategoryColorClass(product.categoryColor)}`}>
                  {product.category}
                </span>
              </div>
              <div className="table-cell cell-input-tax">
                <span className={`tax-chip ${getCategoryColorClass('lavender')}`}>
                  {product.inputTax}
                </span>
              </div>
              <div className="table-cell cell-output-tax">
                <span className={`tax-chip ${getCategoryColorClass('lavender')}`}>
                  {product.outputTax}
                </span>
              </div>
              <div className="table-cell cell-unit">
                <span className="cell-text">{product.unit}</span>
              </div>
              <div className="table-cell cell-units-per-box">
                <span className="cell-number">{product.unitsPerBox}</span>
              </div>
              <div className="table-cell cell-threshold">
                <span className="cell-number">{product.inventoryThreshold}</span>
              </div>
              <div className="table-cell cell-updated">
                <span className="cell-text">{product.lastUpdated}</span>
              </div>
              <div className="table-cell cell-actions">
                <button className="action-button">
                  <img src="/src/assets/more.svg" alt="More" />
                </button>
                <button className="sort-button">
                  <img src="/src/assets/arrow-down.svg" alt="Sort" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
