import React, { useState } from "react";
import styles from '../contact-form/ContactForm.module.css'
import PropTypes from 'prop-types'

const ContactForm = ({ onSubmit: addContact }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

const handleChange = e => {
    const {name, value} = e.target;
    name === 'name' ? setName(value) : setNumber(value);
};

const handleSubmit = e => {
    e.preventDefault();
    addContact(name, number);
    setName('');
    setNumber(''); 
};

    return (
      <div className={(styles["container"])}>
        <form 
        className={(styles["form"])}
        onSubmit={handleSubmit}>
          <label className={(styles['label'])}>
            Name
            <input
              className={(styles["input"])}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange}
            />
          </label>
          <label className={(styles['label'])}>
            Number
            <input
              className={(styles["input"])}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleChange}
            />
          </label>
          <button 
          className={(styles["button"])}
          type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }

  ContactForm.propTypes = {
    onSubmit: PropTypes.func,
  };
  
  
  export default ContactForm;