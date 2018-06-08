import React, {Component} from 'react'
import Button from './Button'

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            color: 'Blue',
            buttonSize: 'Medium',
            buttonHover: 'Grow',
            buttonClick: 'Depress',
            toggleArrow: false,
        }
        this.toggleArrow = this.toggleArrow.bind(this)
        this.toggleArrowOff = this.toggleArrowOff.bind(this)
    }

    toggleArrow() {
        this.setState({toggleArrow: true})
    }

    toggleArrowOff() {
        this.setState({toggleArrow: false})
    }

    render() {
        return (
            <div className='Home'>
                <select onChange={e => this.setState({color: e.target.value})}>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>Red</option>
                    <option>Green</option>
                </select>
                <select onChange={e => this.setState({buttonSize: e.target.value})}>
                    <option>Medium</option>
                    <option>Small</option>
                    <option>Large</option>
                </select>
                <select onChange={e => this.setState({buttonHover: e.target.value})}>
                    <option>Grow</option>
                    <option>Widen</option>
                    <option>Float</option>
                    {/* <option>Hover ›</option> */}
                    <option>Color</option>
                    <option>SlideIn</option>
                </select>
                <select onChange={e => this.setState({buttonClick: e.target.value})}>
                    <option>Depress</option>
                    <option>TBD</option>
                    <option>TBD</option>
                </select>
                <br/><br/><br/><br/>
                <Button 
                    color={this.state.color}
                    size={this.state.buttonSize} 
                    hover={this.state.buttonHover} 
                    press={this.state.buttonClick}
                    arrow={this.state.toggleArrow}
                    toggleArrow={this.toggleArrow}
                    toggleArrowOff={this.toggleArrowOff}
                />
                <br/>
                
            </div>
        )
    }
}