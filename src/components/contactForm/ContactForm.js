import React, { useState} from 'react';
import { useDispatch} from 'react-redux';
import styles from '../pages/phoneBookPage/Phonebook.module.css';
import { addContact} from '../../redux/contacts/contactsOperation';


const initialState = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = e => {
    setUser(prevUser => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(user));
    setUser(initialState);
  };


    return (
      <form onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            autoComplete="off"
            className={styles.input}
            type="text"
            value={user.name}
            name="name"
            onChange={handleChange}
            required
          />
          <span className={styles.bar}></span>
          <label className={styles.label}>Name</label>
        </div>
        <div className={styles.group}>
          <input
            autoComplete="off"
            className={styles.input}
            type="tel"
            value={user.number}
            name="number"
            onChange={handleChange}
            required
          />
          <span className={styles.bar}></span>
          <label className={styles.label}>Number:</label>
        </div>
        <hr />
        <button className={styles.buttonSubmit} type="submit">
          Add contact
        </button>
      </form>
    );

}

export default ContactForm;

