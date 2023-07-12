import {Component} from "react"
import Example from "./Example";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: 'Ukraine',
      isActive: false
    }
  }
  handler = () => {
    if (!this.state.isActive) {
      this.setState({ country: 'Ukraine is the best country', isActive: true })
    } else {
      this.setState({ country: 'Ukraine ', isActive: false })
    }

  }
  render() {
    return (
      <Example
        nameCountry={this.state.country}
        handler={this.handler}
      />
    );
  }
}

export default App;

