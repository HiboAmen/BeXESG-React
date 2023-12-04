// QuestionnairePage.js
import React from 'react';
import {  useNavigate } from 'react-router-dom';
import QuestionContainer from '../Components/Questionnare/Questions/QuestionContainer';
import WatsonAssistantChat from '../Components/WatsonAssistantChat';
import NavigationBar from '../Components/NavigationBar/NavigationBar';
function QuestionnairePage() {
  // Use the useNavigate hook
  const navigate = useNavigate();

  return (
    <div>
      <header>
          <NavigationBar />
        </header>
      <QuestionContainer/>
      <WatsonAssistantChat/>
    </div>
  );
}

export default QuestionnairePage;
