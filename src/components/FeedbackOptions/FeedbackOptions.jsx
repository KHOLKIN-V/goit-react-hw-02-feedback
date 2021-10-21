import PropTypes from "prop-types";
import React from "react";
import cs from "./Feedbackoptions.module.css";

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <>
    <h1 className={cs.title}>Please leave feedback</h1>
    <div className={cs.btnContainer}>
      <button className={cs.btn} onClick={onGood}>
        Good
      </button>
      <button className={cs.btn} onClick={onNeutral}>
        Neutral
      </button>
      <button className={cs.btn} onClick={onBad}>
        Bad
      </button>
    </div>
  </>
);

FeedbackOptions.propTypes = {
  onGood: PropTypes.number,
  onNeutral: PropTypes.number,
  onBad: PropTypes.number,
};

export default FeedbackOptions;
