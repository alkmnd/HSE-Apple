import React from "react";
import ".././styles.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";
import CreateNewCourse from "./CreateNewRoom";
import { useChat } from "../../providers/chatProvider";

function RoomList() {
  const {rooms, setOpenedRoomId, openedRoomId } = useChat();
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
      <div className="RoomList__form">
        <label className="RoomList__header">
          <span className="RoomList__span">Чаты</span>
          <AiFillPlusCircle
            color="#dadada"
            className="add-new-course-button"
            onClick={openModalWindow}
          />
        </label>
        <label className="RoomList__helpheader">
          {rooms?.length ? (
            <div className="rooms">
              {rooms.map((room) => (
                <div
                  className={`rooms-item ${
                    room.id === openedRoomId ? "rooms-item--active" : null
                  }`}
                  onClick={() => setOpenedRoomId(room.id)}
                  key={room.id}
                >
                  {room.title}
                </div>
              ))}
            </div>
          ) : (
            <span className="RoomList__helptext">Nothing here</span>
          )}
        </label>
      </div>
    </>
  );
}
export default RoomList;
