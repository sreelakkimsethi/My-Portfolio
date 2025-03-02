const ProfileSection = () => {
    return (
        <div className="profile-container" id="about">
        <div className="profile-content">
            <div className="profile-image-container1">
                <img 
                    src="../../WhatsApp Image 2025-02-25 at 8.32.45 PM-removebg-preview.jpg" 
                    alt="Profile" 
                    className="profile-image1" 
                />
            </div>
            <div className="profile-text">
                <h1>Hey I&apos;m <span className="highlight">Sravya Mogali</span></h1>
                <h2>I&apos;m a <span className="highlight">Developer</span></h2>
                <p>
                    Passionate and skilled fresher with a strong foundation in modern technologies and a quick learning ability. 
                    Eager to contribute to a dynamic team and grow professionally.
                </p>
                <div className="social-icons">
                    <i>
                        <img 
                            src="https://cdn2.iconfinder.com/data/icons/New-Social-Media-Icon-Set-V11/512/email.png" 
                            alt="Email Icon" 
                        />
                    </i>
                    <i>
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl74JHLTYuF66t7yukctKxI_jBwEgzWilnHQ&s" 
                            alt="LinkedIn Icon" 
                        />
                    </i>
                    <i>
                        <img 
                            src="https://icones.pro/wp-content/uploads/2021/06/symbole-github-orange.png" 
                            alt="GitHub Icon" 
                        />
                    </i>
                </div>
                <button className="download-cv">Download CV</button>
            </div>
        </div>
    </div>
    
    );
};

export default ProfileSection;
