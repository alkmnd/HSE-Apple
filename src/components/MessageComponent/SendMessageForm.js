import React from 'react'
import '.././styles.css'
import { SafeAreaView, TextInput} from "react-native"

class SendMessageForm extends React.Component {
    
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({ 
            message: e.target.value
        })
    }
    

    render() {
        return (
            <SafeAreaView className="send-message-form">
                <textarea className='text-input'
                        placeholder='Write message...'
                        
                        />
                        </SafeAreaView>
        )
    }
}
export default SendMessageForm