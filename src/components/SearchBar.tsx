import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  function handleSearch(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (query != '') {
      navigate(`/search/${query}`);
    }
  }
  return (
    <Paper
      component={'form'}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 3,
        boxShadow: 'none',
        mr: { sm: 5 },
        outline: 'none',
      }}>
      <input
        type="text"
        className="search-bar outline-none py-2"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ color: 'red' }}
        onClick={e => handleSearch(e)}>
        <Search />
      </IconButton>
    </Paper>
  );
};
