// import PropTypes from "prop-types";
import React from "react";
import cs from "./Statistics.module.css";

const Statistics = ({
  onGood,
  onNeutral,
  onBad,
  onTotal,
  onPositivePercentage = "0",
}) => (
  <>
    <h2 className={cs.title}>Statistics</h2>
    <ul className={cs.list}>
      <li className={cs.item}>Good: {onGood}</li>
      <li className={cs.item}>Neutral: {onNeutral}</li>
      <li className={cs.item}>Bad: {onBad}</li>
    </ul>
    <ul className={cs.listTotal}>
      <li className={cs.item}>Total: {onTotal}</li>
      <li className={cs.item}>Positive feedback: {onPositivePercentage}%</li>
    </ul>
  </>
);

// FeedbackOptions.propTypes = {
//   name: PropTypes.string,
//   tag: PropTypes.string,
//   location: PropTypes.string,
//   avatar: PropTypes.string,
//   stats: PropTypes.objectOf(PropTypes.number),
// };

export default Statistics;
