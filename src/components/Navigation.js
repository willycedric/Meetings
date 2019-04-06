import React, { Component } from 'react'
import { Link as LinkTo} from "react-scroll"
import { Link } from '@reach/router'

class Navigation extends Component {
  render() {
    const { user, logOutUser } = this.props;

    return (
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
      <div className="container">
      {/* <Link to="/" className="navbar-brand">
            Watch Artists
      </Link> */}
      <LinkTo to="header" 
      smooth={true}
      offset={-30}
      duration= {500}>
            <Link to="/" className="navbar-brand">
            Watch Artists
      </Link> 
      </LinkTo>
        <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="navbar-nav ml-auto">
        { (
              <LinkTo className="nav-item nav-link py-3 px-0 px-lg-3" 
              to="what-it-is"
              smooth={true}
              offset={-30}
              duration= {500}
              >
              What is it 
              </LinkTo>
            )} { (
              <LinkTo className="nav-item nav-link py-3 px-0 px-lg-3" 
              to="how-it-works"
              smooth={true}
              offset={-30}
              duration= {500}
              >
               How it works 
              </LinkTo>
            )}
            { (
              <LinkTo className="nav-item nav-link py-3 px-0 px-lg-3" 
              to="pricing"
              smooth={true}
              offset={-30}
              duration= {500}
              >
               Pricing
              </LinkTo>
            )}
            { (
              <LinkTo className="nav-item nav-link py-3 px-0 px-lg-3" 
              to="about"
              smooth={true}
              offset={-30}
              duration= {500}
              >
                About
              </LinkTo>
            )} 
            {user && (
              <Link className="nav-item nav-link py-3 px-0 px-lg-3" to="/meetings">
                meetings
              </Link>
            )}           
            {user && (
              <Link
                className="nav-item nav-link py-3 px-0 px-lg-3"
                to="/login"
                onClick={e => logOutUser(e)}
              >
                log out
              </Link>
            )}
          </div>
      </div>
    </nav>
    );
  }
}

export default Navigation;
