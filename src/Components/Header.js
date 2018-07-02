import React from 'react'

export default function Header(props) {
    return (
        <div className={`header ${props.color}`}>
            <h1>UI/UX Demo</h1>
            <ul className='headerList'>
                <li>Home</li>
                <li>About</li>
                <li>Careers</li>
                <li>Settings</li>
            </ul>
        </div>
    )
}