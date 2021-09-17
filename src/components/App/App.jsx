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
          if(this.state.contacts.includes(data)) {
      return alert(`${contact.name} is already in contacts`);
    };
  return (console.log([...prevState, ...contact]));
        })
      })
    );
   }

  render() {
    return (<section>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.contactFormSubmitHandle }/>

      <h2>Contacts</h2>
      <Contacts contact={this.state.contacts}/>
    </section >);
  };
};