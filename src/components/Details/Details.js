import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Typed from '../Typed/Typed'
import './Details.css'
class Details extends Component {
    constructor(){
        super()
        this.state = {
            offset:0
        }
    }
    componentDidMount(){   
        const rect = this.el.getBoundingClientRect()
        this.setState({
            offset: rect.top
        })
    }
    render(){
        return(
            <div>
            <section className="portfolio b-white lead" id="what-it-is"  ref={(el) => { this.el = el; }} >
                <div className="container">
                <h2 className="text-center text-uppercase text-secondary mb-0">What is it</h2>
                {/* <hr className="star-dark mb-5"/> */}
                <div className="row">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    </div>
                </div>
            </section>           
            <section className="portfolio b-blue" id="how-it-works"  ref={(el) => { this.el = el; }} >
                <div className="container">
                <h2 className="text-center text-uppercase text-secondary mb-0">How it works</h2>
                {/* <hr className="star-dark mb-5"/> */}
                <div className="row">
                    <div className="col-md-3 mb-4 mb-lg-0">                    
                    </div>
                        <Typed  offset = { this.state.offset} strings= {[
                            "<p classNem='typed-in'><i className='order'>1</i> - Register a new user account </p>",
                            "<p classNem='typed-in'<i className='order'>2 </i> -  Enter details about an artist </p>",
                            "<p classNem='typed-in'><i className='order'>3 </i> -  Set the watching period for the selected artist </p>",
                            "<p classNem='typed-in'><i className='order'>4 </i> - Select a notification means</p>",
                            "<p classNem='typed-in'><i className='order'>5 </i> - Receives alert when new tracks are published</p>"   

                        ]}/>                    
                </div>
                </div>
          </section>
          <section className="portfolio b-green lead" id="pricing"  ref={(el) => { this.el = el; }} >
                <div className="container">
                <h2 className="text-center text-uppercase text-secondary mb-0">Pricing</h2>
                {/* <hr className="star-dark mb-5"/> */}
                <div className="row">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    </div>
                </div>
            </section>
          </div>
        );
    }
}

export default Details;