import React, { useState, useEffect } from "react";
import { useChat } from "../../providers/chatProvider";
import ".././styles.css";
import Message from "./Message";
import SendMessageForm from "./SendMessageForm";

const MessageList = () => {
  const { rooms, openedRoomId, setMessage, setOpenedRoomId } = useChat();
  const openedRoom = rooms[rooms.findIndex((room) => room.id === openedRoomId)];

  const createNewChat = () => {};
  return (
    <>
      <div className="MessageList__window">
        <div className="message-list">
          <label className="MessageList__header">
            <span className="MessageList__span">
              {openedRoom?.title ?? "Create or open chat!"}
            </span>
            {/* <button
              style={{ margin: "1%" }}
              onClick={() => setOpenedRoomId(null)}
            >
              Покинуть чат
            </button> */}
          </label>
          {!openedRoom ? (
            <span onClick={createNewChat} className="MessageList__helptext">
              Create new chat!
            </span>
          ) : (
            <div className="MessageList__list">
              {openedRoom?.messages.length
                ? openedRoom?.messages?.map((message) => (
                    <Message key={message.id} {...message} />
                  ))
                : "Нет сообщений "}
            </div>
          )}
        </div>
        <label className="MessageList__form">
          <SendMessageForm onCreateMessage={setMessage} />
        </label>
      </div>
    </>
  );
};

export default MessageList;
