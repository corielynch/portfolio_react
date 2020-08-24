import React from 'react'

function Display() {
    return (
        <div>
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
        </div>
    )
}

export default Display
