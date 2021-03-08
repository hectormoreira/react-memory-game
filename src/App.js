import React, { Component } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import buildDeck from "./utils/buildDeck";
import "./App.css";
import "./styles/Header.css";

const getInitialState = () => {
  const deck = buildDeck();
  return {
    deck,
    selectedCouple: [],
    isComparing: false,
    numberStep: 0,
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  render() {
    return (
      <div className="App">
        <Header
          numberStep={this.state.numberStep}
          resetGame={() => this.resetGame()}
        />
        <Dashboard
          deck={this.state.deck}
          selectedCouple={this.state.selectedCouple}
          selectedCard={(card) => this.selectedCard(card)}
        />
      </div>
    );
  }

  selectedCard(card) {
    if (
      this.state.isComparing ||
      this.state.selectedCouple.indexOf(card) > -1 ||
      card.wasSuccessfull
    ) {
      return;
    }

    const selectedCouple = [...this.state.selectedCouple, card];
    this.setState({
      selectedCouple,
    });

    if (selectedCouple.length === 2) {
      this.comparingCouple(selectedCouple);
    }
  }

  comparingCouple(selectedCouple) {
    this.setState({ isComparing: true });

    setTimeout(() => {
      const [firstCard, secondCard] = selectedCouple;
      let deck = this.state.deck;
      if (firstCard.icon === secondCard.icon) {
        deck = deck.map((card) => {
          if (card.icon !== firstCard.icon) {
            return card;
          }
          return { ...card, wasSuccessfull: true };
        });
      }
      this.verifyWinner(deck);
      this.setState({
        selectedCouple: [],
        deck,
        isComparing: false,
        numberStep: this.state.numberStep + 1,
      });
    }, 1000);
  }

  verifyWinner(deck) {
    if (deck.filter((card) => !card.wasSuccessfull).length === 0) {
      alert(`Eres un ganador en ${this.numberStep} intentos!`);
    }
  }

  resetGame() {
    this.setState(getInitialState());
  }
}

export default App;
