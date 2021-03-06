import React from "react";
import { useState, useMemo } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import Activity from "../Activity/Activity";
import CreateNewActivity from "../CreateNewActivity/CreateNewActivity";
import "./ActivityList.css"
/**
 * Получение текущей даты.
 * @returns Возвращается дата в виде строки.
 */
const dateNow = () => {
  const date = new Date();
  return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
};

/**
 * Данные для отображения.
 */
var DATA = [
  {
    creator: "Teacher",
    header: "Hello!",
    description: "Today is a good day to study! :)",
    group: "1 курс - IOS",
    dateCreate: dateNow(),
  },
  {
    creator: "Teacher",
    header: "Good Morning!",
    group: "2 курс - IOS",
    description: "Please, check your emails for more information!",
    dateCreate: dateNow(),
  },
];

/**
 * Компонент для отображения объявлений и необходимого функционала 
 * для работы с ними.
 * @returns Возвращает html-компонент.
 */
function ActivityList() {
  const [activities, setActivities] = useState(DATA);
  const [groupName, setGroupName] = useState("all");
  const [modalWindowIsOpen, setModalWindowIsOpen] = useState(false);
  const filteredActivities = useMemo(
    () =>
      groupName === "all"
        ? activities
        : activities.filter((activity) => activity?.group === groupName) ?? [],
    [groupName, activities]
  );
  function closeModalWindow() {
    setModalWindowIsOpen(false);
  }

  function openModalWindow() {
    setModalWindowIsOpen(true);
  }

  function addData({ name, description, group, dateCreate }) {
    setActivities([
      ...activities,
      {
        creator: "Белова Н. А.",
        header: name,
        description,
        group: group,
        dateCreate,
      },
    ]);
  }

  return (
    <>
      {modalWindowIsOpen && (
        <CreateNewActivity
          onSubmit={addData}
          close={closeModalWindow}
          currentGroupName={groupName}
          data={activities}
        />
      )}
      <div className="activity-list">
        <div className="assignment-header">
          <div className="help-text">Объявления</div>
          <select
            className="group-name"
            select
            defaultValue="all"
            onChange={(event) => setGroupName(event.target.value)}
          >
            <option value="all">Все</option>
            <option value="1 курс - IOS">1 курс - IOS</option>
            <option value="2 курс - IOS">2 курс - IOS</option>
          </select>
          <AiFillPlusCircle
            className="add-new-activity-button"
            onClick={openModalWindow}
          />
        </div>
        <div className="activity-centralization">
          {filteredActivities.map((activity, index) => (
            <Activity key={index} {...activity} />
          ))}
        </div>
      </div>
    </>
  );
}
export default ActivityList;
