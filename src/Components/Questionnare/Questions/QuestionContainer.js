import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WatsonAssistantChat from "../../WatsonAssistantChat";
import StepContainer from "./StepContainer";
import "./Question1.css";


function QuestionContainer() {
  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [activeTableIndex, setActiveTableIndex] = useState(0);
  const [showRightCrossbox, setShowRightCrossbox] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState([]);


  useEffect(() => {
    fetch("/questionTemplate.json")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.questionTemplate) {
          setQuestions(data.questionTemplate);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const handleQuestionNavigation = (direction) => {
    if (direction === "previous" && activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1);
      setActiveStep(0);
      setActiveTableIndex(0);
    } else if (direction === "next" && activeQuestion < questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
      setActiveStep(0);
      setActiveTableIndex(0);
    }
  };


  if (questions.length === 0) {
    return <div>Loading...</div>;
  }


  return (
    <div className="main-content">
      <div className="content-container">
        <div className="home-page-crossbox">
          <div className="header-container">
            <div className="arrow-box arrow-left">
              <Link onClick={() => handleQuestionNavigation("previous")}>
                Back
              </Link>
            </div>
            <div className="rectangle-box">
              <h2>{questions[activeQuestion]?.header}</h2>
            </div>
            <div className="arrow-box arrow-right">
              {activeQuestion < questions.length - 1 && (
                <Link onClick={() => handleQuestionNavigation("next")}>
                  Next
                </Link>
              )}
            </div>
          </div>


          <div className="Question">
            <p style={{ fontSize: "large", zoom: 1.5 }}>
              {questions[activeQuestion]?.questions[0]?.text}
            </p>
          </div>


          <StepContainer
            questions={questions}
            activeQuestion={activeQuestion}
            activeStep={activeStep}
            activeTableIndex={activeTableIndex}
            selectedOptions={selectedOptions}
            setActiveStep={setActiveStep}
            setActiveTableIndex={setActiveTableIndex}
            setSelectedOptions={setSelectedOptions}
          />


          <div className="nav-buttons">
            {activeStep > 0 && (
              <button
                className="previousButton"
                onClick={() => setActiveStep((prevStep) => prevStep - 1)}
              >
                Previous
              </button>
            )}
            {activeStep <
              questions[activeQuestion]?.questions[0]?.steps?.length - 1 && (
              <button
                className="NextButton"
                onClick={() => setActiveStep((prevStep) => prevStep + 1)}
              >
                Choose and Next
              </button>
            )}
          </div>
        </div>
        {showRightCrossbox && (
          <div className="right-crossbox">
            <WatsonAssistantChat />
          </div>
        )}
      </div>
    </div>
  );
}


export default QuestionContainer;