import React from 'react';
import { Link } from 'react-router-dom';
import './HomePageContainer.css'; // Import a CSS file for styling
import NavigationBar from '../NavigationBar/NavigationBar';
function HomePageContainer() {
  return (
    
    <div className="container">
      
   
      <div className="left">
  <h1>Discover Your Green Loan Eligibility</h1>
  <p className="header-description">
    Explore sustainability with our comprehensive questionnaire and determine if your company is ready to apply for a Green Loan.
  </p>
 
  <Link to="/Questionnaire">
    <button>Start Evaluation</button>
  </Link>
</div>

      {/* Right Side */}
      <div className="right">
        <img src="https://i.pinimg.com/564x/a8/e5/c5/a8e5c5f756ad1179e194bc3205d8b144.jpg" alt="Green Loan" />
      </div>
    </div>
  );
}

export default HomePageContainer;
