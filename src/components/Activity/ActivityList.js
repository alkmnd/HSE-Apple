import React from 'react'
import { useState } from 'react';
import '.././styles.css'
import {AiFillPlusCircle} from "react-icons/ai";
import Activity from './Activity';
import CreateNewActivity from './CreateNewActivity';
var DATA = [ 
    {
    creator: 'T2',
    header: 'Hello!',
    description: "Today is a good day to study! :)"
    }, 
    {
        creator: 'T1',
        header: 'Good Morning!',
        description: 'Please, check your emails for more information!'
    }

]
export function addData(name, description, event) {
  event.preventDefault()
  DATA.push( {
    creator: "Белова Н. А.", 
    header: name, 
    description: description
  })
}
function ActivityList() {
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
        {modalWindowIsOpen && <CreateNewActivity close={closeModalWindow} currentGroupName={groupName} data ={DATA}/>}
            <div className="activity-list">
                <div className="assignment-header">
                    <div className='help-text'>Объявления</div>
                        <select className="group-name" select onChange={(event) => setGroupName(event.target.value)}>
                             <option value="1 курс">1 курс</option>
                             <option value="2 курс">2 курс</option>
                        </select>
                    <AiFillPlusCircle className='add-new-activity-button' onClick={openModalWindow}/>
                    </div>
                    <div className='activity-centralization'>
                        {DATA.map((activity, index) => 
                            <Activity
                                key={index} 
                                creator={activity.creator} 
                                header={activity.header} 
                                description={activity.description}
                            />
                         )}
                </div>
            </div>
    </>
    );
  }
  export default ActivityList