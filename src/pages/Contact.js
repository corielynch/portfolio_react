import React from 'react'



function Contact() {
    return (
        <div>
            <section id="tm-section-4" className="row tm-section">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-5 col-xl-6 tm-contact-left">
                    <h2 className="tm-section-header thin-font col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">Send a message</h2>
                    <form action="index.html" method="post" className="contact-form">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 tm-contact-form-left">
                            <div className="form-group" onsubmit="return validation() ">
                                <input type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <input type="text" id="contact_subject" name="contact_subject" className="form-control" placeholder="Subject" required />
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
                        <a href="https://github.com/corielynch" target="_blank"><img src="./img/github.png" style={{ height: "70%", width: "60%;" }} /></a>

                        <a href="https://www.linkedin.com/in/corie-lynch-1978a575/" target="_blank"><img src="./img/linkedin.png" style={{ height: "75%", width: "60%" }} /></a>

                        <div className="contact-info-links-container">
                            <span className="green-text contact-info">
                                <a href="mailto:lynchc17@gmail.com" className="contact-info-link"><img src="./img/gmail.jpg" style={{ height: "75%", width: "60%" }} /></a>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
