import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/register",
        formData
      );

      alert(res.data.message);
      console.log(res.data);

      // Clear form after successful registration
      setFormData({
        name: "",
        email: "",
        password: "",
      });

    } catch (error) {
      console.error("Registration Error:", error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server not responding");
      }
    }
  };

  return (
    <div className="container">
      <h2>Register Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;