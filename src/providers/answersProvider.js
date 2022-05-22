import { createContext, useContext, useState } from "react";
import shortid from "shortid";

const dateNow = () => {
  const date = new Date();
  return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
};

const DATA = [
  {
    id: shortid.generate(),
    creator: "Teacher",
    header: "Hello!",
    deadline: "12.08.22",
    group: "1 курс - IOS",
    answers: [
      {
        user: "Белова Н. А.",
        date: "12.06.17",
        file: {
          name: "dsadsa",
          url: "",
        },
      },
    ],
  },
  {
    id: shortid.generate(),
    creator: "Teacher",
    header: "Good Morning!",
    deadline: "20.08.22",
    group: "1 курс - IOS",
    answers: [
      {
        user: "Демиденко К. В.",
        date: "12.06.18",
        file: {
          name: "dsadsvcxa",
          url: "",
        },
      },
    ],
  },
];

const context = createContext({
  assignments: [],
  setAssigments: () => {},
  saveNewAnswer: () => {},
});

export const useAnswers = () => useContext(context);

export const AnswersProvider = ({ children }) => {
  const [assignments, setAssigments] = useState(DATA);
  const saveNewAnswer = ({ fileName, url, assignmentId }) => {
    const newAssignments = JSON.parse(JSON.stringify(assignments));
    newAssignments[
      newAssignments.findIndex((assignment) => assignment.id === assignmentId)
    ].answers.push({
      user: "userTest",
      date: dateNow(),
      file: {
        name: fileName,
        url,
      },
    });
    setAssigments(newAssignments);
  };

  return (
    <context.Provider
      value={{
        assignments,
        setAssigments,
        saveNewAnswer,
      }}
    >
      {children}
    </context.Provider>
  );
};
