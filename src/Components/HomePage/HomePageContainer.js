import React from 'react';
import { Link } from 'react-router-dom';
import './HomePageContainer.css'; // Import a CSS file for styling
import NavigationBar from '../NavigationBar/NavigationBar';
function HomePageContainer() {
  return (
    
    <div className="container">
      
      {/* Left Side */}
      <div className="left">
        <h1>Are you fit for applying Green Loan?</h1>
        <h4>Take the questionnaire to check and see if your company is aligned with Green Loan Principles.</h4>
        {/* Link the button to QuestionContainer */}
        <Link to="/Questionnaire">
          <button>TAKE THE QUESTIONNAIRE</button>
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
