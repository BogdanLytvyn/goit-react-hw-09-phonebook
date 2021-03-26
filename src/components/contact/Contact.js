import React from 'react';
import styles from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperation';

const Contact = ({ contact}) => {
  const dispatch = useDispatch();
  const deleteItem = () => dispatch(deleteContact(contact.id))

  return (
    <>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button className={styles.buttonDelete} type="button" onClick={deleteItem}>
        DELETE
      </button>
    </>
  );
};

export default Contact;

