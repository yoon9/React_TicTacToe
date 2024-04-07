import React from "react";
import '../components/Square.css';

export default class Square extends React.Component {


  render() {
    return(
      <button className="square"
        onClick={() => {this.props.onClick()}}
      >
        {this.props.value}
      </button>
      )
    }
}