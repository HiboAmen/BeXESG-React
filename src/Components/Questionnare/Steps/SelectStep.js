// SelectStep.js
import React from "react";

function SelectStep({
  selectOptions,
  selectedOptions,
  setSelectedOptions,
  activeQuestion,
  activeStep,
  handleSelection, // Receive the handleSelection function
}) {
  const handleCheckboxChange = (index) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedPrevSelectedOptions = [...prevSelectedOptions];
      updatedPrevSelectedOptions[activeQuestion] = Array(
        selectOptions?.length
      ).fill(false);
      updatedPrevSelectedOptions[activeQuestion][index] = true;

      // Call handleSelection to update the active table index
      handleSelection(selectOptions[index].label);

      return updatedPrevSelectedOptions;
    });
  };

  return (
    <div>
      {selectOptions?.map((option, index) => (
        <div key={index}>
          <div className="checkbox-containers">
            <div className="checkbox-options">
              <label className="SelectedOption">
                <input
                  type="checkbox"
                  checked={selectedOptions[activeQuestion]?.[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
                {option.label}
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SelectStep;
