import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Register from "./Register";
import ApiCalling from "./ApiCalling";
import Home from "./home";
import Users from "./Users";
import "./App.css";

function About() {
  return (
    <div className="page-container">
      <h1>About Us</h1>

      <p>
        Welcome to MyWebsite, a Full Stack MERN Application developed using
        React.js, Node.js, Express.js, and MongoDB.
      </p>

      <p>
        This project demonstrates user registration, API integration,
        database connectivity, and responsive web design.
      </p>

      <div className="about-cards">
        <div className="info-card">
          <h3>Frontend</h3>
          <p>React.js, HTML5, CSS3, JavaScript</p>
        </div>

        <div className="info-card">
          <h3>Backend</h3>
          <p>Node.js & Express.js</p>
        </div>

        <div className="info-card">
          <h3>Database</h3>
          <p>MongoDB & Mongoose</p>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>

      <div className="contact-box">
        <p><strong>Name:</strong> Nikhil Panchal</p>
        <p><strong>Email:</strong> nikhil@gmail.com</p>
        <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
        <p><strong>Location:</strong> Ahmedabad, Gujarat</p>
      </div>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Enter Your Name"
        />

        <input
          type="email"
          placeholder="Enter Your Email"
        />

        <textarea
          rows="5"
          placeholder="Enter Your Message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/api" element={<ApiCalling />} />
  <Route path="/users" element={<Users />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/register" element={<Register />} />
</Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;