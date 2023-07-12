import {Component} from "react"

class Example extends Component {
  render() {
    return (
      <>
        <h4>My country:  {this.props.nameCountry}</h4>
        <button onClick = {this.props.handler}>Click</button>
      </>
    );
    }
  }

export default Example;