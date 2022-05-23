import React, { useState, useEffect } from "react";
import { useChat } from "../../providers/chatProvider";
import "./MessageList.css"

import Message from "../Message/Message";
import SendMessageForm from "../SendMessageForm/SendMessageForm";

/**
 * Список сообщений и кмопоненты для работы с ним.
 * @returns Возвращает html-компонент.
 */
const MessageList = () => {
  const { rooms, openedRoomId, setMessage, setOpenedRoomId } = useChat();
  const openedRoom = rooms[rooms.findIndex((room) => room.id === openedRoomId)];

  const createNewChat = () => {};
  return (
    <>
      <div className="window">
        <div className="message-list">
          <label className="message-list-header">
            <span className="message-list-span">
              {openedRoom?.title ?? "Create or open chat!"}
            </span>
            {openedRoom ? (
            <button className="left-chat-btn"
              onClick={() => setOpenedRoomId(null)}
            >
              Покинуть чат
            </button>) : (<></>)}
          </label>
          {/* Проверяем, открыт ли чат, если да, то выводим сообщения в нем. */}
          {!openedRoom ? (
            <span onClick={createNewChat} className="list-help-text">
              Create new chat!
            </span>
          ) : (
            <div className="list">
              {openedRoom?.messages.length
                ? openedRoom?.messages?.map((message) => (
                    <Message key={message.id} {...message} />
                  ))
                : <div className="no-message-text">No messages here</div>}
            </div>
          )}
        </div>
        <label className="message-list-form">
          <SendMessageForm onCreateMessage={setMessage} />
        </label>
      </div>
    </>
  );
};

export default MessageList;
