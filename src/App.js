import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';
import ginny from './ginny.jpg'
import luna from './luna.jpg'
import draco from './draco.jpg'
import vincent from './vincent.jpg'
import hermione from './hermione.jpg'
import harry from './harry.jpg'
import ron from './ron.jpg'
import padma from './padma.jpg'
import ernie from './ernie.jpg'
import susan from './susan.png'
import fred from './fred.jpg'
import katie from './katie.jpg'
import percy from './percy.jpg'
import oliver from './oliver.jpg'
import charlie from './charlie.jpg'

// Student directory list
const students = [
{name: "Ginny Weasley", house: "Gryffindor", year: "1", image: ginny},
{name: "Luna Lovegood", house: "Ravenclaw", year: "1", image: luna},
{name: "Draco Malfoy", house: "Slytherin", year: "2", image: draco},
{name: "Vincent Crabbe", house: "Slytherin", year: "2", image: vincent},
{name: "Hermione Granger", house: "Gryffindor", year: "2", image: hermione},
{name: "Harry Potter", house: "Gryffindor", year: "2", image: harry},
{name: "Ron Weasley", house: "Gryffindor", year: "2", image: ron},
{name: "Padma Patil", house: "Ravenclaw", year: "2", image: padma},
{name: "Ernie Macmillan", house: "Hufflepuff", year: "2", image: ernie},
{name: "Susan Bones", house: "Hufflepuff", year: "2", image: susan},
{name: "Fred Weasley", house: "Gryffindor", year: "3", image: fred},
{name: "Katie Bell", house: "Gryffindor", year: "4", image: katie},
{name: "Percy Weasley", house: "Gryffindor", year: "5", image: percy},
{name: "Oliver Wood", house: "Gryffindor", year: "6", image: oliver},
{name: "Charlie Weasley", house: "Gryffindor", year: "7", image: charlie},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hogwarts Directory</h1>
        <FilteredList items={students}/>
      </div>
    );
  }
}

export default App;
