import './CreateNewActivity.css';
import '../CreateNewAssignment.css';
import { GrFormClose } from 'react-icons/gr';
import { useState } from 'react';
import {addData} from './ActivityList'
const groupNames = ['1 курс', '2 курс', '3 курс', '4 курс'];

const CreateNewActivity = ({close, currentGroupName, data}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [nameError, setNameError] = useState(''); 
  function nameBugTracker(event) {
    const value = event.target.value;

    if (value.length > 20) {
      setNameError('Заголовок не должен превышать 20 символов!');
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
    <div className="CreateNewActivity__background">
      <form className="CreateNewActivity__window" onSubmit={(event) => addData(name, description, event)}>
        <GrFormClose className="CreateNewActivity__close" onClick={close} />

        <h1 className="CreateNewActivity__header">Новое объявление</h1>

        <label className="CreateNewActivity__label">
          <span className="CreateNewActivity__span">Заголовок</span>
          <input type="text" onChange={nameBugTracker} value={name} spellCheck={false} />
          {nameError && <span className="CreateNewActivity__error">{nameError}</span>}
        </label>

        <label className="CreateNewActivity__label">
          <span className="CreateNewActivity__span">Группа</span>
          <select defaultValue={currentGroupName}>
            {groupNames.map((groupName, index) => 
              <option value={groupName} key={index}>{groupName}</option>
            )}
          </select>
          </label>

          <label className="CreateNewActivity__label">
            <span className="CreateNewActivity__span">Описание</span>
            <textarea className='CreateNewActivity__textarea' value={description} onChange={(event) =>setDescription(event.target.value)}/>
          </label>
    


        <input type="submit" value="Создать" className="CreateNewActivity__submitButton"/>
      </form>
    </div>
  );
}

export default CreateNewActivity;
