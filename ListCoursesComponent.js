import React, { Component } from 'react';
import './style.css';
import CourseDataService from './CourseDataService';
import axios from 'axios';

class ListCoursesComponent extends Component{

  constructor(props) {
    super(props);
    this.refreshCourses = this.refreshCourses.bind(this);
  }

  componentDidMount() {
    this.refreshCourses();
  }

  refreshCourses() {
    fetch('http://localhost:8080/instructors/roshan/courses').then(
      response => {
        console.log("ad");
      }
    );
  }
  render(){return(<div></div>)}
  // render() {
  //   return(
  //     <div className="container">
  //       <h3>All Courses</h3>
  //         <div className="container">
  //           <table className="table">
  //             <thead>
  //               <tr>
  //                 <th>Id</th>
  //                 <th>Description</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //               <tr>
  //                 <td>1</td>
  //                 <td>Spring boot with react.</td>
  //               </tr>
  //             </tbody>
  //           </table>
  //         </div>
  //     </div>
  //   )
  // }
}

export default ListCoursesComponent;