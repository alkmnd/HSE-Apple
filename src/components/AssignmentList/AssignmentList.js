import { useState, useMemo } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import Assignment from "../Assignment/Assignment";
import CreateNewAssignment from "../CreateNewAssignment/CreateNewAssignment";
import { useAnswers } from "../../providers/answersProvider";
import shortid from "shortid";
import "./AssignmentList.css"

/**
 * Компонент с отображением заданий и компонентов для работы с ними.
 * @returns Возвращает html-компонент.
 */
function AssignmentList() {
  const [groupName, setGroupName] = useState("all");
  const [modalWindowIsOpen, setModalWindowIsOpen] = useState(false);
  const { assignments, setAssigments } = useAnswers();
  /**
   * Фильтрация заданий по выбранному значению из select'a.
   */
  const filteredAssigments = useMemo(
    () =>
      groupName === "all"
        ? assignments
        : assignments.filter((assignment) => assignment?.group === groupName) ??
          [],
    [groupName, assignments]
  );

  /**
   * Закрытие окна для создания нового задания.
   */
  function closeModalWindow() {
    setModalWindowIsOpen(false);
  }

  /**
   * открытие окна для создания нового задания.
   */
  function openModalWindow() {
    setModalWindowIsOpen(true);
  }

  /**
   * Добавление нового задания.
   * @param {} values - параметры, переданные из окна для создания нового задания. 
   */
  function handleSubmit(values) {
    setAssigments((prev) => [
      ...prev,
      { ...values, creator: "Teacher", answers: [], id: shortid.generate() },
    ]);
    closeModalWindow();
  }

  return (
    <>
      {modalWindowIsOpen && (
        <CreateNewAssignment
          onSubmit={handleSubmit}
          close={closeModalWindow}
          currentGroupName={groupName}
        />
      )}

      <div className="assignment-list">
        <div className="assignment-header">
          <div className="help-text">Задания</div>
          <select
            defaultValue="all"
            onChange={(event) => setGroupName(event.target.value)}
            className="group-name"
          >
            <option value="all">Все</option>
            <option value="1 курс - IOS">1 курс - IOS</option>
            <option value="2 курс - IOS">2 курс - IOS</option>
          </select>
          <AiFillPlusCircle
            className="add-new-assignment-button"
            onClick={openModalWindow}
          />
        </div>
        <div className="assignment-centralization">
          {filteredAssigments.map((assignment, index) => (
            <Assignment key={index} {...assignment} />
          ))}
        </div>
      </div>
    </>
  );
}
export default AssignmentList;
