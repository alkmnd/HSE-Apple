import "./CreateNewActivity.css";
import "../CreateNewAssignment.css";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";

const groupNames = ["Все", "1 курс - IOS", "2 курс - IOS"];

const CreateNewActivity = ({ close, onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    group: groupNames[0],
    description: "",
  });
  const [nameError, setNameError] = useState("");
  function nameBugTracker(event) {
    const value = event.target.value;

    if (value.length > 20) {
      setNameError("Заголовок не должен превышать 20 символов!");
    } else {
      setNameError("");
    }

    handleChangeValue(event);
  }

  const dateNow = () => {
    const date = new Date();
    return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (nameError || !form.name || !form.description) return;
    onSubmit({ ...form, dateCreate: dateNow() });
    setForm({
      name: "",
      group: groupNames[0],
      description: "",
    });
    close();
  };

  const handleChangeValue = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="CreateNewActivity__background">
      <form className="CreateNewActivity__window" onSubmit={handleSubmitForm}>
        <GrFormClose className="CreateNewActivity__close" onClick={close} />

        <h1 className="CreateNewActivity__header">Новое объявление</h1>

        <label className="CreateNewActivity__label">
          <span className="CreateNewActivity__span">Заголовок</span>
          <input
            type="text"
            onChange={nameBugTracker}
            name="name"
            value={form.name}
            spellCheck={false}
          />
          {nameError && (
            <span className="CreateNewActivity__error">{nameError}</span>
          )}
        </label>

        <label className="CreateNewActivity__label">
          <span className="CreateNewActivity__span">Группа</span>
          <select
            name="group"
            onChange={handleChangeValue}
            value={form.group}
            defaultValue={groupNames[0]}
          >
            {groupNames.map((groupName, index) => (
              <option value={groupName} key={index}>
                {groupName}
              </option>
            ))}
          </select>
        </label>

        <label className="CreateNewActivity__label">
          <span className="CreateNewActivity__span">Описание</span>
          <textarea
            className="CreateNewActivity__textarea"
            value={form.description}
            name="description"
            onChange={handleChangeValue}
          />
        </label>

        <input
          type="submit"
          value="Создать"
          className="CreateNewActivity__submitButton"
        />
      </form>
    </div>
  );
};

export default CreateNewActivity;
