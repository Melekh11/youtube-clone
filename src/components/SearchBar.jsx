import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {

  const [userQuery, setUserQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (userQuery) {
      navigate(`/search/${userQuery}`);
      setUserQuery('');
    }
  }

  return (
    <Paper
    component='form'
    onSubmit={handleSubmit}
    sx = {{
      borderRadius: 20,
      border: '1px solid #E3E3E3',
      pl: 2,
      boxShadow: 'none',
      mr: {sd : 5}
    }}
    >
      <input
      className="search-bar"
      placeholder='Search...'
      value={userQuery}
      onChange={(e) => { setUserQuery(e.target.value ) }}
      />

      <IconButton type='submit' sx={{p: '10px', color: 'red'}}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar