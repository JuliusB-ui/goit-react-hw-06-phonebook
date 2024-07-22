import { useState } from 'react';
import css from './Form.module.css';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selector';
import { addContact } from '../../redux/contactSlice';

export const Form =() => {
const dispatch = useDispatch();
const [name, setName] = useState('');
const [number, setNumber] = useState('');
const contacts = useSelector(getContacts);

  const handleNameChange = e => {
    setName(e.target.value);
  }

  const handleNumberChange = e => {
    setNumber(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(name.trim()==="" || number.trim()==='') {
      return;
    }

    const existingContact = contacts.find(contact => contact.name.toLowerCase()=== name.toLowerCase())
    if (existingContact) {
      toast(`${name} is already in contacts!`);
      return;
    }

        // Add Contact
    dispatch(addContact(name, number));
    // Reset Form Fields upon submitting
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formField}>
        <p className={css.formLabel}>Name</p>
        <input
          type="text"
          name="name"
          // add \ before - in [' \-] to make it work (LMS)
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label className={css.formField}>
        <p className={css.formLabel}>Number</p>
        <input
          type="tel"
          name="number"
          // add \ before - in [\-.\s] to make it work (LMS)
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button className={css.formButton} type="submit">
        Add Contact
      </button>
    </form>
  );
}

Form.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    )}