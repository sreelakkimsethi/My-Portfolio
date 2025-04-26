const PortfolioProjectsComponent = () => {
    return (
      <div className="portfolio-container" id="experience">
      <h1 className="portfolio-title">My Projects</h1>
      <div className="project-card">
          <h2>Created a Company Attendance Portal Application</h2>
          <p><strong>Technologies:</strong> HTML, CSS, React, Javascript, Bootstrap, Node Js</p>
          <p><strong>Description:</strong> Created Attendance website portal for the Company</p>
          <ul>
              <li>Developed a web-based Employee Attendance Portal to streamline attendance tracking</li>
              <li>Featuring secure login .</li>
              <li>SQL database integration for managing records efficiently.</li>

          </ul>
      </div>
      <div className="project-card">
          <h2>French Translation Using Char-Level Seq2Seq Lstm</h2>
          <p><strong>Description:</strong>Created a AI powered english to French language transition NLP Model </p>
          <p><strong>Technologies:</strong> Python, TensorFlow, Keras, LSTM, NLP</p>
          <p><strong>Role:</strong> Team Member </p>
          <ul>
              <li>Built a character-level Seq2Seq model with LSTM for French-to-English translation.</li>
              <li>Preprocessed and vectorized text data for effective character encoding.</li>
              <li>Trained model using TensorFlow and Keras with teacher forcing and padding.</li>
          </ul>
      </div>
  
  </div>
  
    );
  };
  
  export default PortfolioProjectsComponent;