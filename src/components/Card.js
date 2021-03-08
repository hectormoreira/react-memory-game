import React, { Component } from "react";
import ReactCardFlip  from "react-card-flip";
import "../styles/Card.css";
export default class Card extends Component {
  render() {
    return (
      <div className="card" onClick={this.props.selectedCard}>
        <ReactCardFlip 
          isFlipped={this.props.isComparing || this.props.wasSuccessfull}
          //isFlipped={false}
        >
          <div className="cover"></div>
          <div className="content">
            <i className={`fa ${this.props.icon} fa-5x`}></i>
          </div>
        </ReactCardFlip >
      </div>
    );
  }
}
