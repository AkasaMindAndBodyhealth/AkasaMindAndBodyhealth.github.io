import React, { Component } from 'react';

class StickyFooter extends Component{
    state = {
        rightMeow: Date.now()
    }


    render(){
        return(
            <div className="stickyFooter">
                Copyright &copy; {this.state.rightMeow} Akasa Mind and Bodyhealth
            </div>
        );
    }




}

export default StickyFooter;