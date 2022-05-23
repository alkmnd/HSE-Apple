import React, { useState } from "react";
import { SafeAreaView} from "react-native";
import { ClipIcon } from "../Buttons/ClipIcon";
import "./SendMessageForm.css"

const SendMessageForm = ({ onCreateMessage }) => {
  const [message, setMessage] = useState({
    text: "",
    file: null,
  });

  const handleChangeInput = (e) => {
    setMessage((prev) => ({ file: message.file, text: e.target.value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    onCreateMessage({ ...message, text: message.text.trim() });
    setMessage({
      text: "",
      file: null,
    });
  };

  function saveFile(event) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      let blob = URL.createObjectURL(file);

      setMessage({
        ...message,
        file: {
          name: file.name,
          type: file.type,
          url: blob,
        },
      });
    }
  }

  function loadFile(e) {
    let file = document.createElement("input");
    file.setAttribute("type", "file");
    file.addEventListener("change", saveFile);
    file.click();
  }

  return (
    <SafeAreaView>
      <form className="send-message-form" onSubmit={handleSubmitForm}>
        <div className="message-form-input">
          <textarea
            onChange={handleChangeInput}
            value={message.text}
            className="text-input"
            placeholder="Write message..."
          />
          <button className="send-message-btn"onClick>Отправить</button>
        <div className="message-form-file">
          <ClipIcon className="add-file-button" onClick={loadFile} />
      
        </div>
        
        </div>
        <div className="file-name">Вложение: {message?.file?.name}</div>
      </form>
    </SafeAreaView>
  );
};
export default SendMessageForm;
