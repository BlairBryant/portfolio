import React from 'react'
import message from '../Assets/message.svg'
import X from '../Assets/x.svg'

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
                <div className='chatBoxInner' style={{ background: `linear-gradient(to right, ${props.color}, light${props.color})` }}></div>
            </div>
        </div>
    )
}