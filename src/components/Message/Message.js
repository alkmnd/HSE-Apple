import React from "react";
import "./Message.css"
const Message = ({ text, file, dateCreate }) => {
  const dateNow = () => {
    const date = new Date();
    return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
  };
  
  return (
    <>
    {text.length > 0 && (
    <div className="message">
      <div className='message-username'>Белова Н. А.</div>
      
      {text.length > 0 && (<div className="message-text">{text}</div>)}
      {file && !file?.type.includes("image") && (
        <div>
          <span>Вложение: </span>
          <a href={file.url}>{file.name}</a>
        </div>
      )}
      {file && file?.type.includes("image") && text.length > 0 && (
        <img className="message-img" src={file.url} />
      )}
      <div className="creation-date">24-05-2022</div>
    </div>)}
    </>
  );
};
export default Message;
