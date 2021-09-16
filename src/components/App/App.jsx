import React from 'react';
import './App.module.css';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  };

  handleNameChange = (event) => {
    this.setState({ name: event.currentTarget.value });
  };

  handleNumberChange = (event) => {
    this.setState({ number: event.currentTarget.value })
  };

  addContact = () => { };

  render() {
    return (<section>
      <h1>Phonebook</h1>
      <form>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>Number
          <input
            type="tel"
            value={this.state.number}
            onChange={this.handleNumberChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>

      <h2>Contacts</h2>
      <ul>
        <li></li>
      </ul>
    </section >);
  };
};