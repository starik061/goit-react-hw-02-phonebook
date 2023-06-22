import React, { Component } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <AddContactForm />
      </>
    );
  }
}
