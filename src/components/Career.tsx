import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Development Intern</h4>
                <h5>DevTown (Remote)</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Created responsive web pages using HTML, CSS, and JavaScript. 
              Developed 10+ UI components including navigation bars and layouts. 
              Optimized page load behavior with image compression and code structuring.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ServiceNow Platform Intern</h4>
                <h5>ServiceNow (Remote)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed hands-on labs covering ServiceNow platform fundamentals and ITSM workflows. 
              Worked with database-style tables, forms, and records for enterprise data handling. 
              Configured basic workflows and modules.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>Dr. A. P. J. Abdul Kalam Technical University</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Currently pursuing Bachelor of Technology in Computer Science with a GPA of 7.3. 
              Focusing on Data Structures, Algorithms, DBMS, and Web Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
