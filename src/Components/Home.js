import React, {Component} from 'react'
import Button from './Button'

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            buttonHover: 'Grow',
            buttonSize: 'Medium',
            color: 'Blue',
            toggleArrow: false
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
                <select onChange={e => this.setState({buttonHover: e.target.value})}>
                    <option>Grow</option>
                    <option>Widen</option>
                    <option>Float</option>
                    <option>Hover ›</option>
                </select>
                <br/><br/>
                <Button 
                    hover={this.state.buttonHover} 
                    size={this.state.buttonSize} 
                    color={this.state.color}
                    arrow={this.state.toggleArrow}
                    toggleArrow={this.toggleArrow}
                    toggleArrowOff={this.toggleArrowOff}
                />
                <br/>
                
            </div>
        )
    }
}