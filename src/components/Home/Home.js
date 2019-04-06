import React, { Component } from 'react';
import { Link } from '@reach/router';
import Details from '../Details/Details'
import About  from '../About/About'
import Footer from '../Footer/Footer'
class Home extends Component { 
  render() {
    const { user } = this.props;

    const biggerLead = {
      fontSize: 1.4 + 'em',
      fontWeight: 200
    };

    return (
      <div>
     <header className="masthead bg-primary text-white text-center">
      <div className="container">
        <img className="img-fluid mb-5 d-block mx-auto" src="/img/profile.png" alt=""/>
        <h1 className="text-uppercase mb-0">Watch Artists</h1>
        <hr className="star-light"/>
      </div>
      <section className="login-register">
        {user == null && (
                <span>
                  <Link
                    to="/register"
                    className="btn-lg home-button mr-2"
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="btn-lg home-button mr-2"
                  >
                    Log In
                  </Link>
                </span>
              )}
              {user && (
                <Link to="/meetings" className="btn-lg home-button">
                  Meetings
                </Link>
              )}
          {' '}
            {/* columns */}
       </section>      
     </header>
     <Details/>
      <About/>
      <Footer/>
      <div class="copyright py-4 text-center text-white">
      <div class="container">
        <small>Copyright &copy; Your Website 2019</small>
      </div>
      </div>
     </div>
    );
  }
}

export default Home;
