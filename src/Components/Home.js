import React, { Component } from 'react'
import Button from './Button'

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            modal: '',
            color: 'Blue',
            buttonSize: 'Medium',
            buttonHover: 'Grow',
            buttonClick: 'Depress',
            toggleArrow: false,
            mouseToggle: false
        }
        this.toggleArrow = this.toggleArrow.bind(this)
        this.toggleArrowOff = this.toggleArrowOff.bind(this)
    }

    toggleArrow() {
        this.setState({ toggleArrow: true })
    }

    toggleArrowOff() {
        this.setState({ toggleArrow: false })
    }

    render() {
        return (
            <div className='Home'>
                <select onChange={e => this.setState({ modal: e.target.value })}>
                    <option>Select Modal</option>
                    <option>Modal 1</option>
                    <option>Modal 2</option>
                    <option>Modal 3</option>
                    <option>Modal 4</option>
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
                    toggleArrowOff={this.toggleArrowOff}
                />
                <br /><br /><br />
                {/* <button className='test'>Click</button> */}
                <div className='Bouter'>
                    <div className={this.state.mouseToggle ? 'outer outer2' : 'outer'}></div>
                    <div className='inner' onMouseEnter={() => this.setState({mouseToggle: true})}
                    onMouseOut={() => this.setState({mouseToggle: false})}>Click</div>
                </div>



            </div>
        )
    }
}