import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { getIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Box } from '@mui/material';

import { MatchMediaWrapper } from 'components/MatchMediaWrapper/MatchMediaWrapper';

export const MyAppBar = () => {

  const isLoggedIn = useSelector(getIsLoggedIn);


  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Navigation />
      {isLoggedIn ? <MatchMediaWrapper/> : <AuthNav />}
           </Toolbar>
      </AppBar>
      </Box>
  );
};

 // <header style={{ display: 'flex' }}>
    //   <Navigation />
    //   {isLoggedIn ? <UserMenu /> : <AuthNav />}
           
    // </header>