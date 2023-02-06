import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/cotactsSlice';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.listItem}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        className={css.btnDelete}
        onClick={() => {
          dispatch(removeContact(id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
