

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
                        <h2>Mechanical &amp; Engineering</h2>
                        <p>Pragti Engineering College | Suramapalem | 2020 - 2023</p>
                        <p>Grade: 7.6/10</p>
                    </div>
                </div>
            </div>
    
            <div className="flip-container">
                <div className="flip-box">
                    <div className="flip-box-front">
                        Diploma
                    </div>
                    <div className="flip-box-back">
                        <h2>Diploma</h2>
                        <p>Govt Polytecnic College DRRM <br /> | Mechanical | Ramachandrapuram | 2017 - 2020</p>
                        <p>Percentage: 72%</p>
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
                        <p>Naren E.M High School, Yeleswaram | 2016 - 2017</p>
                        <p>Grade: 8.8/10</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default EducationFlipBox;
