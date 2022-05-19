import React from "react";
import MessageList from '../components/MessageComponent/MessageList';
import RoomList from "../components/RoomListComponent/RoomList"
import '../components/styles.css'
import MembersList from "../components/MembersList"
import {App as SendbirdApp} from 'sendbird-uikit'
import 'sendbird-uikit/dist/index.css'
import { ChatList } from 'react-chat-engine'
class Messages extends React.Component{ 
  
render() {

    return (
    // <div className="App">
    //   <SendbirdApp appId="D052B8DF-C0DE-4A44-9303-0944268CFE60" userId="n"/>
    // </div>
          <div className="messages">
            <RoomList/>
            <MessageList/>
            <MembersList/>
          </div>

    );
}
}

export default Messages;