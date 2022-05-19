import React from 'react'
import '.././styles.css'
import Message from './Message'
import SendMessageForm from "./SendMessageForm";
const DATA = [ 
    {
    senderID: 'Student',
    text: 'Hello!'
    }, 
    {
        senderID: 'Teacher',
        text: 'Good Morning!\nujhfg'
    }

]
class MessageList extends React.Component {
    render() {
        return (
            <>
            <div className='MessageList__window'>
            <div className='message-list'>
                <label className="MessageList__header">
                    <span className="MessageList__span">Название группы</span>
                </label>
                <span className="MessageList__helptext">Create new chat!</span>
    
                {/* <label className="MessageList__list">
                {DATA.map((message, index) => {
                    return (
                        <Message key={index} username={message.senderID} text={message.text}/>
                    )
                })}
                </label> */}
               
            
            
            </div>
            <label className='MessageList__form'>
                    <SendMessageForm/>
            </label>
            </div>
            </>
        
        )
    }
}
export default MessageList;