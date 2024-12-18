import React from "react";

function Resume() {
  const proficiencies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Git",
    "Responsive Design",
  ];

  return (
    <section>
      <h2>Resume</h2>
      <a
        href="C:\Users\nramo\onedrive\desktop\NancysReactPortfolio\src\assets\Nancy-Ramon.pdf" // Replace with the actual path to your resume
        download
      >
        Download My Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;