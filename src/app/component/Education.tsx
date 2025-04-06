

const EducationFlipBox = () => {
    return (
       
       
        <div className="container" id="skills">
        <h1 className="main-heading">EDUCATION DETAILS</h1>
        <div className="grid-container">
            <div className="flip-container">
                <div className="flip-box">
                    <div className="flip-box-front">
                        Bachelor&apos;s <br />of Technology
                    </div>
                    <div className="flip-box-back">
                        <h2>AIML&amp; Engineering</h2>
                        <p>KIET Engineering College | Korangi | 2021 - 2025</p>
                        <p>Grade: 7.6/10</p>
                    </div>
                </div>
            </div>
    
            <div className="flip-container">
                <div className="flip-box">
                    <div className="flip-box-front">
                         Intermediate
                    </div>
                    <div className="flip-box-back">
                        <h2>Intermediate</h2>
                        <p>Chambers Junior College <br /> | M.P.C | Pallakol | 2019 - 2021</p>
                        <p>Percentage: 83%</p>
                    </div>
                </div>
            </div>
    
            <div className="flip-container">
                <div className="flip-box">
                    <div className="flip-box-front">
                        Secondary School <br /> of Education
                    </div>
                    <div className="flip-box-back">
                        <h2>Secondary School of Education</h2>
                        <p>Z.P.P  E.M High School, Mori | 2018 - 2019</p>
                        <p>Grade: 9.0/10</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default EducationFlipBox;
