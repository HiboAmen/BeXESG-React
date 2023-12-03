import React from 'react';
import { Link } from 'react-router-dom';
import './HomePageContainer.css'; // Import a CSS file for styling

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
        <img src="https://i.pinimg.com/564x/f1/83/dd/f183dd5c2874685aefa0256f6eeb17ee.jpg" alt="Green Loan" />
      </div>
    </div>
  );
}

export default HomePageContainer;
