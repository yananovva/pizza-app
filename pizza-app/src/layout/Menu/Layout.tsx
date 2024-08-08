import {Link, Outlet} from "react-router-dom";
import styles from './Layout.module.css';
import Button from "../../components/Button/Button.tsx";

export function Layout() {
    return <div className={styles['layout']}>
        <div className={styles['sidebar']}>
            <div className={styles['user']}>
                <img className={styles['avatar']} src="/avatar-icon.svg" alt="Аватар пользователя"/>
                <div className={styles['name']}>Марина Мельтон</div>
                <div className={styles['email']}>m.melton@gmail.com</div>
            </div>
            <div className={styles['menu']}>
                <Link to='/' className={styles['link']}>
                    <img src="/icon-menu-1.svg" alt="Иконка меню"/>
                    Меню</Link>
                <Link to='/cart' className={styles['link']}>
                    <img src="/icon-menu-2.svg" alt="Иконка корзины"/>
                    Корзина</Link>
            </div>
            <Button className={styles['exit']}>
                <img src="/exit-icon.svg" alt="Иконка выхода"/>
                Выход
            </Button>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>;
}