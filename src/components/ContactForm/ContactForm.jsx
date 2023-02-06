import { memo } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { addContact } from 'redux/cotactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const ContactForm = memo(() => {
  const dispatch = useDispatch();
  const stateContacts = useSelector(getContacts);

  const addContacts = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    if (
      stateContacts.contacts.some(
        el => el.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    )
      return alert(`${name} is already in contacts`);
    dispatch(addContact({ name, number, id: nanoid() }));
    event.target.reset();
  };

  return (
    <form className={css.form} onSubmit={addContacts}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
});
