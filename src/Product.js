import React, { useState } from "react";
import "./Product.css";

// Product Card Component
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`product-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-badge">New</div>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="quick-view">Quick View</div>
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <div className="product-meta">
          <p className="product-price">${product.price}</p>
          <div className="product-rating">
            <span>★★★★</span><span className="last-star">★</span> 
            <span className="review-count">(42)</span>
          </div>
        </div>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart-btn">
          <span className="btn-icon">+</span> Add to Cart
        </button>
      </div>
    </div>
  );
};

// Products Header Component
const ProductsHeader = () => (
  <header className="product-header">
    <div className="header-content">
      <h1>Featured Collection</h1>
      <p>Discover our handpicked premium products</p>
    </div>
  </header>
);

// Main Product Component
const Product = () => {
  // Product data
  const products = [
    {
      id: 1,
      name: "Smart Watch",
      price: 199.99,
      description: "Latest smartwatch with health monitoring features",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNtYXJ0d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 149.99,
      description: "Noise cancelling headphones with premium sound quality",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Laptop",
      price: 899.99,
      description: "High-performance laptop perfect for work and gaming",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Smartphone",
      price: 699.99,
      description: "Latest smartphone with professional grade camera",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    }
  ];

  return (
    <div className="product-container">
      <ProductsHeader />
      <div className="filter-bar">
        <div className="filter-options">
          <span className="active">All</span>
          <span>New Arrivals</span>
          <span>Bestsellers</span>
          <span>Special Offers</span>
        </div>
        <div className="sort-options">
          <select defaultValue="featured">
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>
      
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
