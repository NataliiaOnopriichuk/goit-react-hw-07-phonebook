import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { useMemo } from 'react';

export const ContactList = ({ contacts }) => {
  const filterContacts = useSelector(getFilter);

  const filterContactsByName = useMemo(() => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterContacts.toLowerCase().trim())
    );
  }, [contacts, filterContacts]);

  return (
    <ul className={css.list}>
      {filterContactsByName.map(item => (
        <ContactItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
