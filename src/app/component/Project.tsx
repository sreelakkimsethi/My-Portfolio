const PortfolioProjectsComponent = () => {
    return (
      <div className="portfolio-container" id="experience">
        <h1 className="portfolio-title">My Projects</h1>
  
        <div className="project-card">
          <h2>EdTech Management Portal</h2>
          <p><strong>Description:</strong> An interactive web platform that enables students to explore and learn various technologies. The portal allows students to track assignments, view scores, manage learning schedules, and receive job notifications.</p>
          <p><strong>Technologies:</strong> React, JavaScript, Next.js, Redux Toolkit</p>
          <p><strong>Role:</strong> Software Developer</p>
          <p><strong>Team Size:</strong> 8</p>
          <ul>
            <li>Developed responsive web pages and reusable stateful components using React and Next.js.</li>
            <li>Integrated REST APIs for dynamic data handling and seamless user experience.</li>
            <li>Managed global state using Redux Toolkit to ensure consistent application state across components.</li>
            <li>Delivered user stories on time while following Agile methodology.</li>
           
          </ul>
        </div>
  
        <div className="project-card">
          <h2>Enabling Efficient and Privacy-Preserving Mobile Cloud Storage</h2>
          <p><strong>Technologies:</strong> Java, MySQL, JavaScript, Cloud Computing, Data Encryption, Privacy-preserving Techniques</p>
          <p><strong>Description:</strong> Designed a secure mobile cloud storage scheme to preserve data privacy while ensuring data confidentiality.</p>
          <ul>
            <li>Assisted in implementing encryption techniques to secure data before cloud storage.</li>
            <li>Worked on optimizing storage performance and enhancing security measures.</li>
          </ul>
        </div>
  
        <div className="project-card">
          <h2>JavaScript Developer - Shripriti Educational & IT Hub (INTERNSHIP)</h2>
          <p><strong>Duration:</strong> January 2024 - May 2024</p>
          <ul>
            <li>Developed interactive and user-friendly web applications using JavaScript, HTML, and CSS.</li>
            <li>Improved front-end functionality and responsiveness for better user experience.</li>
            <li>Collaborated with a team to enhance website performance and efficiency.</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default PortfolioProjectsComponent;