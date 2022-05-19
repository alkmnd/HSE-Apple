import { useState } from 'react';
import './styles.css'
import {AiFillPlusCircle} from "react-icons/ai";
import Assignment from './Assignment';
import CreateNewAssignment from './CreateNewAssignment';

const DATA = [ 
  {
    creator: 'Teacher1',
    header: 'Hello!',
    deadline: "12.08.22",
    answers: {
        user: 'User1',
        date: '12.06.17',
        file: 'fkldjg'
    }
  }, 
  {
      creator: 'Teacher2',
      header: 'Good Morning!',
      deadline: '20.08.22',
      answers: {
          user: 'User2',
          date: '12.06.18',
          file: 'fkldjg'
      }
  }
];

function AssignmentList() {
  const [groupName, setGroupName] = useState('1 курс');
  const [modalWindowIsOpen, setModalWindowIsOpen] = useState(false);
  
  function closeModalWindow() { 
    setModalWindowIsOpen(false);
  }

  function openModalWindow() { 
    setModalWindowIsOpen(true);
  }

  return (
    <>
      {modalWindowIsOpen && <CreateNewAssignment close={closeModalWindow} currentGroupName={groupName} />}

      <div className="assignment-list">
        <div className="assignment-header">
          <div className='help-text'>Задания</div>
          <select onChange={(event) => setGroupName(event.target.value)} className="group-name">
            <option value="1 курс">1 курс</option>
            <option value="2 курс">2 курс</option>
          </select>
          <AiFillPlusCircle className='add-new-assignment-button' onClick={openModalWindow} />
        </div>
        <div className='assignment-centralization'>
          {DATA.map((assignment, index) => 
            <Assignment 
                key={index} 
                creator={assignment.creator} 
                header={assignment.header} 
                deadline={assignment.deadline}
                answers={assignment.answers}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default AssignmentList