import React from 'react'


function AboutMe() {
    return (
        <div>
            <div className="container tm-container">
                <div className="tm-page-content"></div>
                <section id="tm-section-3" className="row tm-section">
                    <div className="tm-white-curve-left col-xs-12 col-sm-6 col-md-6 col-lg-7 col-xl-6">
                        <div className="tm-white-curve-left-rec">
                        </div>
                        <div className="tm-white-curve-left-circle">
                        </div>
                        <div className="tm-white-curve-text">
                            <h2 className="tm-section-header gray-text">About me</h2>
                            <p className="thin-font">I am a junior web developer based in Los Angeles. I have experience in individual projects creating front and back-end apps, such as a random password generator, dynamically updated daily planner, a weather API, an ORM burger logger and MVC design.</p>
                            <p>My background in journalism, along with studying and living abroad for 10 years, prepared me to use research, media to effectively communicate and present ideas. I am looking to use my creativity and education in web development to challenge myself to solve problems with the best and brightest in the field.</p>
                        </div>
                    </div>
                    <div className="tm-flex-center col-xs-12 col-sm-6 col-md-6 col-lg-5 col-xl-6">
                        <img src="./img/resume.png" alt="Image" className="img-fluid tm-img" style={{ height: "100" }} />
                    </div>
                </section>
            </div>
        </div>  
    )
}

export default AboutMe
