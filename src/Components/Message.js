import React from 'react'
import message from '../Assets/message.svg'

export default function Message(props) {
    return (
        <div>
            <div className='messageBubble' onClick={props.toggleMessage}>
                {/* <img src={message} alt=""/> */}
                X
            </div>

            {
                props.toggle
                    ?
                    <div className='chatBox'>hey</div>
                    :
                    null
            }
        </div>

    )
}