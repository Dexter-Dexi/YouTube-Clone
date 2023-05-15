import Stack from '@mui/material/Stack/Stack';
import { logo } from '../utils/constants.js';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
SearchBar;

// ------------------------------------
export default function NavBar() {
  // console.log('hello');

  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      p={2}
      sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between',
      }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" width={40} height={40} />
      </Link>
      <SearchBar></SearchBar>
    </Stack>
  );
}
