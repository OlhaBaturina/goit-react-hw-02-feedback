import React from "react";
import s from "./Feedback.module.css";

const Feedback = (onGoodFeedback, onNeutralFeedback, onBadFeedback) => (
  <div className={s.feedback_thumb}>
    <button className={s.feedback} onClick={onGoodFeedback}>
      Good
    </button>
    <button className={s.feedback} onClick={onNeutralFeedback}>
      Neutral
    </button>
    <button className={s.feedback} onClick={onBadFeedback}>
      Bad
    </button>
  </div>
);

export default Feedback;
