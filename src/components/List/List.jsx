import { ListItem } from 'components/ListItem/ListItem';
import css from './List.module.css';
import { getContacts, getFilter } from '../../redux/selector';
import { useSelector } from 'react-redux';

const getFilteredContact = (filter, contacts) => {
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  })
  return filteredContacts;

}

export const List = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContact(filter, contacts);
  return (
    <ul className={css.listUl}>
      {filteredContacts.map(filteredContact => (
        <ListItem
          key={filteredContact.id}
          filteredContact={filteredContact}
        />
      ))}
    </ul>
  );
};
