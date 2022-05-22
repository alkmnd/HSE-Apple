import React from "react";
import "./styles.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { useChat } from "../providers/chatProvider";
const MembersList = () => {
  const { rooms, openedRoomId, setMessage } = useChat();
  const openedRoom = rooms[rooms.findIndex((room) => room.id === openedRoomId)];

  return (
    <>
      <div className="RoomList__form MembersList__form">
        <label className="RoomList__header">
          <span className="RoomList__span">Участники</span>
          <AiFillPlusCircle color="#dadada" className="add-new-member-button" />
        </label>
        {!openedRoom?.participants ? (
          <span className="MemberList__helptext">Nothing here</span>
        ) : (
          <div className="rooms">
            {openedRoom?.participants.map((participant) => (
              <ParticipantCard key={participant.id} {...participant} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const ParticipantCard = ({ id, login }) => {
  return (<>
  <div className="participant-card">
    <img className="participant-icon" src="https://cdn-icons-png.flaticon.com/512/149/149071.png"/>
    <div className="participant-login">{login}</div>
  </div>
  </>);
};

export default MembersList;
