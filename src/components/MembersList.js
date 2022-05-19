import React from 'react'
import './styles.css'
import {AiFillPlusCircle} from "react-icons/ai";
class MembersList extends React.Component {
    render () {
        return (
            <>
            <div className='MemberList__form'>
                 <label className="MemberList__header">
                    <span className="MemberList__span">Участники</span>
                    <AiFillPlusCircle className='add-new-member-button'/>
                </label>
                <span className="MemberList__helptext">Nothing here</span>
            </div>
            </>
        )
    }
}
export default MembersList