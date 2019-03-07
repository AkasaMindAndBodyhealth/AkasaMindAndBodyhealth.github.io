import React, { Component } from 'react';
import './StickyFooter.css';
import logo from '../../logo.svg';

class StickyFooter extends Component{
    state = {
        rightMeow: new Date()
    }


    render(){
        return(
            <div className="stickyFooter fixed-bottom ">
                <div className="container text-center">
                  <div className="row justify-content-md-center">
                    <div className="col-12 text-center w-100">
                        Copyright &copy; {this.state.rightMeow.getFullYear()} Akasa Mind and Bodyhealth<br/>
                        Built with React<img src={logo} className="react-logo" alt="logo"/>
                    </div>
                  </div>
                </div>
            </div>
        );
    }




}

export default StickyFooter;