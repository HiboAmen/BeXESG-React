// ReviewSectionsComponent.js
import React from "react";

function ReviewStep({ reviewSections }) {
  if (!reviewSections) {
    return null;
  }

  return (
    <div className="review-section-container">
      {reviewSections.map((section, index) => (
        <div key={index} className="review-section">
          <h4>{section.title}</h4>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewStep;
