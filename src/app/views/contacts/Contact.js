import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <p>{this.props.contact.name}
        {this.props.contact.phoneNumber}</p>
      </div>
    );
  }
}
