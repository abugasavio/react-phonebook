import React, { Component } from 'react';
import ContactsForm from './ContactsForm';
import ContactList  from './ContactList';

export default class Contacts extends Component {
  render() {
    return (
      <div>
        <h1>
        Testing
        </h1>
        <ContactsForm {...this.props} />
        <ContactList {...this.props} />
      </div>
    );
  }
}
