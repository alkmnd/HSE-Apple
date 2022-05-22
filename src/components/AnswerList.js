import React from "react";
import "./styles.css";
import Answer from "./Answer";
import { useParams } from "react-router-dom";
import { useAnswers } from "../providers/answersProvider";

function AnswerList() {
  const { id } = useParams();
  const { assignments } = useAnswers();

  const currentAssignment = assignments.find(
    (assignment) => assignment.id === id
  );

  return (
    <>
      <div className="answer-list">
        <div className="answer-header">
          <div className="help-text">Ответы</div>
        </div>
        <div className="answer-centralization">
          {currentAssignment?.answers?.map((answer, index) => (
            <Answer key={index} {...answer} />
          ))}
        </div>
      </div>
    </>
  );
}
export default AnswerList;
