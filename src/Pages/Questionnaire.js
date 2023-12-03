// QuestionnairePage.js
import React from 'react';
import {  useNavigate } from 'react-router-dom';
import QuestionContainer from '../Components/Questionnare/Questions/QuestionContainer';
import WatsonAssistantChat from '../Components/WatsonAssistantChat';
function QuestionnairePage() {
  // Use the useNavigate hook
  const navigate = useNavigate();

  return (
    <div>
      <QuestionContainer/>
      <WatsonAssistantChat/>
    </div>
  );
}

export default QuestionnairePage;
