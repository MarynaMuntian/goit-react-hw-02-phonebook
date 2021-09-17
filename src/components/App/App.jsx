import React from 'react';
import './App.module.css';
import { ContactForm } from '../ContactForm/ContactForm';

export class App extends React.Component {
  state = {
    contacts: [],
  };

  render() {
    return (<section>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <ul>
        <li></li>
      </ul>
    </section >);
  };
};