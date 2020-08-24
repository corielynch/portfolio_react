import React from 'react';
 

const NavBar = (props) => {

  return (
    <div>
       <div className="container tm-container">
            <div className="tm-page-content"> 
                <div className="row navbar-row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 navbar-container">
                        <a href="javascript:void(0)" className="navbar-brand" id="go-to-top">Corie Lynch</a>
                    <nav className="navbar navbar-full">
                        
                        <div className="collapse navbar-toggleable-md" id="tmNavbar">                            

                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#tm-section-1">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#tm-section-2">Clients</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#tm-section-3">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#tm-section-4">Contact + Links</a>
                                </li>
                            </ul>

                        </div>

                    </nav>    
                    
                    <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#tmNavbar">
                        &#9776;
                    </button>
                    
                </div>
            </div>
        </div>
    </div>







    
    
    </div>
  );
}

export default NavBar;
