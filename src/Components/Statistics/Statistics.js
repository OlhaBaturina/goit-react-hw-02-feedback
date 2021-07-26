import React from "react";
import s from "./Statistics.module.css";

const Statistics = (good, neutral, bad, positiveFeedback, totalFeedback) => (
  <ul className={s.statistics_thumb}>
    <li className={s.good}>Good: {good}</li>
    <li className={s.neutral}>Neutral: {neutral}</li>
    <li className={s.bad}>Bad: {bad}</li>
    <li className={s.total}>Total: {totalFeedback}</li>
    <li className={s.positive}>Positive feedback: {positiveFeedback || 0}%</li>
  </ul>
);

export default Statistics;
