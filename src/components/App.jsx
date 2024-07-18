import { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { List } from './List/List';
import { Toaster } from 'react-hot-toast';

const initialContact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

export const App =() => {
  const savedContacts = localStorage.getItem('contacts');
  const [contacts, setContacts] = useState(savedContacts !== null? JSON.parse(savedContacts) : initialContact);
  const [filter, setFilter] = useState('');

  useEffect(()=> {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    },[contacts]);

  const addContact = newContact => {
    setContacts(prevState => [...prevState,newContact]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const filterContact =() => {
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterLowerCase))
  }

  return (
    <div>
      <Toaster/>
      <h1>Phonebook</h1>
      <Form addContact={addContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <List
        filterContact={filterContact}
        deleteContact={deleteContact}
      />
    </div>
  )

}