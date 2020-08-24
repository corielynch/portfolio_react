import React from 'react'


function Home() {
    return (
        <div>
            <section id="tm-section-1" className="row tm-section">

                    <div className="tm-white-curve-left col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-6">
                        <div className="tm-white-curve-left-rec"></div>
                        <div className="tm-white-curve-left-circle"></div>
                        <div className="tm-white-curve-text">
                            <h2 className="tm-section-header blue-text">Full Stack Web Developer</h2>
                            <p>
                                I graduated from UCLA Extension Coding Bootcamp in front and back end web development.
                            </p>
                            <p className="thin-font">
                                I have experience with HTML, CSS, JavaScript, JQuery, APIs, Node, Express, Handlebars, MVC, PWC (Progressive Web Apps) and servers including MySQL, Sequelize, Mongo, Mongoose and React.
                            </p>        
                        </div>                        
                    </div>

                    <div className="tm-home-right col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-6">
                        <img src="./img/headshot1.JPG" alt="eadshot" style= {{height: "50", width:"80"}} />
                    </div>
                    
                </section> 
        </div>
    )
}

export default Home
