import PropTypes from "prop-types";
import React from "react";
import cs from "./Feedbackoptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <h1 className={cs.title}>Please leave feedback</h1>
    <div className={cs.btnContainer}>
      {options.map((opt) => (
        <button
          type="button"
          name={opt}
          className={cs.btn}
          onClick={onLeaveFeedback}
        >
          {opt}
        </button>
      ))}
    </div>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
