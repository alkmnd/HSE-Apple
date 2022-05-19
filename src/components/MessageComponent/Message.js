import React from 'react'
import '.././styles.css'
 class Message extends React.Component {
     render() {
         return (
            <div className='message'>
                <div className='message-username'>{this.props.username}</div>
                <div className='message-text'>{this.props.text}</div>
            </div>
         )
     }
 }
export default Message;