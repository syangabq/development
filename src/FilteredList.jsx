import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';
import SortedList from './SortedList';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    // State storing search term, house filter, year filter, and whether or not to sort
    this.state = {
      search: "",
      house: "Any",
      year: "Any",
      sorted: "none"
    };
  }

  // Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.toLowerCase()});
  }

  filterItem = (item) => {
    // Filters item by search term and any filters applied
    return item.name.toLowerCase().search(this.state.search) !== -1 && (item.house.search(this.state.house) !== -1 || this.state.house==="Any") && (item.year.search(this.state.year) !== -1 || this.state.year==="Any");
  }

  onSelectHouse = (eventKey, event) => {
    // Updates state to filter by house
    this.setState({house: eventKey});
  }

  onSelectYear = (eventKey, event) => {
    // Updates state to filter by year
    this.setState({year: eventKey});
  }

  onSelectSorted = (eventKey, event) => {
    // Updates state to sort
    this.setState({sorted: eventKey});
  }

  render() {
    // Returns filtered and sorted list
    if (this.state.sorted === "name") {
      return (
        <div className="filter-list">
          <DropdownButton id="sortDropdown" title={"Sort By"}>
            <MenuItem eventKey="name" onSelect={this.onSelectSorted}>Name (A to Z)</MenuItem>
            <MenuItem eventKey="none" onSelect={this.onSelectSorted}>None</MenuItem>
          </DropdownButton>
          <DropdownButton id="houseDropdown" title={"House"}>
            <MenuItem eventKey="Any" onSelect={this.onSelectHouse}>Any</MenuItem>
            <MenuItem eventKey="Gryffindor" onSelect={this.onSelectHouse}>Gryffindor</MenuItem>
            <MenuItem eventKey="Slytherin" onSelect={this.onSelectHouse}>Slytherin</MenuItem>
            <MenuItem eventKey="Ravenclaw" onSelect={this.onSelectHouse}>Ravenclaw</MenuItem>
            <MenuItem eventKey="Hufflepuff" onSelect={this.onSelectHouse}>Hufflepuff</MenuItem>
          </DropdownButton>
          <DropdownButton id="yearDropdown" title={"Year"}>
            <MenuItem eventKey="Any" onSelect={this.onSelectYear}>Any</MenuItem>
            <MenuItem eventKey="1" onSelect={this.onSelectYear}>1</MenuItem>
            <MenuItem eventKey="2" onSelect={this.onSelectYear}>2</MenuItem>
            <MenuItem eventKey="3" onSelect={this.onSelectYear}>3</MenuItem>
            <MenuItem eventKey="4" onSelect={this.onSelectYear}>4</MenuItem>
            <MenuItem eventKey="5" onSelect={this.onSelectYear}>5</MenuItem>
            <MenuItem eventKey="6" onSelect={this.onSelectYear}>6</MenuItem>
            <MenuItem eventKey="7" onSelect={this.onSelectYear}>7</MenuItem>
          </DropdownButton>

          <p>
            <input type="text" placeholder="Search" onChange={this.onSearch} />
          </p>

            <p>
              Sorted by: Name (A to Z)
            </p>

            <p>
              Filtered by House: {this.state.house}
            </p>

            <p>
            Filtered by Year: {this.state.year}
            </p>

          <SortedList items={this.props.items.filter(this.filterItem)} />
        </div>
      );
    } else {
      // Returns filtered and unsorted list
      return (
        <div className="filter-list">
          <DropdownButton id="sortDropdown" title={"Sort By"}>
            <MenuItem eventKey="name" onSelect={this.onSelectSorted}>Name (A to Z)</MenuItem>
            <MenuItem eventKey="none" onSelect={this.onSelectSorted}>None</MenuItem>
          </DropdownButton>
          <DropdownButton id="houseDropdown" title={"House"}>
            <MenuItem eventKey="Any" onSelect={this.onSelectHouse}>Any</MenuItem>
            <MenuItem eventKey="Gryffindor" onSelect={this.onSelectHouse}>Gryffindor</MenuItem>
            <MenuItem eventKey="Slytherin" onSelect={this.onSelectHouse}>Slytherin</MenuItem>
            <MenuItem eventKey="Ravenclaw" onSelect={this.onSelectHouse}>Ravenclaw</MenuItem>
            <MenuItem eventKey="Hufflepuff" onSelect={this.onSelectHouse}>Hufflepuff</MenuItem>
          </DropdownButton>
          <DropdownButton id="yearDropdown" title={"Year"}>
            <MenuItem eventKey="Any" onSelect={this.onSelectYear}>Any</MenuItem>
            <MenuItem eventKey="1" onSelect={this.onSelectYear}>1</MenuItem>
            <MenuItem eventKey="2" onSelect={this.onSelectYear}>2</MenuItem>
            <MenuItem eventKey="3" onSelect={this.onSelectYear}>3</MenuItem>
            <MenuItem eventKey="4" onSelect={this.onSelectYear}>4</MenuItem>
            <MenuItem eventKey="5" onSelect={this.onSelectYear}>5</MenuItem>
            <MenuItem eventKey="6" onSelect={this.onSelectYear}>6</MenuItem>
            <MenuItem eventKey="7" onSelect={this.onSelectYear}>7</MenuItem>
          </DropdownButton>

          <p>
            <input type="text" placeholder="Search" onChange={this.onSearch} />
          </p>

          <p>
            Sorted by: None
          </p>

          <p>
            Filtered by House: {this.state.house}
          </p>

          <p>
          Filtered by Year: {this.state.year}
          </p>

          <List items={this.props.items.filter(this.filterItem)} />
        </div>
      );
    }

  }
}

export default FilteredList;
