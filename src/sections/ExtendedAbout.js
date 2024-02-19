import React from "react";

const ExtendedAbout = () => {
  const techStack = {
    frontend: {
      languages: ["HTML", "CSS", "SCSS", "JavaScript"],
      frameworks: ["React.js", "Bootstrap"],
    },
    backend: {
      languages: ["Python", "Java", "C"],
      frameworks: ["Express.js", "Flask"],
    },
    database: ["MongoDB", "PostgreSQL"],
    other: ["Node.js", "Git", "Github", "VSCode", "Postman", "Bash"],
  };


  return (
    <div className="page" id='extended-about'>
      <div
        className="extended-about-page"
      >
        <div className="extended-about-page">
          <h2>My tech stack</h2>
          <br/><br/>
          <div className="tech-stack-con">
            <h3>Languages</h3>
            {techStack.frontend.languages.map((item, idx) => {
              return (
                <div className="item-con" key={idx}>
                  {item}
                </div>
              );
            })}
            {techStack.backend.languages.map((item, idx) => {
              return (
                <div className="item-con" key={idx}>
                  {item}
                </div>
              );
            })}
          </div>
          <div className="tech-stack-con">
            <h3>Frameworks</h3>
            {techStack.frontend.frameworks.map((item, idx) => {
              return (
                <div className="item-con" key={idx}>
                  {item}
                </div>
              );
            })}
            {techStack.backend.frameworks.map((item, idx) => {
              return (
                <div className="item-con" key={idx}>
                  {item}
                </div>
              );
            })}
          </div>
          <div className="tech-stack-con">
            <h3>Databases</h3>
            {techStack.database.map((item, idx) => {
              return (
                <div className="item-con" key={idx}>
                  {item}
                </div>
              );
            })}
          </div>
          <div className="tech-stack-con">
            <h3>Other</h3>
            {techStack.other.map((item, idx) => {
              return (
                <div className="item-con" key={idx}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ExtendedAbout;
