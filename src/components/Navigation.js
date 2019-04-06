import React, { Component } from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from '@reach/router';

class Navigation extends Component {
  render() {
    const { user, logOutUser } = this.props;

    return (
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
      <div className="container">
      <Link to="/" className="navbar-brand">
            Watch Artists
      </Link>
        <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="navbar-nav ml-auto">
            {user && (
              <Link className="nav-item nav-link py-3 px-0 px-lg-3" to="/meetings">
                meetings
              </Link>
            )}
            {!user && (
              <Link className="nav-item nav-link py-3 px-0 px-lg-3" to="/login">
                log in
              </Link>
            )}
            {!user && (
              <Link className="nav-item nav-link py-3 px-0 px-lg-3" to="/register">
                register
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
