import React from "react";
//import * as BoxIcons from 'react-icons/bi';
import { StyleSheet, View, Text, Button} from 'react-native';
import {MdPhone} from 'react-icons/md';
import {MdAlternateEmail} from 'react-icons/md';
import FlatButton from './FlatButton'

function Profile() {
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
    return (
        <div className='profile'>
            
            <input type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{ position: "absolute", display:"none"
            }}/>
    
            <View style={{
            flexDirection: "row",
            height: 600,
            width: 800,
            padding: 20, 
            backgroundColor: "#EFEFEF", 
            borderRadius: 10, 
            position:"absolute",
            zIndex:-1,
            alignItems: "center"
          }}/>
                
                <div>
                    <img style = {{width:"170px", height:"170px", borderRadius:"80px", position:"absolute",
                    top:"25%", left:"50%", marginLeft:"-80px"}}
                    ref={uploadedImage} src = {"https://cdn-icons-png.flaticon.com/512/149/149071.png"}/>
                    <MdPhone style={{width:"20px", height:"20px", marginTop:"12rem", position:"absolute",
                    color: "#979797", marginLeft:"-10.5rem"}}/>
                    <Text style={styles.numberText}>8-888-888-88-88</Text>
                    <MdAlternateEmail style={{width:"20px", height:"20px", marginTop:"14rem", position:"absolute",
                    color: "#979797", marginLeft:"-10.5rem"}}/>
                    <Text style={styles.emailText}>someemail@edu.hse.ru</Text>
                    <FlatButton text="Загрузить фото" onPress={() => imageUploader.current.click()}/>
                    <Text style={styles.baseText}>Фамилия Имя Отчество</Text>
                    <Text style={styles.titleText}>Должность</Text>
                
                </div>
            
        </div>
    );
}
const styles = StyleSheet.create({
    baseText: {
        fontSize: 20,
        fontWeight: "bold",
        position: "absolute",
        marginLeft:"-110px",
        left: "50%",
        textAlign: "center",
        top:"48%",
    },
    titleText: {
        fontSize: 15,
        position: "absolute", 
        color:  "blue",
        left: "50%",
        textAlign: "center",
        width: "150px",
        marginLeft:"-75px",
        top:"52%",
        //margin: "auto"

    },
    numberText: {
        fontSize: 15,
        position: "absolute", 
        marginLeft: "-8.5rem",
        marginTop: "12rem",
        color:"#979797",
        textAlign: "center",

    },
    emailText: {
        fontSize: 15,
        position: "absolute", 
        marginLeft: "-8.5rem",
        marginTop: "14rem",
        color:"#979797"
    },
    uploadButton: {
        fontSize: 14, 
        position: "absolute",
        marginLeft: "-8.5rem",
        marginTop: "11rem",
        color:"#979797",
    }
  });
export default Profile;