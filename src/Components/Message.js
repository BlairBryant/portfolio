import React from 'react'
import message from '../Assets/message.svg'
import X from '../Assets/x.svg'
import avatar from '../Assets/message_avatar.jpg'

export default function Message(props) {
    return (
        <div>
            <div className={`messageBubble light${props.color}`} onClick={props.toggleMessage}>
                {
                    props.toggle
                        ?
                        <img className='X' src={X} alt="" />
                        :
                        <img className={`chatIcon`} src={message} alt="" />
                }
            </div>
            <div className={props.toggle ? 'chatBox chatBoxIn' : 'chatBox'}>
                <div className={`chatBoxInner ${props.color}Gradient`}>
                    <h2>Questions?</h2>
                    <h3>We're here to help</h3>
                </div>
                <div className='chatBoxBox'>
                    <h3>Start a conversation</h3>
                    <h4>A team member will reply as soon as they can</h4>
                    <div className='chatImageDiv'>
                        <img className='chatAvatar' src={avatar} alt="" />
                        <button >New Conversation</button>
                    </div>

                </div>
            </div>
        </div>
    )
}