import React, { useState, useEffect } from "react";
import quizData from "./quizData";
import "./Styling/QuestionPage.css";

const QuestionPage = ({ level, handleQuizComplete }) => { 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerClick = (option) => {
    if (!selectedOption) {
      setSelectedOption(option);

      if (option === quizData[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }

      setTimeout(() => {
        if (currentQuestion < 11) {
          setSelectedOption(null);
          setCurrentQuestion(currentQuestion + 1);
        } else {
          handleQuizComplete(score);
        }
      }, 1000);
    }
  };
  

  useEffect(() => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  }, [level]);

  return (
    <>
    <div className="container"> 
      <div className="question-container">
        <h2>{quizData[currentQuestion].question}</h2>
        <div className="options-container">
          {quizData[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${
                selectedOption === option
                  ? option === quizData[currentQuestion].correctAnswer
                    ? "correct"
                    : "incorrect"
                  : ""
              }`}
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div></>
  );
};

export default QuestionPage;
