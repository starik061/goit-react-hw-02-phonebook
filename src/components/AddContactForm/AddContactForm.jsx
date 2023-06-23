import React, { Component } from 'react';

export class AddContactForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onAddContact}>
        <label>
          Name
          <input
            onChange={this.props.onNameChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.props.name}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            onChange={this.props.onNumberChange}
            name="number"
            value={this.props.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
