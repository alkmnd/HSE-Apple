import './CreateNewRoom.css';
import { GrFormClose } from 'react-icons/gr';
import { useState } from 'react';

const CreateNewCourse = ({close, currentGroupName}) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(''); 

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
  function limitString(str) {
    if (str.length > 50) {
      return `${str.slice(0, 30)}...${str.slice(str.length-10, str.length)}`
    }
    return str;
  }

  return (
    <div className="CreateNewCourse__background">
      <form className="CreateNewCourse__window">
        <GrFormClose className="CreateNewCourse__close" onClick={close} />

        <h1 className="CreateNewCourse__header">Новый курс</h1>

        <label className="CreateNewCourse__label">
          <span className="CreateNewCourse__span">Название</span>
          <input type="text" onChange={nameBugTracker} value={name} spellCheck={false} />
          {nameError && <span className="CreateNewCourse__error">{nameError}</span>}
        </label>


        <input type="submit" value="Создать" className="CreateNewCourse__submitButton" />

      </form>
    </div>
  );
}

export default CreateNewCourse;
