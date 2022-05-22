import "./CreateNewAssignment.css";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";

const groupNames = ["1 курс - IOS", "2 курс - IOS"];

const CreateNewAssignment = ({ onSubmit, close }) => {
  const [form, setForm] = useState({
    header: "",
    group: groupNames[0],
    deadline: null,
    file: null,
  });
  const [nameError, setNameError] = useState("");
  const [loadedFile, setLoadedFile] = useState(null);

  function nameBugTracker(event) {
    const value = event.target.value;

    if (value.length > 20) {
      setNameError("Название не должно превышать 20 символов!");
    } else {
      setNameError("");
    }

    handleChangeValue(event);
  }

  function saveFile(event) {
    if (event.target.files && event.target.files[0]) {
      setLoadedFile(event.target.files[0]);
      let file = event.target.files[0];
      let url = URL.createObjectURL(file); 
      setForm({
        ...form,
        file: {
          name: file.name,
          type: file.type,
          url,
        },
      });
    }
  }

  function limitString(str) {
    if (str.length > 50) {
      return `${str.slice(0, 30)}...${str.slice(str.length - 10, str.length)}`;
    }
    return str;
  }

  const renderDate = (str) => str.split("-").reverse().join(".");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (nameError || !form.deadline) return;
    onSubmit({
      ...form,
      header: form.header.trim(),
      deadline: renderDate(form.deadline),
    });
    setForm({
      header: "",
      group: groupNames[0],
      file: null,
      description: "",
    });
    close();
  };

  const handleChangeValue = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="CreateNewAssignment__background">
      <form className="CreateNewAssignment__window" onSubmit={handleSubmitForm}>
        <GrFormClose className="CreateNewAssignment__close" onClick={close} />

        <h1 className="CreateNewAssignment__header">Новое задание</h1>

        <label className="CreateNewAssignment__label">
          <span className="CreateNewAssignment__span">Название</span>
          <input
            type="text"
            name="header"
            value={form.header}
            onChange={nameBugTracker}
            spellCheck={false}
          />
          {nameError && (
            <span className="CreateNewAssignment__error">{nameError}</span>
          )}
        </label>

        <label className="CreateNewAssignment__label">
          <span className="CreateNewAssignment__span">Группа</span>
          <select
            onChange={handleChangeValue}
            name="group"
            defaultValue={groupNames[0]}
          >
            {groupNames.map((groupName, index) => (
              <option value={groupName} key={index}>
                {groupName}
              </option>
            ))}
          </select>
        </label>

        <label className="CreateNewAssignment__label">
          <span className="CreateNewAssignment__loadButton">
            Приложить файл
          </span>
          <span className="CreateNewAssignment__fileName">
            {loadedFile && limitString(loadedFile.name)}
          </span>
          <input type="file" hidden={true} onChange={saveFile} />
        </label>

        <label className="CreateNewAssignment__label">
          <span className="CreateNewAssignment__span">Дедлайн</span>
          <input name="deadline" onChange={handleChangeValue} type="date" />
        </label>

        <input
          type="submit"
          value="Создать"
          className="CreateNewAssignment__submitButton"
        />
      </form>
    </div>
  );
};

export default CreateNewAssignment;
