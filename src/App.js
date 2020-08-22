import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer/index";
import NavBar from "./components/NavBar/index";
import Header from "./components/Header/index";
import Project from "./components/Project/index";



function App() {
  return (
    <div>
       <div className="container tm-container">
          

 <NavBar />

            
            <div className="tm-page-content">                
                
          
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
                        <img src="./img/headshot1.JPG" alt="eadshot" style= {{height: "100", width:"100"}} />
                    </div>
                    
                </section> 

                
                <section id="tm-section-2" className="row tm-section">
                    <div className="tm-flex-center col-xs-12 col-sm-6 col-md-6 col-lg-5 col-xl-6">
                        <img src="./img/CPS.png" alt="CPS" className="img-fluid tm-img" />
                        <img src="./img/fuel2.png" alt="fuel" className="img-fluid tm-img" />
                    </div>

                    <div className="tm-white-curve-right col-xs-12 col-sm-6 col-md-6 col-lg-7 col-xl-6">
                        
                        <div className="tm-white-curve-right-circle"></div>
                        <div className="tm-white-curve-right-rec"></div>
                        
                        <div className="tm-white-curve-text"> 
                            <h2 className="tm-section-header red-text">Clients</h2>
                            <p>My team and I redesigned a local company 15 year old full service parking <a href="https://hijaziii.github.io/California-Parking-Services/" target="_parent">website</a> for California Parking Services, based in Commerce, California. The company needed help making their website more accessible and modern looking with more interactive, dynamic features for the user.</p>
                            <p className="thin-font">My second client is <a href="http://www.lynchconstruction.net" target="_parent">Lynch Construction</a> in White Sulphur Springs, WV. We created a responsive <a href="https://stormy-harbor-23289.herokuapp.com/" target="_parent">application</a> for the company’s internal use in order to organize and log fuel inventory for tax purposes and business organization.</p>    
                        </div>
                        
                    </div>
                </section> 

                
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
                        <img src="./img/resume.png" alt="Image" className="img-fluid tm-img" style={{height: "100"}} />
                    </div>
                </section> 

               
                <section id="tm-section-4" className="row tm-section">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-5 col-xl-6 tm-contact-left">
                        <h2 className="tm-section-header thin-font col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">Send a message</h2>
                        <form action="index.html" method="post" className="contact-form">

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 tm-contact-form-left">
                                <div className="form-group"  onsubmit="return validation() ">
                                    <input type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Name"  required/>
                                </div>
                                <div className="form-group">
                                    <input type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Email"  required/>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="contact_subject" name="contact_subject" className="form-control" placeholder="Subject"  required/>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 tm-contact-form-right">
                                <div className="form-group">
                                    <textarea id="contact_message" name="contact_message" className="form-control" rows="6" placeholder="Message" required></textarea>
                                </div>
                                
                                <button type="submit" className="btn submit-btn">Send It!</button>
                            </div>

                        </form>   
                    </div>

                    <div className="tm-white-curve-right col-xs-12 col-sm-6 col-md-6 col-lg-7 col-xl-6">
                        
                        <div className="tm-white-curve-right-circle"></div>
                        <div className="tm-white-curve-right-rec"></div>
                        
                        <div className="tm-white-curve-text">
                            
                            <h2 className="tm-section-header green-text">Contact Me + Links</h2>
                            <a href="https://github.com/corielynch" target="_blank"><img src="./img/github.png" style={{height: "70%", width: "60%;"}} /></a>

                            <a href="https://www.linkedin.com/in/corie-lynch-1978a575/" target="_blank"><img src="./img/linkedin.png" style={{height: "75%", width: "60%"}} /></a>
                            
                            <div className="contact-info-links-container">
                                <span className="green-text contact-info">
                                	<span className="contact-info-link"></span><img src="./img/gmail.jpg" style={{height: "75%", width: "60%"}} />
                                  </span>
                            </div>
                            
                        </div>                        

                    </div>
                </section> 

               <Footer />
         
        </div>
    </div>
    </div>
  
  
  
  
  
 
  );
}

export default App;


