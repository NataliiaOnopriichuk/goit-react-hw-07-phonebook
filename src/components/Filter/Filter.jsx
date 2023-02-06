import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
};
