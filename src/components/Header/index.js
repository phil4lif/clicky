import React from "react";
import "./style.css"

function Header(props) {
    return <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Good Boy Memory Click</h1>
      <p className="lead">Try to click each good boy only once!</p>
      <div>Score: {props.score} </div>
      <div>High Score: {props.highScore}</div>
    </div>
  </div>
}

export default Header;