import React, { Component } from 'react';
import './List.css';

class List extends Component {
  renderList() {
    // Renders each student with their image, house, year
    const items = this.props.items.map(item => {
      return <li class="directory" key={item.name}>
                  <img src={item.image} alt="" width="200"/>
                  <p>{item.name},
                    House: {item.house},
                    Year: {item.year}
                  </p>
              </li>
    });

    return items;
  }

  render() {
    return (
      <ul>
      {this.renderList()}
      </ul>
    );
  }
}

export default List;
