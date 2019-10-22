import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import InstructorApp from './InstructorApp';
import ListCoursesComponent from './ListCoursesComponent';

class App extends Component {

  render() {
    return (
      <div className="container">
        <InstructorApp />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
