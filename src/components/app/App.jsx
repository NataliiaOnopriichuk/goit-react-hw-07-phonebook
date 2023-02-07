import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operation.contacts';
import { selectorContacts, selectorFilter } from 'redux/selectors';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

export const App = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectorFilter);
  const { isLoading, error } = useSelector(selectorContacts);

  useEffect(() => {
    dispatch(fetchContacts(search));
  }, [dispatch, search]);

  if (error) return <p>Download error</p>;

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading ? <Loader /> : <ContactList />}
    </div>
  );
};
