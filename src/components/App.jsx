import React, { Component } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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
        <ContactsList
          contacts={this.state.contacts}
          onFilterChange={this.updateInputState}
        />
      </>
    );
  }
}

//TODO сдеть обнуление поля после добавления контакта. Как раз для этого использовать стать нэйм
