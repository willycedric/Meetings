import React,  { Component } from 'react';
import Typed from 'typed.js';
import './Typed.css';
class Type extends Component {
    
    constructor (){
        super()
        this.state = {
            offset: 0, 
            typed:""
        }
    }
    componentDidMount() {
        const { strings, offset } = this.props
        const options = {
            strings: strings,
            typeSpeed: 70,
            loop: true,
            startDelay: 0,
            showCursor: false
        }        
        this.setState({
            offset,
        })
        this.typed = new Typed(this.el, options)
        window.addEventListener('scroll', this.handleScroll);
    }    

    handleScroll = (event) =>{
      if(window.pageYOffset > ((this.props.offset - window.innerHeight) +200)){    
            this.typed.reset()
        }        
    }
   

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
        this.typed.destroy()
    }

    render(){
        
        return (           
          <div className="type">
                <span ref={(el) => { this.el = el; }} />        
          </div>
          
            
        )
    }

}
export default Type;