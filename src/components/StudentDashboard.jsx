import React, { useState } from "react";
import { Link } from "react-router-dom";
import courseModel from "../Data";
import "../css/dashboard.css";

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState(courseModel);

  // Function to mark a course as completed
  const markCompleted = (courseId) => {
    const updatedCourses = enrolledCourses.map((course) => {
      if (course.id === courseId) {
        return { ...course, completed: !course.completed };
      }
      return course;
    });
    setEnrolledCourses(updatedCourses);
  };

  return (
    <>
      <div class="container">
        <div class="header">
          <div class="header-logo">
            <svg
              class="site-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M512 256a15 15 0 00-7.1-12.8l-52-32 52-32.5a15 15 0 000-25.4L264 2.3c-4.8-3-11-3-15.9 0L7 153.3a15 15 0 000 25.4L58.9 211 7.1 243.3a15 15 0 000 25.4L58.8 301 7.1 333.3a15 15 0 000 25.4l241 151a15 15 0 0015.9 0l241-151a15 15 0 00-.1-25.5l-52-32 52-32.5A15 15 0 00512 256zM43.3 166L256 32.7 468.7 166 256 298.3 43.3 166zM468.6 346L256 479.3 43.3 346l43.9-27.4L248 418.7a15 15 0 0015.8 0L424.4 319l44.2 27.2zM256 388.3L43.3 256l43.9-27.4L248 328.7a15 15 0 0015.8 0L424.4 229l44.1 27.2L256 388.3z" />
            </svg>
            <span class="site-title">CourseLearn</span>
          </div>
          <div class="header-search">
            <button class="button-menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385 385">
                <path d="M12 120.3h361a12 12 0 000-24H12a12 12 0 000 24zM373 180.5H12a12 12 0 000 24h361a12 12 0 000-24zM373 264.7H132.2a12 12 0 000 24H373a12 12 0 000-24z" />
              </svg>
            </button>
            <input type="search" placeholder="Search Documentation..." />
          </div>
        </div>
        <div class="main">
          <div class="sidebar">
            <ul>
              <li>
                <a href="/">
                  <i class="lni lni-text-format"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#" class="active">
                  <i class="lni lni-home"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="lni lni-text-format"></i>
                  <span>Course Deatils</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="lni lni-bar-chart"></i>
                  <span>Course Analytics</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="lni lni-grid"></i>
                  <span>Course Ratings</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="lni lni-bullhorn"></i>
                  <span>Conatct</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="lni lni-support"></i>
                  <span>Help & Support</span>
                </a>
              </li>
            </ul>
          </div>

          {/* // Cards */}
          <div class="page-content">
            <h1>Enrolled Courses</h1>

            <div class="Cardcontainer">
              {enrolledCourses.map((course) => (
                <div className="cards" key={course.id}>
                  <div className="card-item">
                    <div
                      className="card-image"
                      style={{
                        backgroundImage: `url(${course.thumbnail})`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className="card-info">
                      <h2 className="card-title">{course.name}</h2>
                      <p className="card-intro">
                        Instructor: {course.instructor}
                      </p>
                      <p className="card-intro">Due Date: {course.dueDate}</p>
                      <progress value={course.progress} max="100"></progress>
                      <button
                        type="button"
                        className={`compBtn ${
                          course.completed ? "completed" : ""
                        }`}
                        onClick={() => markCompleted(course.id)}
                      >
                        {course.completed ? "Completed" : "Mark as Completed"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
