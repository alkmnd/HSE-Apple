import React from "react";
import MessageList from '../../components/MessageList/MessageList';
import RoomList from "../../components/RoomList/RoomList"
import MembersList from "../../components/MembersList/MembersList"
import "./Messages.css"
import "../../components/styles.css"

class Messages extends React.Component{ 
  
render() {

    return (
          <div className="messages">
            <RoomList/>
            <MessageList/>
            <MembersList/>
          </div>

    );
}
}

export default Messages;