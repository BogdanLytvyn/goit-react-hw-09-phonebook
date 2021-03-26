import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../contactForm/ContactForm';
import Filter from '../../filter/Filter';
import ContactList from '../../contactList/ContactList';
import style from './Phonebook.module.css';
import Loader from '../../loader/Loader';
import { getLoading} from '../../../redux/contacts/contactsSelectors';
import { fetchContacts } from '../../../redux/contacts/contactsOperation';


const PhoneBookPage = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const isContacts = useSelector(
    state => state.contacts.items.length >1,
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


    return (
      <div className={style.phoneBook}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
       {isContacts && <Filter />}
        <ContactList />
        {isLoading && <Loader />}
      </div>
    );

}

export default PhoneBookPage;

