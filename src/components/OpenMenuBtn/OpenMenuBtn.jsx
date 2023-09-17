import { ReactComponent as BurgerMenu } from '../../img/burgermenu.svg';
import {ReactComponent as CloseBtn} from '../../img/close.svg'
import css from './OpenMenuBtn.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { hideMenu, showMenu } from 'redux/mobileMenu/slice';

export const OpenMenuBtn = () => {
    const dispatch = useDispatch();
    const isShownMenu = useSelector(state => state.menu.isShownMobileMenu)

    return (
        !isShownMenu ?
                <button
            type="button"
            className={css.btn}
            onClick={() => dispatch(showMenu())}
        ><BurgerMenu /></button> :
            <button
                type="button"
                className={css.btn}
                onClick={() => dispatch(hideMenu())}
            ><CloseBtn /></button>

    )
}