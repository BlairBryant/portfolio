import React, { Component } from 'react'
import Button from './Button'
import Modal from './Modal'
import Message from './Message'

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            modal: 'Select Modal',
            color: 'Blue',
            buttonSize: 'Medium',
            buttonHover: 'Grow',
            buttonClick: 'Depress',
            toggleArrow: false,
            messageToggle: false,
            mouseToggle: false
        }
    }

    toggleArrow = () => {
        this.setState({ toggleArrow: !this.state.toggleArrow })
    }

    toggleMessage = () => {
        this.setState({messageToggle: !this.state.messageToggle})
    }

    clearModal = () => {
        this.setState({modal: 'Select Modal'})
    }

    render() {
        return (
            <div className='Home'>
                <select onChange={e => this.setState({ modal: e.target.value })}>
                    <option>Select Modal</option>
                    <option>Modal1</option>
                    <option>Modal2</option>
                    <option>Modal3</option>
                    <option>Modal4</option>
                    <option>Modal5</option>
                </select>
                <br />
                <select onChange={e => this.setState({ color: e.target.value })}>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>Red</option>
                    <option>Green</option>
                </select>
                <select onChange={e => this.setState({ buttonSize: e.target.value })}>
                    <option>Medium</option>
                    <option>Small</option>
                    <option>Large</option>
                </select>
                <select onChange={e => this.setState({ buttonHover: e.target.value })}>
                    <option>Grow</option>
                    <option>Widen</option>
                    <option>Float</option>
                    <option>Color</option>
                    <option>SlideIn</option>
                </select>
                <select onChange={e => this.setState({ buttonClick: e.target.value })}>
                    <option>Depress</option>
                    <option>Drop</option>
                    <option>TBD</option>
                </select>
                <br /><br /><br /><br />
                <Button
                    color={this.state.color}
                    size={this.state.buttonSize}
                    hover={this.state.buttonHover}
                    press={this.state.buttonClick}
                    arrow={this.state.toggleArrow}
                    toggleArrow={this.toggleArrow}
                />
                <br /><br /><br />
                <button className='borderOut'>Click</button>
                <div className='bigOuter'>
                    <div className={this.state.mouseToggle ? 'outer outer2' : 'outer'}></div>
                    <div className='inner' onMouseEnter={() => this.setState({mouseToggle: true})}
                    onMouseOut={() => this.setState({mouseToggle: false})}>Click</div>
                </div>

                <Message toggle={this.state.messageToggle} toggleMessage={this.toggleMessage}/>

                {
                    this.state.modal !== 'Select Modal'
                        ?
                        <Modal clearModal={this.clearModal} modalName={this.state.modal}/>
                        :
                        null
                }
            </div>
        )
    }
}