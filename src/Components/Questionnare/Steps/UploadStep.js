// UploadButtonsComponent.js
import React from "react";

function UploadStep({ uploadButtons }) {
  if (!uploadButtons || uploadButtons.length === 0) {
    return null;
  }

  return uploadButtons.map((uploadButton, index) => (
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
}

export default UploadStep;
