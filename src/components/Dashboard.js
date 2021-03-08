import React, { Component } from "react";
import Card from "./Card";
import "../styles/Dashboard.css";
export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        {this.props.deck.map((card, index) => {
          const isComparing = this.props.selectedCouple.indexOf(card) > -1;
          return (
            <Card
              key={index}
              icon={card.icon}
              isComparing={isComparing}
              selectedCard={() => this.props.selectedCard(card)}
              wasSuccessfull={card.wasSuccessfull}
            />
          );
        })}
      </div>
    );
  }
}
