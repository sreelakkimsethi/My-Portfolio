const ProfileSection = () => {
    return (
        <div className="profile-container" id="about">
        <div className="profile-content">
            <div className="profile-image-container1">
                <img
                    src="../../devi_image.jpg" 
                    alt="Profile" 
                    className="profile-image1" 
                />
            </div>
            <div className="profile-text">
                <h1>Hey I&apos;m <span className="highlight">Devisri Lakkimsetti</span></h1>
                <h2>I&apos;m a <span className="highlight">Developer</span></h2>
                <p>
                Software Engineer with strong proficiency in Python and ARTIFICIAL INTELLIGENCE and MACHINE LEARNING. 
                Skilled in building scalable applications, Websites, and MachineLearning-based solutions. 
                Passionate about solving complex problems and delivering efficient, high-quality software.
                </p>
                <div className="social-icons">
                    <i>
                    <a href="mailto:sreelakkimsethi@gmail.com">
    <img 
        src="https://cdn2.iconfinder.com/data/icons/New-Social-Media-Icon-Set-V11/512/email.png" 
        alt="Email Icon" 
        width="40"
        height="40"
    />
</a>

                    </i>
                    <i>
                       
                        <a href="https://www.linkedin.com/in/sravya-mogali-67b537249" target="_blank">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl74JHLTYuF66t7yukctKxI_jBwEgzWilnHQ&s"
         alt="LinkedIn Icon"/>
</a>

                    </i>
                    <i>
                       
                        <a href="https://github.com/sravya5454" target="_blank">
    <img src="https://icones.pro/wp-content/uploads/2021/06/symbole-github-orange.png"  
         alt="GitHub Icon"/>
</a>

                    </i>
                </div>
                
                <a href="../../Devisri_resume.pdf" download="Nandavamsi_Singireddy.PDF">
                <button className="download-cv">Download CV</button>
   
</a>

            </div>
        </div>
    </div>
    
    );
};

export default ProfileSection;
