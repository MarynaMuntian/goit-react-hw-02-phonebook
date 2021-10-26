import React from 'react';
import css from './Contacts.module.css';
import { App } from 'components/App/App';
// import { ContactsItem } from '../ContactsItem/ContactsItem';

export const Contacts = ({ contacts }) => {
    return (
        <ul>
            {
                contacts.map(({ name, number }) => {
                    const contact = { name, number };
                    return (<li> {contact.name}: {contact.number} </li>);
     })
            }
        </ul>
    );
};