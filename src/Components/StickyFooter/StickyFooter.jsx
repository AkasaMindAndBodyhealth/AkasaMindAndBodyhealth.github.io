import React, { Component } from 'react';
import './StickyFooter.css';
import logo from '../../logo.svg';

class StickyFooter extends Component{
    state = {
        rightMeow: new Date()
    }


    render(){
        return(
            <div className="stickyFooter">
                <div className="container">
                    <div className="text-center">
                        Copyright &copy; {this.state.rightMeow.getFullYear()} Akasa Mind and Bodyhealth
                    </div>
                    <div className="text-center">
                        Built with React<img src={logo} className="react-logo" alt="logo"/>
                    </div>
                </div>
            </div>
        );
    }




}

export default StickyFooter;