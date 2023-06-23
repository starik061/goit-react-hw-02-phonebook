import React, { Component } from 'react';

export class AddContactForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onAddContact}>
        <label>
          Name
          <input
            onChange={this.props.onChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.props.name}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
