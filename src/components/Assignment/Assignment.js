import React from "react";
import { FcFile, FcDownload, FcAnswers } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useAnswers } from "../../providers/answersProvider";
import "./Assignment.css"

/**
 * Компонент "Задание".
 * @param {*} header - Название (заголовок) задания.
 * @param {*} creator - Создатель задания.
 * @param {*} group - Группа, для которой опубликованно задание.
 * @param {*} deadline - Дедлайн задания.
 * @param {*} file - Ссылка на задание.
 * @param {*} id - id задания.
 * @returns Возвращает html-компонент.
 */
function Assignment({ header, creator, group, deadline, file, id }) {
  let navigate = useNavigate();
  const { saveNewAnswer } = useAnswers();
  /**
   * Вспомогательная функция для загрзки ответа.
   * @param {*} event 
   */
  function saveFile(event) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      let blobFile = URL.createObjectURL(file); 
      saveNewAnswer({
        fileName: file.name,
        url: blobFile,
        assignmentId: id,
      });
    }
  }

  /**
   * Загрузка ответа на задание в систему.
   */
  function loadFile() {
    let file = document.createElement("input");
    file.setAttribute("type", "file");
    file.addEventListener("change", saveFile);
    file.click();
  }

  /**
   * Скачивание файла с заданием.
   */
  function downloadFile() {
    let link = document.createElement("a");
    link.setAttribute("href", file?.url ?? "blob-file");
    link.setAttribute("download", "download");
    link.click();
  }

  return (
    <div className="assignment">
      <div>
        <h1 className="header">{header}</h1>
        <span className="creator">Автор: {creator}</span>
        <span className="deadline">Дедлайн: {deadline}</span>
      </div>
      <div>
        <FcFile className="add-button" onClick={loadFile} />
        <FcDownload className="download-button" onClick={downloadFile} />
        <FcAnswers
          className="answer-button"
          onClick={() => navigate(`${id}/answers`)}
        />
      </div>
    </div>
  );
}

export default Assignment;
