const PortfolioProjectsComponent = () => {
    return (
      <div className="portfolio-container" id="experience">
      <h1 className="portfolio-title">My Projects</h1>
      <div className="project-card">
          <h2>Deployed a Cloud-Library app in Azure Cloud</h2>
          <p><strong>Technologies:</strong> Azure (App Service, AKS, Functions), .NET, Docker, Kubernetes, Azure DevOps, GitHub Actions.</p>
          <p><strong>Description:</strong> A microservices-based library app deployed on Azure for scalability and efficiency..</p>
          <ul>
              <li>Designed and deployed microservices on Azure.</li>
              <li>Automated CI/CD with Azure DevOps & GitHub Actions.</li>
              <li>Scaled with Kubernetes and serverless functions.</li>
              <li>Monitored performance using Azure tools.</li>
          </ul>
      </div>
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
  
  </div>
  
    );
  };
  
  export default PortfolioProjectsComponent;