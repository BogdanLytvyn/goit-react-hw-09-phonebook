import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../pages/phoneBookPage/Phonebook.module.css';
import { changeFilter } from '../../redux/contacts/contactsActions';
import { getFilter } from '../../redux/contacts/contactsSelectors';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onHadleFilter = evt => dispatch(changeFilter(evt.target.value))

  return (
    <div className={styles.group}>
      <input
        autoComplete="off"
        className={styles.input}
        type="text"
        value={value}
        name="name"
        onChange={onHadleFilter}
        required
      />
      <span className={styles.bar}></span>
      <label className={styles.label}>Find contacts by name</label>
    </div>
  );
};


export default Filter;

