import { createContext, useContext, useState } from "react";
import shortid from "shortid";

const ROOMS = [
  {
    title: "1 курс - IOS",
    id: shortid.generate(),
    participants: [
      { id: shortid.generate(), login: "Student" },
      { id: shortid.generate(), login: "Бeлова Н. А." },
      { id: shortid.generate(), login: "Teacher" },
    ],
    messages: [
      {
        id: shortid.generate(),
        text: "Helloooooooo!",
        file: null,
        dateCreate: "23-03-2020",
      },
      {
        id: shortid.generate(),
        text: "GOOD!!!!",
        file: null,
        dateCreate: "23-03-2020",
      },
  
    ],
  },
  {
    title: "2 курс - IOS",
    id: shortid.generate(),
    participants: [
      { id: shortid.generate(), login: "Student" },
      { id: shortid.generate(), login: "Teacher" },
      { id: shortid.generate(), login: "Бeлова Н. А." },
    ],
    messages: [
      {
        id: shortid.generate(),
        text: "Welcome to the chat!",
        file: null,
        dateCreate: "23-03-2020",
      },
      {
        id: shortid.generate(),
        text: "Glad to see ya",
        file: null,
        dateCreate: "23-03-2020",
      },
      
    ],
  },
];

const context = createContext({
  rooms: [],
  openedRoomId: null,
  setMessage: () => {},
  setOpenedRoomId: () => {},
  handleCreateRoom: () => {},
});

export const useChat = () => useContext(context);

export const ChatProvider = ({ children }) => {
  const [openedRoomId, setOpenedRoomId] = useState(null);
  const [rooms, setRooms] = useState(ROOMS);

  const handleCreateRoom = ({ title }) => {
    const id = shortid.generate();
    setRooms((prev) => [
      ...prev,
      { id, title, participants: [], messages: [] },
    ]);
  };

  const setMessage = ({ text, file }) => {
    const newRooms = JSON.parse(JSON.stringify(rooms));
    const openedRoomIndex = newRooms.findIndex(
      (room) => room.id === openedRoomId
    );
    newRooms[openedRoomIndex].messages.push({
      id: shortid.generate(),
      text,
      file,
    });
    setRooms(newRooms);
  };

  return (
    <context.Provider
      value={{
        rooms,
        handleCreateRoom,
        setMessage,
        setOpenedRoomId,
        openedRoomId,
      }}
    >
      {children}
    </context.Provider>
  );
};
