import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useChat } from "../../providers/chatProvider";
import "./MembersList.css"

const MembersList = () => {
  const { rooms, openedRoomId} = useChat();
  const openedRoom = rooms[rooms.findIndex((room) => room.id === openedRoomId)];

  return (
    <>
      <div className="room-list-form member-list-form">
        <label className="member-list-header">
          <span className="member-list-span">Участники</span>
          <AiFillPlusCircle color="#dadada" className="add-new-member-button" />
        </label>
        {!openedRoom?.participants ? (
          <span className="member-list-help-text">Nothing here</span>
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
