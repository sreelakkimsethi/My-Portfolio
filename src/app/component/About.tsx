const AboutMe = () => {
    return (
        <div className="about-me-container" id="home">
            <div className="title-name">
                <h1 className="title">ABOUT ME</h1>
            </div>

            <div className="content-section">
                <div className="home">
                    <p className="description">
                        Hello! I&apos;m <span className="name-highlight">DEVISRI Lakkimsetti</span>, a passionate <strong>Full Stack Developer</strong> skilled in <strong>React.js, Node.js, JavaScript, HTML, CSS, and Bootstrap</strong>. I build responsive, user-focused web applications and seamlessly integrate REST APIs.
                        <br /><br />
                        With experience in <strong>Full-Stack Development</strong> and <strong>AI/ML</strong>, I bring a strong problem-solving mindset to Agile teams. I&apos;ve contributed to real-time, scalable projects during my internships.
                        <br /><br />
                        I&apos;m a quick learner who thrives in collaborative environments and enjoys tackling complex challenges.
                        <br /><br />
                        Outside of coding, I love exploring new tech, participating in hackathons, and working on impactful, AI-driven web solutions.
                        <br /><br />
                        🚀 <strong>Mission:</strong> To build meaningful digital products that make a difference.
                    </p>
                </div>

                <div className="profile-image-container1">
                    <img 
                        src=" https://img.freepik.com/premium-vector/woman-working-with-code-language-algorithm-coder-character_81894-7228.jpg" 
                        alt="Devisri Lakkimsetti" 
                        className="profile-image1" 
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
