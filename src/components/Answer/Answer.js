import React from "react";
import { FcDownload } from "react-icons/fc";
import "./Answer.css"

/**
 * Определяет компонент "Ответ".
 * @param {*} user - Пользователь, давший ответ.
 * @param {*} file - ссылка на ответ.
 * @param {*} date - дата загрузки ответа.
 * @returns Вовзращается html-компонент.
 */
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
        <span className="answer-username">
          {user} добавил(а) ответ на задание
        </span>
        <span className="answer-date">Дата загрузки: {date}</span>
      </div>
      <div>
        <FcDownload className="answer-download" onClick={downloadFile} />
      </div>
    </div>
  );
}
export default Answer;
