import React, { Component, useState } from "react";
import "../styles/App.css";

const App = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState(props.slides);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleRestart = () => {
    setCurrentSlide(0);
  };

  const handleClick = (e) => {
    if (e.target.id === "button-next") {
      handleNext();
    } else if (e.target.id === "button-prev") {
      handlePrev();
    } else if (e.target.id === "button-restart") {
      handleRestart();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      handleNext();
    } else if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowUp") {
      handleRestart();
    }
  };

  const handleKeyUp = (e) => {
    if (
      e.key === "ArrowRight" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowUp"
    ) {
      setIsDisabled(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsDisabled(false);
    }
  };

  const handleMouseDown = (e) => {
    setIsDisabled(false);
  };

  const handleMouseUp = (e) => {
    setIsDisabled(true);
  };

  const handleMouseLeave = (e) => {
    setIsDisabled(true);
  };

  const handleMouseEnter = (e) => {
    setIsDisabled(false);
  };

  const handleTouchStart = (e) => {
    setIsDisabled(false);
  };

  const handleTouchEnd = (e) => {
    setIsDisabled(true);
  };

  const handleTouchMove = (e) => {
    setIsDisabled(true);
  };

  const handleTouchCancel = (e) => {
    setIsDisabled(true);
  };

  const handleTouchLeave = (e) => {
    setIsDisabled(true);
  };

  const handleTouchEnter = (e) => {
    setIsDisabled(false);
  };

  return (
    <>
      <div
        className="slide-container"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onKeyPress={handleKeyPress}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onTouchCancel={handleTouchCancel}
        onTouchLeave={handleTouchLeave}
        onTouchEnter={handleTouchEnter}
      >
        <div className="slide-title" data-testid="title">
          <h1>{slides.title}</h1>
        </div>
        <div className="slide-text" data-testid="text">
          <p>{slides.text}</p>
        </div>
      </div>
      <div className="button-container">
        <button
          className="button"
          id="button-prev"
          data-testid="button-prev"
          onClick={handleClick}
          disabled={isDisabled}
        >
          Prev
        </button>
        <button
          className="button"
          id="button-next"
          data-testid="button-next"
          onClick={handleClick}
          disabled={isDisabled}
        >
          Next
        </button>
        <button
          className="button"
          id="button-restart"
          data-testid="button-restart"
          onClick={handleClick}
          disabled={isDisabled}
        >
          Restart
        </button>
      </div>
    </>
  );
};

export default App;
