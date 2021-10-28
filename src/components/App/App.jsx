import React from 'react';
import './App.module.css';
import { ContactForm } from '../ContactForm/ContactForm';
import { Contacts } from '../Contacts/Contacts';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  contactFormSubmitHandle = (data) => {
    console.log(data);
    this.setState(({contacts}) => (
      {
        contacts: [data, ...contacts],
        }));
  };
  
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  };

  render() {
    // const { contacts } = this.state;

    return (<section>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.contactFormSubmitHandle }/>

      <h2>Contacts</h2>
      <Contacts contacts={this.state.contacts} onDeleteContact={this.deleteContact }/>
    </section >);
  };
};