import React from 'react'
import '.././styles.css'
import { AiFillPlusCircle} from "react-icons/ai";
import { useState } from 'react';
import CreateNewCourse from './CreateNewRoom';

function RoomList() {
    
    const [modalWindowIsOpen, setModalWindowIsOpen] = useState(false);
      
      function closeModalWindow() { 
        setModalWindowIsOpen(false);
      }
    
      function openModalWindow() { 
        setModalWindowIsOpen(true);
      }
      
        return (
           
                <>
                 {modalWindowIsOpen && <CreateNewCourse close={closeModalWindow} />}
                <div className='RoomList__form'>
                     <label className="RoomList__header">
                        <span className="RoomList__span">Чаты</span>
                        <AiFillPlusCircle color='#dadada' className='add-new-course-button' onClick={openModalWindow}/>
                    </label>
                    <label className="RoomList__helpheader">
                    <span className="RoomList__helptext">Nothing here</span>
                    </label>
                </div>
                </>
            
        );
    
}
export default RoomList