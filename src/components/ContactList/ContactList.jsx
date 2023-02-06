import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useMemo } from 'react';

export const ContactList = () => {
  const stateContacts = useSelector(getContacts);

  const filterContactsByName = useMemo(() => {
    return stateContacts.contacts.filter(({ name }) =>
      name.toLowerCase().includes(stateContacts.filter.toLowerCase().trim())
    );
  }, [stateContacts.contacts, stateContacts.filter]);

  return (
    <ul className={css.list}>
      {filterContactsByName.map(item => (
        <ContactItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
