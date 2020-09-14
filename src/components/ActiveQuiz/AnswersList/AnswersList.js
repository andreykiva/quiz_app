import React from "react";
import classes from "./AnswersList.module.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => {
  return (
    <ul className={classes.AnswersList}>
      {props.answers.map((answer, i) => (
        <AnswerItem
          key={i}
          answer={answer}
          onAnswerClickHandler={props.onAnswerClickHandler}
          answerState={props.answerState && props.answerState[answer.id]}
        />
      ))}
    </ul>
  );
};

export default AnswersList;
