import React from "react";
import "./styles.css";
import { FcDownload } from "react-icons/fc";

function Answer({ user, file, date }) {
  function downloadFile() {
    let link = document.createElement("a");
    link.setAttribute("href", file.url ?? "blob-file");
    link.setAttribute("download", "download");
    link.click();
  }
  return (
    <div className="answer">
      <div>
        <span className="Answer__username">
          {user} добавил(а) ответ на задание
        </span>
        <span className="Answer__date">Дата загрузки: {date}</span>

        {/* <span className='Answer__date'>{date}</span
        <div>
          <FcDownload className='download-button' onClick={downloadFile} />
    
        </div>
          <span className='Answer__date'>{date}</span> */}
      </div>
      <div>
        <FcDownload className="Answer__download" onClick={downloadFile} />
      </div>
    </div>
  );
}
export default Answer;
