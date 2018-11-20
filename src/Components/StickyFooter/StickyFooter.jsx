import React, { Component } from 'react';

class StickyFooter extends Component{
    state = {
        rightMeow: new Date()
    }


    render(){
        return(
            <div className="stickyFooter">
                Copyright &copy; {this.state.rightMeow.getFullYear()} Akasa Mind and Bodyhealth
            </div>
        );
    }




}

export default StickyFooter;