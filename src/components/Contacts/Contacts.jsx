import React from 'react';
import css from './Contacts.module.css';
import { ContactsItem } from '../ContactsItem/ContactsItem';

export const Contacts = ({ contacts }) => {
    return (
        <ul>
            {
                contacts.map(({ id, name, number }) => {
                    return <ContactsItem key={id} name={name} number={number} />;
     })
            }
        </ul>
    );
};