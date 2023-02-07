import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { filterContactsByName } from 'redux/selectors';

export const ContactList = () => {
  const filterContacts = useSelector(filterContactsByName);

  return (
    <ul className={css.list}>
      {filterContacts.map(item => (
        <ContactItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
