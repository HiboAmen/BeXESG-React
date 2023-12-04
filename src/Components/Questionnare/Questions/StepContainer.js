import React, { useState } from "react";

function StepContainer({
  questions,
  activeQuestion,
  activeStep,
  activeTableIndex,
  selectedOptions,
  userInputs, // Make sure to pass userInputs as a prop
  setActiveStep,
  setActiveTableIndex,
  setSelectedOptions,
}) {
  const [currentInput, setCurrentInput] = useState(""); // State to handle user input

  const currentQuestion = questions[activeQuestion];
  const currentStep = currentQuestion?.questions[0]?.steps?.[activeStep];

  const handleStepNavigation = (direction) => {
    if (direction === "previous" && activeStep > 0) {
      setActiveStep(activeStep - 1);
    } else if (
      direction === "next" &&
      activeStep < currentQuestion?.questions[0]?.steps?.length - 1
    ) {
      const hasTables = currentQuestion?.questions[0]?.steps?.some(
        (step) => step.tables && step.tables.length > 0
      );

      const hasUploadButtons =
        currentQuestion?.questions[0]?.steps?.[activeStep]?.uploadButtons
          ?.length > 0;

      const hasReviewSections =
        currentQuestion?.questions[0]?.steps?.[activeStep]?.reviewSections
          ?.length > 0;

      if (hasTables || hasUploadButtons || hasReviewSections) {
        setActiveStep(activeStep + 1);
      } else {
        // If no tables, upload buttons, or review sections, skip to the next step
        setActiveStep(activeStep + 2);
      }
    }
  };

  const handleSelection = (option) => {
    const currentStep = currentQuestion?.questions[0]?.steps?.[activeStep];

    const selectedOption = currentStep?.selectOptions.find(
      (opt) => opt.label === option
    );

    if (selectedOption && selectedOption.id !== undefined) {
      setSelectedOptions((prevSelectedOptions) => {
        const updatedPrevSelectedOptions = [...prevSelectedOptions];
        updatedPrevSelectedOptions[activeQuestion] =
          Array(
            currentQuestion?.questions[0]?.steps[activeStep]?.selectOptions
              ?.length
          ).fill(false);
        updatedPrevSelectedOptions[activeQuestion][selectedOption.id] = true;
        return updatedPrevSelectedOptions;
      });

      setActiveTableIndex(selectedOption.id);
      setActiveStep(2); // Assuming step 2 is where the table is displayed
    } else {
      setActiveStep(3); // Assuming step 3 is where the table is skipped
    }
  };

  // Render the selected options checkboxes
  const renderSelectedOptions = () => {
    const currentStep = currentQuestion?.questions[0]?.steps?.[activeStep];

    if (!currentStep || !currentStep.selectOptions) {
      return null;
    }

    return (
      <div>
        {currentStep.selectOptions?.map((option, index) => (
          <div key={index}>
               <div className="checkbox-containers">
               <div className="checkbox-options">
            <label className="SelectedOption">
              <input
                type="checkbox"
                checked={selectedOptions[activeQuestion]?.[index]}
                onChange={() =>
                  setSelectedOptions((prevSelectedOptions) => {
                    const updatedPrevSelectedOptions = [
                      ...prevSelectedOptions,
                    ];
                    updatedPrevSelectedOptions[
                      activeQuestion
                    ] = Array(
                      currentQuestion?.questions[0]?.steps[activeStep]
                        ?.selectOptions?.length
                    ).fill(false);
                    updatedPrevSelectedOptions[activeQuestion][index] = true;
                    return updatedPrevSelectedOptions;
                  })
                }
              />
              {option.label}
            </label>
          </div>
          </div>
          </div>
        ))}
      </div>
    );
  };

  // Render the user input textbox
  const renderUserInput = () => {
    return (
      <div>
        <label>User Input:</label>
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
        />
      </div>
    );
  };

  const renderReviewSummary = () => {
    const selectedOptionsFromCurrentQuestion =
      selectedOptions[activeQuestion] || [];
    const selectedOptionId = selectedOptionsFromCurrentQuestion.findIndex(
      (selected) => selected
    );
  
    const tablesToRender =
      currentQuestion?.questions[0]?.steps?.[activeStep]?.tables?.find(
        (table) => table.id === selectedOptionId
      );
  
    const uploadButtonsToRender =
      currentQuestion?.questions[0]?.steps?.[activeStep]?.uploadButtons?.filter(
        (button) => button.id === selectedOptionId
      );
  
    const renderUserInputs = () => {
      if (!userInputs || userInputs.length === 0) {
        return null;
      }
  
      return userInputs.map((input, index) => (
        <p key={index}>{`User Input ${index + 1}: ${input}`}</p>
      ));
    };
  
    return (
      <div className="review-summary">
        <h4>Review Summary</h4>
        <p>Selected Option: {selectedOptionId}</p>
        {/* Render other summary details */}
        {tablesToRender && renderTables(tablesToRender)}
        {uploadButtonsToRender && renderUploadButtons(uploadButtonsToRender)}
        {renderReviewSections()}
        {renderUserInputs()}
      </div>
    );
  };
  
  
  const renderDynamicContent = (contentToRender) => {
    if (!contentToRender) {
      return null;
    }
  
    return contentToRender.map((content, index) => (
      <div key={index}>
        <p>{`${content.label}: ${content.value}`}</p>
      </div>
    ));
  };
  


  const renderTables = () => {
    const currentStep = currentQuestion?.questions[0]?.steps?.[activeStep];
  
    if (!currentStep || !currentStep.tables) {
      return null;
    }
  
    const selectedOptionsFromCurrentQuestion =
      selectedOptions[activeQuestion] || [];
    const selectedOptionId = selectedOptionsFromCurrentQuestion.findIndex(
      (selected) => selected
    );
  
    const tablesToRender = currentStep.tables.find(
      (table) => table.id === selectedOptionId
    );
  
    if (!tablesToRender) {
      return null;
    }
  
    const { title, headers, rows } = tablesToRender;
  
    return (
      <div key={activeTableIndex} className="TableContainer2">
        <h4 className="table-title">{title}</h4>
        <table className="table">
          <thead className="TableHeader">
            <tr>
              {headers?.map((header, headerIndex) => (
                <th key={headerIndex} className="tabel-cell">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{row.label}</td>
                {row.cells?.map((cell, cellIndex) => (
                  <td key={cellIndex} contentEditable={true}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderUploadButtons = (uploadButtons) => {
    if (!uploadButtons || uploadButtons.length === 0) {
      // Skip to the next step if there are no upload buttons
      return null;
    }
  
    const selectedOptionsFromCurrentQuestion =
      selectedOptions[activeQuestion] || [];
    const selectedOptionId = selectedOptionsFromCurrentQuestion.findIndex(
      (selected) => selected
    );
  
    const uploadButtonsToRender = uploadButtons.filter(
      (button) => button.id === selectedOptionId
    );
  
    if (uploadButtonsToRender.length === 0) {
      return null;
    }
  
    return uploadButtonsToRender.map((uploadButton, index) => (
      <div className="transparent-box3" key={index}>
        <div className="upload-container">
          <input
            id={uploadButton.id}
            type={uploadButton.type}
            className="custom-file-upload"
          />
          <div className="documentation-text">
            <label>{uploadButton.label}:</label>
          </div>
        </div>
      </div>
    ));
  };

  const renderReviewSections = () => {
    const currentStep = currentQuestion?.questions[0]?.steps?.[activeStep];
  
    if (!currentStep || !currentStep.reviewSections) {
      return null;
    }
  
    return (
      <div className="review-section-container">
        {currentStep.reviewSections.map((section, index) => (
          <div key={index} className="review-section">
            <h4>{section.title}</h4>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    );

  if (!currentStep) {
    return null;
  }
};

  return (
    <div className="scope-content">
      <p className="subtitle">{currentStep.subTitle}</p>

      {currentStep.selectOptions && renderSelectedOptions()}

      {currentStep.tables && renderTables()}

      {currentStep.uploadButtons && renderUploadButtons(currentStep.uploadButtons)}

      {currentStep.reviewSections && renderReviewSections()}

      {activeStep === currentQuestion?.questions[0]?.steps?.length - 1 && (
        <div>
          {renderReviewSummary()}
        </div>
      )}

    
    </div>
  );
}

export default StepContainer;
