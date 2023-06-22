import React, { Component } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    let contact = { name: name, id: nanoid(4) };

    this.setState(
      prevState => ({
        contacts: [...prevState.contacts, contact],
      }),
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <AddContactForm onAddContact={this.addContact} />
        <ContactsList contacts={this.state.contacts} />
      </>
    );
  }
}

//TODO сдеть обнуление поля после добавления контакта. Как раз для этого использовать стать нэйм
