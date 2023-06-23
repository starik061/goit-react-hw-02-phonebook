import React, { Component } from 'react';
export class ContactsList extends Component {
  render() {
    return (
      <>
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            type="text"
            value={this.props.filter}
            name="filter"
            onChange={this.props.onFilterChange}
          />
        </label>
        <ul>
          {this.props.contacts.map(contact => {
            return (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
