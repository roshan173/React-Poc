import React, { Component } from 'react';
import './style.css';
import CourseDataService from './CourseDataService';
const INSTRUCTOR = '';

class ListCoursesComponent extends Component{

  constructor(props) {
    super(props);
    this.state = {
      courses : [],
      message : null
    }
    this.refreshCourses = this.refreshCourses.bind(this);
    this.deleteCourseClicked = this.deleteCourseClicked.bind(this);
    this.updateCourseClicked = this.updateCourseClicked.bind(this);
    this.addCourseClicked = this.addCourseClicked.bind(this);
  }

  componentDidMount() {
    this.refreshCourses();
  }

  refreshCourses() {
    CourseDataService.retrieveAllCourses(INSTRUCTOR)
      .then(
          response => {
            this.setState({
              courses : response.data
            });
          }
      )
  }

  deleteCourseClicked(id) {
    CourseDataService.deleteCourse(INSTRUCTOR, id)
      .then(
        response => {
          this.setState({ message: `Delete of course ${id} Successful`});
          this.refreshCourses();
        }
      )
  }

  updateCourseClicked(id) {
    console.log('update ' + id);
    const { history } = this.props;
    if(history) history.push(`/courses/${id}`);
  }

  addCourseClicked() {
    const { history } = this.props;
    if(history) history.push(`/courses/-1`);
  }

  render() {
    return(
      <div className="container">
        <h3>All Courses</h3>
          {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Description</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.courses.map(
                    course => 
                      <tr key={course.id}>
                        <td>{course.id}</td>
                        <td>{course.description}</td>
                        <td><button className="btn btn-warning" onClick={() => this.deleteCourseClicked(course.id)}>Delete</button></td>
                        <td><button className="btn btn-success" onClick={() => this.updateCourseClicked(course.id)}>Update</button></td>
                      </tr>
                  )
                }
              </tbody>
            </table>
            <div className="row">
              <button className="btn btn-success" onClick={this.addCourseClicked}>Add</button>
            </div>
          </div>
      </div>
    )
  }
}

export default ListCoursesComponent;