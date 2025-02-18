import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'

export class FoodBox extends Component {
    constructor(props){
        super(props)

        this.state = {
            quantity : '1'
        }
    }

    render() {
    return (
        <div className="box">
        <article className="media">
            <div className="media-left">
            <figure className="image is-64x64">
                <img src={this.props.image} alt={this.props.name} />
            </figure>
            </div>
            <div className="media-content">
            <div className="content">
                <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
                </p>
            </div>
            </div>
            <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="number" value={this.state.quantity} onChange={e => this.setState({quantity: e.target.value})}/>
                    </div>
                    <div className="control">
                        <button onClick={() => this.props.addToCart({name: this.props.name, calories: this.props.calories, quantity: this.state.quantity})} className="button is-info">
                            +
                        </button>
                    </div>
                    <div className="control">
                        <button onClick={() => this.props.deleteFood(this.props.name)} className="button is-danger">
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                </div>
            </div>
        </article>
        </div>
    )}
}

export default FoodBox
