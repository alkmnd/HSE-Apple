import React from "react";
import "./RoomList.css"
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";
import CreateNewCourse from "../CreateNewRoom/CreateNewRoom";
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
      <div className="room-list-form">
        <label className="room-list-header">
          <span className="room-list-span">Чаты</span>
          <AiFillPlusCircle
            color="#dadada"
            className="add-new-course-button"
            onClick={openModalWindow}
          />
        </label>
        <label className="room-list-help-header">
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
            <span className="room-list-help-text">Nothing here</span>
          )}
        </label>
      </div>
    </>
  );
}
export default RoomList;
