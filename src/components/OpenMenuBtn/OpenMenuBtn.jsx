import { ReactComponent as BurgerMenu } from '../../img/burgermenu.svg';
import css from './OpenMenuBtn.module.css';

export const OpenMenuBtn = () => {
    console.log(BurgerMenu)
    return (
        <button
            type="button"
            className={css.btn}
        ><BurgerMenu /></button>
    )
}