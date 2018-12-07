import React, { Component } from 'react';
import List from './List';

class SortedList extends Component {

  sortItem = (item1, item2) => {
    // Sorts items by name alphabetically
    var x = item1.name.toLowerCase();
    var y = item2.name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  }

  render() {
      return (
        <div className="sort-list">
          <List items={this.props.items.sort(this.sortItem)} />
        </div>
      );
  }
}

export default SortedList;
