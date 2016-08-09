import React, { Component } from 'react';

export default class ContactsForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = this.refs.name.value;
    const phoneNumber = this.refs.phoneNumber.value;
    this.props.addContact(name, phoneNumber);
  }

  render() {
    return (
      <div>
        <h4>Add a Contact</h4>
        <form ref="contactForm" className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" ref="name" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" className="form-control" ref="phoneNumber" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}
