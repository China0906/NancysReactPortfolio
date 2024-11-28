import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleBlur = (field) => {
    const newErrors = { ...errors };
    if (!formData[field]) {
      newErrors[field] = "This field is required";
    } else if (field === "email" && !validateEmail(formData.email)) {
      newErrors[field] = "Invalid email address";
    }
    setErrors(newErrors);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
    } else {
      alert("Message sent!");
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          onBlur={() => handleBlur("name")}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur("email")}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur("message")}
        />
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;