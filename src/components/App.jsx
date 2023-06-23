import React, { Component } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  updateInputState = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addContact = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    let contact = { name: name, number: number, id: nanoid(4) };

    this.setState(
      prevState => ({
        contacts: [...prevState.contacts, contact],
        name: '',
        number: '',
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
        <AddContactForm
          onAddContact={this.addContact}
          onNameChange={this.updateInputState}
          onNumberChange={this.updateInputState}
          name={this.state.name}
          number={this.state.number}
        />
        <ContactsList contacts={this.state.contacts} />
      </>
    );
  }
}

//TODO сдеть обнуление поля после добавления контакта. Как раз для этого использовать стать нэйм
