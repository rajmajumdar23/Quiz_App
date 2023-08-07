import React from "react";
import "./Styling/Quiz.css";

const QuizResult = ({ score, name,}) => {

  return (
    <div className="result-section">
      <p>Hello, {name}! Here's your quiz result:</p>
      <p>You scored: {score} out of 12</p>
    </div>
  );
};

export default QuizResult;
