import React from "react";
import "./ProfileCard.css"
import FlatButton from "../Buttons/FlatButton"
import {MdPhone} from 'react-icons/md';
import {MdAlternateEmail} from 'react-icons/md';

function ProfileCard() {
    const uploadedImage = React.useRef("https://cdn-icons-png.flaticon.com/512/149/149071.png");
    const imageUploader = React.useRef(null);
    const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const {current} = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
          current.src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  };
  return  (
      <>
        <div className="profile-form">
        
                <input type="file"
                className="image-input"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}/>
                <img className="profile-image"
                ref={uploadedImage} 
                src = {"https://cdn-icons-png.flaticon.com/512/149/149071.png"}/>
                <FlatButton 
                    className="upload-image-button"
                    text="Загрузить фото" 
                    onPress={() => imageUploader.current.click()}/>

           
            <span className="name">Белова Наталья Александровна</span>
            <span className="role">Студент</span>
            <div className="number-div">
                <MdPhone style={{
                    color: "#979797", width: "20px"}}/>
                <span className="number">8-888-888-88-88</span>
            </div>
            <div className="email-div">
                <MdAlternateEmail style={{
                    color: "#979797", width: "20px"}}/>
                <span className="number">nabelova_1@edu.hse.ru</span>
            </div>

        </div>
      </>

  );
  
}
export default ProfileCard;
