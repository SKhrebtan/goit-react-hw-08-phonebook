import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { getIsLoggedIn, getUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { hideMenu } from 'redux/mobileMenu/slice';
import css from './MobileMenu.module.css'
import { NavLink } from 'react-router-dom';

const mobileMenu = document.querySelector('#mobile-menu');

export const MobileMenu = () => {
    const dispatch = useDispatch();
    const { name, email } = useSelector(getUser);
    const isLoggedIn = useSelector(getIsLoggedIn);
       
    useEffect(() => {
           const handleKeydown = e => {
        if (e.code === 'Escape') {
            dispatch(hideMenu())
        }
    }
        window.addEventListener('keydown', handleKeydown);
            
        return () => { window.removeEventListener('keydown', handleKeydown) }
    }, [dispatch])

    return createPortal(
        <div className={css.mobMenu}>
                 {isLoggedIn ? <div className={css.userInfoBlock}><p>Welcome, {name}</p>
                <p>{email}</p></div> :
                <div className={css.authBlock}>
                    <NavLink to="/register" className={css.link}  onClick={() => dispatch(hideMenu())}>Register</NavLink>
                    <NavLink to="/login" className={css.link} onClick={() => dispatch(hideMenu())}>Login</NavLink>
                </div>}
            <button type="button" className={css.logOutBtn} onClick={() => dispatch(logOut())}>Log out</button>
        </div>, mobileMenu
    )
}