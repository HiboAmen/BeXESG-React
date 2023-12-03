// AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import QuestionnairePage from '../Pages/Questionnaire';
import QuestionContainer from '../Components/Questionnare/Questions/QuestionContainer';
import AuthRoutes from './AuthRoutes'; // Import the AuthRoutes component

function AppRoutes() {
  return (
    <Routes>
      {/* Main application routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/questionnaire" element={<QuestionnairePage />}>
        <Route path="question1" element={<QuestionContainer />} />
      </Route>

      {/* Authentication routes */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* ... Other routes ... */}
    </Routes>
  );
}

export default AppRoutes;
