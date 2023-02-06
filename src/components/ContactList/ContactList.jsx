import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useMemo } from 'react';

export const ContactList = () => {
  const stateContacts = useSelector(getContacts);
  const filterContacts = useSelector(getFilter);

  const filterContactsByName = useMemo(() => {
    return stateContacts.items.filter(({ name }) =>
      name.toLowerCase().includes(filterContacts.toLowerCase().trim())
    );
  }, [stateContacts.items, filterContacts]);

  return (
    <ul className={css.list}>
      {filterContactsByName.map(item => (
        <ContactItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
