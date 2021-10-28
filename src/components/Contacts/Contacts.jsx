import React from 'react';
import css from './Contacts.module.css';
import { App } from 'components/App/App';
// import { ContactsItem } from '../ContactsItem/ContactsItem';

export const Contacts = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={css.contactsList}>
            {
                contacts.map(({ id, name, number }) => {
                    const contact = { id, name, number };
                    return (<li key={contact.id} className={css.contactsList__item}>
                        <p className={css.contactsList__text}>{contact.name}: {contact.number}</p>
                        <button className={css.contactsList__deleteBtn} onClick={() => {onDeleteContact(id)}}>Delete</button>
                    </li>);
     })
            }
        </ul>
    );
};