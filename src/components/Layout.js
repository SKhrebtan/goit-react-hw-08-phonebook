import { Outlet } from 'react-router-dom';
import { MyAppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { MobileMenu } from './MobileMenu/MobileMenu';

export const Layout = () => {
  const isShown = useSelector(state => state.menu.isShownMobileMenu);
  console.log(isShown)
  return (
    <div >
      <MyAppBar />
 <Suspense fallback={null}>
        <Box sx={{padding: '0 20px' , }}>
          {isShown ? <MobileMenu /> : <Outlet />}
        </Box>
      
</Suspense>
    </div>
  );
};