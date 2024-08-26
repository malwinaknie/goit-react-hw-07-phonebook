import React, { useEffect } from "react";
import ContactForm from "../contact-form/ContactForm";
import Filter from "../filter/Filter";
import ContactList from "../contact-list/ContactList";
import { nanoid } from "nanoid";
import styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, setFilter, initializeContacts } from '../redux/contactSlice'


function App() {
  const filter = useSelector(state => state.contacts.filter);
  const items = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeContacts());
    }, [dispatch]);

  const handleAddContact = (name, number) => {
    const id = nanoid();
    dispatch(addContact({ id, name, number }));

    const updatedContacts = [...items, { id, name, number }];
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleDeleteContacts = contactId => {
    dispatch(deleteContact(contactId));

    const updatedContacts = items.filter(contact => contact.id !== contactId);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleFilterChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value))
  };

  const filteredContacts = items.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )

    return (
      <div className={styles["container"]}>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={handleAddContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={handleAddContact}
        />
      </div>
    );
}


export default App;