import React from "react";
import classes from "./AnswerItem.module.css";

const AnswerItem = props => {
  const cls = [classes.AnswerItem];
  if (props.answerState) {
    cls.push(classes[props.answerState]);
  }
  return <li className={cls.join(' ')} onClick={props.onAnswerClickHandler.bind(this, props.answer.id)}>{props.answer.text}</li>;
};
export default AnswerItem;
