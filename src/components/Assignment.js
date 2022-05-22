import React from "react";
import "./styles.css";
import { FcFile, FcDownload, FcAnswers } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useAnswers } from "../providers/answersProvider";

function Assignment({ header, creator, group, deadline, file, id }) {
  let navigate = useNavigate();
  const { saveNewAnswer } = useAnswers();
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

  function loadFile() {
    let file = document.createElement("input");
    file.setAttribute("type", "file");
    file.addEventListener("change", saveFile);
    file.click();
  }

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
        {/* <span className="sender-group">Кому: {group}</span> */}
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
