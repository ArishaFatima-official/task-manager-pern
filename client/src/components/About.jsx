import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      <div className="card shadow border-0">
        <div className="card-body p-5">

          <h1 className="text-primary fw-bold mb-4">
            📋 PERN Task Manager
          </h1>

          <p className="lead text-muted">
            A modern Task Manager application built using the
            <strong> PERN Stack</strong> (PostgreSQL, Express.js,
            React.js, and Node.js). It helps users organize daily
            tasks with a clean, responsive, and easy-to-use interface.
          </p>

          <hr />

          <h3 className="mt-4">✨ Features</h3>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">✅ Create new tasks</li>
            <li className="list-group-item">📝 Update existing tasks</li>
            <li className="list-group-item">🗑 Delete tasks</li>
            <li className="list-group-item">🔍 Search tasks by title</li>
            <li className="list-group-item">📅 Manage due dates</li>
            <li className="list-group-item">⚡ Set task priority</li>
            <li className="list-group-item">📌 Track task status</li>
            <li className="list-group-item">📱 Fully responsive design</li>
          </ul>

          <h3>🛠 Tech Stack</h3>

          <div className="row g-3 my-3">
            <div className="col-md-3">
              <div className="card text-center h-100">
                <div className="card-body">
                  <h5>Frontend</h5>
                  <p>React.js<br />Bootstrap 5<br />Axios</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center h-100">
                <div className="card-body">
                  <h5>Backend</h5>
                  <p>Node.js<br />Express.js</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center h-100">
                <div className="card-body">
                  <h5>Database</h5>
                  <p>PostgreSQL</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center h-100">
                <div className="card-body">
                  <h5>Tools</h5>
                  <p>Git<br />GitHub<br />VS Code</p>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <h3>🎯 Purpose</h3>

          <p className="text-muted">
            This project demonstrates CRUD operations, RESTful API
            integration, React state management, Express middleware,
            and PostgreSQL database operations. It was built as a
            portfolio project to strengthen full-stack development
            skills and showcase modern web development practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;