import axios from 'axios';

const INSTRUCTOR = 'roshan';
const COURSE_API_URL = 'localhost:8080';
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`;

class CourseDataService {
  retrieveAllCourses(name) {
    console.log(fetch('instructors/roshan/courses'));
    return axios.get(`${INSTRUCTOR_API_URL}/courses`);
  }
}

export default new CourseDataService();