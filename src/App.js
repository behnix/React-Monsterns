import React from "react";
import { CardList } from "./components/card-list/card-list.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsterns: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsterns: users }));
  }
  render() {
    return (
      <div className="App">
        <CardList monsterns={this.state.monsterns} />
      </div>
    );
  }
}

export default App;
