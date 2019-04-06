import React, { Component } from 'react';

class Details extends Component {
    render(){
        return(
            <section className="portfolio" id="portfolio">
            <div className="container">
              <h2 className="text-center text-uppercase text-secondary mb-0">How it works</h2>
              <hr className="star-dark mb-5"/>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                      <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                        <i className="fas fa-search-plus fa-3x"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src="img/portfolio/cabin.png" alt="" />
                  </a>
                </div>
                <div className="col-md-6 col-lg-4">
                  <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                      <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                        <i className="fas fa-search-plus fa-3x"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src="img/portfolio/cake.png" alt="" />
                  </a>
                </div>
                <div className="col-md-6 col-lg-4">
                  <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                      <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                        <i className="fas fa-search-plus fa-3x"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src="img/portfolio/circus.png" alt="" />
                  </a>
                </div>
                <div className="col-md-6 col-lg-4">
                  <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                      <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                        <i className="fas fa-search-plus fa-3x"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src="img/portfolio/game.png" alt="" />
                  </a>
                </div>
                <div className="col-md-6 col-lg-4">
                  <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                      <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                        <i className="fas fa-search-plus fa-3x"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src="img/portfolio/safe.png" alt="" />
                  </a>
                </div>
                <div className="col-md-6 col-lg-4">
                  <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                      <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                        <i className="fas fa-search-plus fa-3x"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src="img/portfolio/submarine.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Details;