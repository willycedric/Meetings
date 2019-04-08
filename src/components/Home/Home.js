import React, { Component } from 'react';
import { Link } from '@reach/router';
import Details from '../Details/Details'
import About  from '../About/About'
import Footer from '../Footer/Footer'
import Register from '../Register/Register'
import Login from './../Login'
class Home extends Component { 
  render() {
    const { user } = this.props;

    return (
      <div>
     <header id="header" className="masthead bg-primary text-white text-center">
      <div className="container">
        <img className="img-fluid mb-5 d-block mx-auto" src="/img/profile.png" alt=""/>
        <h1 className="text-uppercase mb-0">Watch Artists</h1>
        <hr className="star-light"/>
      </div>
      <section className="login-register">
        {user == null && (
                
                <div>
                   <Register/>
                 
                   <Login/>
                </div>
                
              )}
              {user && (
                <Link to="/meetings" className="btn-lg home-button">
                  Meetings
                </Link>
              )}
          {' '}            
       </section>      
     </header>
     <Details/>
      <About/>
      <Footer/>
      <div className="copyright py-4 text-center text-white">
      <div className="container">
        <small>Copyright &copy; Your Website 2019</small>
      </div>
      </div>
     </div>
    );
  }
}

export default Home;
