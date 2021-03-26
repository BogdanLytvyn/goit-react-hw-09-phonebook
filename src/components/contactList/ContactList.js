import React from 'react';
import Contact from '../contact/Contact';
import { getFilteredContacts } from '../../redux/contacts/contactsSelectors';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList=()=>{
  const contacts = useSelector(getFilteredContacts)
  return (
    <ul className={styles.listContacts}>
      {contacts.map(item => (
        <li className={styles.contact} key={item.id}>
          <Contact contact={item} />
        </li>
      ))}
    </ul>
  );

}


export default ContactList;

