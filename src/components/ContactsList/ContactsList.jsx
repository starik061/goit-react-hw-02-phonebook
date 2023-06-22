import React, { Component } from 'react';

export class ContactsList extends Component {
  render() {
    return (
      <>
        <h2>Contacts</h2>
        <ul>
          {this.props.contacts.map(contact => {
            return <li key={contact.id}>{contact.name}</li>;
          })}
        </ul>
      </>
    );
  }
}
