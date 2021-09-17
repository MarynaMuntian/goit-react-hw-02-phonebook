import React from 'react';
import css from './ContactsItem.module.css';

export const ContactsItem = ({name, number}) => {
    return (
    <li>
            <span>{name} {number}</span>
    </li>
  );
 };