import React, { useState } from "react";
import "./contactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [feedback, setFeedback] = useState({
    successMessage: "",
    errorMessage: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFeedback({ successMessage: "", errorMessage: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setFeedback({
        successMessage: "",
        errorMessage: "Invalid email format!",
      });
      return;
    }

    if (!validatePhone(formData.phone)) {
      setFeedback({
        successMessage: "",
        errorMessage: "Phone number must be 10 digits!",
      });
      return;
    }

    setFeedback({
      successMessage: "Form submitted successfully!",
      errorMessage: "",
    });
    setFormData({ name: "", email: "", message: "", phone: "" });
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {feedback.errorMessage && (
        <p className="error-message">{feedback.errorMessage}</p>
      )}
      {feedback.successMessage && (
        <p className="success-message">{feedback.successMessage}</p>
      )}
    </div>
  );
}

export default ContactForm;
