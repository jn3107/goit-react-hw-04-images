import css from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcSearch } from 'react-icons/fc';
import { useState } from 'react';

export const Searchbar = ({ onSubmitForm }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Enter the query word');
      return;
    }
    onSubmitForm(searchQuery);
  };

  return (
    <div>
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.searchFormBtn}>
            <span className={css.searchFormBtnLabel}>Search</span>
            <FcSearch size={'2em'} />
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            value={searchQuery}
          />
        </form>
      </header>
    </div>
  );
};
