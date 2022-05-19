import React from 'react';
import './styles.css';
import {FcFile, FcDownload, FcAnswers} from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

function Assignment({header, creator, deadline}) {
  let navigate = useNavigate();

  // Здесь нужно прописать логику сохранения файла на сервер (отпрвить запрос)
  function saveFile(event) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      let blobFile = URL.createObjectURL(file); // нужно сохранить на сервере
      alert(blobFile);
    }
  }

  function loadFile() {
    let file = document.createElement('input');
    file.setAttribute('type', 'file');
    file.addEventListener('change', saveFile);
    file.click();
  }

  function downloadFile() {
    let link = document.createElement('a');
    link.setAttribute('href', 'blob-file');
    link.setAttribute('download', 'download');
    // <a href="blob-file" download='download'></a>
    link.click();
  }

  return ( 
    <div className='assignment'>
      <div>
        <h1 className='header'>{header}</h1>
        <span className='creator'>Автор: {creator}</span>
        <span className='deadline'>Дедлайн: {deadline}</span>
      </div>
      <div>
        <FcFile className='add-button' onClick={loadFile}/>
        <FcDownload className='download-button' onClick={downloadFile} />
        <FcAnswers className='answer-button' onClick={() => navigate('/answers')}/>
      </div>
    </div>
  )
}

export default Assignment;
