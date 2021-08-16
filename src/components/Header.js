import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="title">React Juego de Memoria</div>
        <div>
          <button className="btn-restart" onClick={this.props.resetGame}>Reiniciar</button>
        </div>
        <div className="title">Intentos: {this.props.numberStep}</div>
      </header>
    );
  }
}
