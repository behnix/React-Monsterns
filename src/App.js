import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsterns: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.ir/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsterns: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsterns, searchField } = this.state;
    const resultSearch = monsterns.filter((monster) =>
      monster.name.includes(searchField)
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="جستجو هیولا..."
          handleChange={this.handleChange}
        />
        <CardList monsterns={resultSearch} />
      </div>
    );
  }
}

export default App;
