function Contact() {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>

      <div className="contact-box">
        <p><strong>Name:</strong> Nikhil Panchal</p>

        <p><strong>Email:</strong> nikhil@example.com</p>

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