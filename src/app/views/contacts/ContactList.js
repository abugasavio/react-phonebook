import React, { Component } from 'react';
import Contact from './Contact';

export default class ContactList extends Component {
  render() {
    return (
      <div>
        <h1>Contact List</h1>
        {this.props.contacts.map((contact, i) => <Contact {...this.props } contact={contact} key={i} />)}
      </div>
    );
  }
}
