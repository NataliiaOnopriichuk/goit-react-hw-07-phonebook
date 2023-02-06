import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { removeContact } from 'redux/contacts/cotactsSlice';

export const ContactItem = ({ name, phone, id }) => {
  // const dispatch = useDispatch();
  return (
    <li className={css.listItem}>
      <p>
        {name}: {phone}
      </p>
      <button
        type="button"
        className={css.btnDelete}
        // onClick={() => {
        //   dispatch(removeContact(id));
        // }}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
