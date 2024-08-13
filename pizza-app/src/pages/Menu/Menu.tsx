import Headling from "../../components/Headling/Headling.tsx";
import Search from "../../components/Search/Search.tsx";
import styles from './Menu.module.css'

export function Menu() {
    return <>
        <div className={<styles['head']}>
        <Headling>Меню</Headling>
        <Search placeholder='Введите блюдо или состав'/>
        </div>
    </>;
}