function About() {
  return (
    <div className="page-container">
      <h1>About Us</h1>

      <p>
        Welcome to MyWebsite, a Full Stack MERN Application developed using
        React.js, Node.js, Express.js, and MongoDB.
      </p>

      <p>
        This project demonstrates user registration, database integration,
        API calling, and modern responsive web design.
      </p>

      <div className="about-cards">
        <div className="info-card">
          <h3>Frontend</h3>
          <p>React.js, HTML, CSS, JavaScript</p>
        </div>

        <div className="info-card">
          <h3>Backend</h3>
          <p>Node.js, Express.js</p>
        </div>

        <div className="info-card">
          <h3>Database</h3>
          <p>MongoDB & Mongoose</p>
        </div>
      </div>
    </div>
  );
}