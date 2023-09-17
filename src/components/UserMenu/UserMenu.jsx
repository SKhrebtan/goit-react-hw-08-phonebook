import { getUser } from 'redux/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { List, ListItem,  Box, Button  } from '@mui/material';
import css from './UserMenu.module.css'

export const UserMenu = () => {
  const dispatch = useDispatch()
const {name, email} = useSelector(getUser)
  return (
    <Box className={css.box} sx={{ display: 'flex', gap: '20px'}}>
      <List className={css.list}>
      <ListItem disablePadding>Welcome, {name}</ListItem>
      <ListItem disablePadding>{email}</ListItem>
      </List>
      <Button
        variant="contained"
        color="error"
        type="button"
        className={css.btn}
        onClick={() => dispatch(logOut())}>Log out</Button>
      </Box>
  );
};
