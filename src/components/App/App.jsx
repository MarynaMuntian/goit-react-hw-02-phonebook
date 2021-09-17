import React from 'react';
import './App.module.css';
import { ContactForm } from '../ContactForm/ContactForm';

export class App extends React.Component {
  state = {
    contacts: [],
  };

  contactFormSubmitHandle = (data) => {
    console.log(data);
   }

  render() {
    return (<section>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.contactFormSubmitHandle }/>

      <h2>Contacts</h2>
      <ul>
        <li></li>
      </ul>
    </section >);
  };
};