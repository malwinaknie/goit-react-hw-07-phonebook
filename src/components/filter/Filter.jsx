import React from 'react';
import styles from './Filter.module.css'
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
    <div>
        <label
        className={(styles['label'])}>
            Find contacts by name:
            <input
            className={(styles['input'])}
            type="text"
            value={value}
            onChange={onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
/>
        </label>
    </div>
)

Filter.propTypes = {
    onChange: PropTypes.any,
    value: PropTypes.any,
  };
  
  Filter.defaultProps = {
    onChange: () => {},
    value: '',
  };
  

export default Filter;