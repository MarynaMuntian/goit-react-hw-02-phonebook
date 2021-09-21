import React from 'react';
import './App.module.css';
import { ContactForm } from '../ContactForm/ContactForm';
import { Contacts } from '../Contacts/Contacts';

export class App extends React.Component {
  state = {
    contacts: [],
  };

  contactFormSubmitHandle = (data) => {
    console.log(data);
    this.setState(prevState => (
      {
        contacts: prevState.contacts.map(({ contact }) => {
          contact.name === data.name ? 
      alert(`${contact.name} is already in contacts`)
     : this.setState(({ contacts }) => ({
          contacts: [data, ...contacts],
        }));;
        })
      })
    );
   }

  render() {
    // const { contacts } = this.state;

    return (<section>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.contactFormSubmitHandle }/>

      <h2>Contacts</h2>
      <Contacts contacts={this.state.contacts}/>
    </section >);
  };
};