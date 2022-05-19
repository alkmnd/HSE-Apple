import './CreateNewAssignment.css';
import { GrFormClose } from 'react-icons/gr';
import { useState } from 'react';

const groupNames = ['1 курс', '2 курс', '3 курс', '4 курс'];

const CreateNewAssignment = ({close, currentGroupName}) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(''); 
  const [loadedFile, setLoadedFile] = useState(null);

  function nameBugTracker(event) {
    const value = event.target.value;

    if (value.length > 20) {
      setNameError('Название не должно превышать 20 символов!');
    }
    else {
      setNameError('');
    }

    setName(value);
  }

  // Здесь нужно прописать логику сохранения файла на сервер (отпрвить запрос)
  function saveFile(event) {
    if (event.target.files && event.target.files[0]) {
      setLoadedFile(event.target.files[0]);
      let file = event.target.files[0];
      let blobFile = URL.createObjectURL(file); // нужно сохранить на сервере
      alert(blobFile);
    }
  }

  function limitString(str) {
    if (str.length > 50) {
      return `${str.slice(0, 30)}...${str.slice(str.length-10, str.length)}`
    }
    return str;
  }

  return (
    <div className="CreateNewAssignment__background">
      <form className="CreateNewAssignment__window">
        <GrFormClose className="CreateNewAssignment__close" onClick={close} />

        <h1 className="CreateNewAssignment__header">Новое задание</h1>

        <label className="CreateNewAssignment__label">
          <span className="CreateNewAssignment__span">Название</span>
          <input type="text" onChange={nameBugTracker} value={name} spellCheck={false} />
          {nameError && <span className="CreateNewAssignment__error">{nameError}</span>}
        </label>

        <label className="CreateNewAssignment__label">
          <span className="CreateNewAssignment__span">Группа</span>
          <select defaultValue={currentGroupName}>
            {groupNames.map((groupName, index) => 
              <option value={groupName} key={index}>{groupName}</option>
            )}
          </select>
        </label>

        <label className="CreateNewAssignment__label">
          <span className="CreateNewAssignment__loadButton">Приложить файл</span>
          <span className="CreateNewAssignment__fileName">{loadedFile && limitString(loadedFile.name)}</span>
          <input type="file" hidden={true} onChange={saveFile} />
        </label>  

        <label className="CreateNewAssignment__label">
          <span className="CreateNewAssignment__span">Дедлайн</span>
          <input type="date" />
        </label>

        <input type="submit" value="Создать" className="CreateNewAssignment__submitButton" />

      </form>
    </div>
  );
}

export default CreateNewAssignment;
