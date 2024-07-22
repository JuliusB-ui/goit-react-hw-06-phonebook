import css from './Filter.module.css';
import { setFilter } from '../../redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

    //filter name based on the the search keyword
    const handleFilterChange = e => {
      dispatch(setFilter(e.target.value));
    };

  return (
    <div className={css.container}>
      <p>Find Contacts by Name</p>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        placeholder="Search by name"
        onChange={handleFilterChange}
      />
    </div>
  );
};
