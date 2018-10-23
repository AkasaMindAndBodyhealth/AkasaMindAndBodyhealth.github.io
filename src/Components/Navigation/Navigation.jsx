import React, { Component } from 'react';
import Link from 'react-router';

class Navigation extends Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <nav id="main-navigation">
            <div className="nav">
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li></li>
                </ul>
            </div>
        </nav>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Navigation;
