import { useDispatch } from 'react-redux';
import css from './ListItem.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contactSlice';

export const ListItem = ({ filteredContact }) => {
  // handleDelete method
  const dispatch=useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(filteredContact.id));
  };

  return (
    <li className={css.listItem}>
      <p className={css.contactName}>{filteredContact.name}:</p>
      <p>{filteredContact.number}</p>
      <button className={css.delBtn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
};
