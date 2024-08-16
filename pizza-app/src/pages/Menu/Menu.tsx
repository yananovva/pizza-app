import Headling from "../../components/Headling/Headling.tsx";
import Search from "../../components/Search/Search.tsx";
import styles from './Menu.module.css'
import ProductCard from "../../components/ProductCard/ProductCard.tsx";
import {PREFIX} from "../../helpers/API.ts";
import {Product} from "../../interfaces/product.interface.ts";
import {useEffect, useState} from "react";
import axios from "axios";

export function Menu() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const getMenu = async () => {
        try {
            setIsLoading(true);
            await new Promise <void> ((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
            const { data } = await axios.get<Product[]>(`${PREFIX}/api/pizzas`);
            setProducts(data);
            setIsLoading(false);
        } catch (e) {
            console.error(e);
            setIsLoading(true);
            return;
        }
    };

    useEffect(() => {
        getMenu();
    }, []);


    return <>
        <div className={styles['head']}>
            <Headling>Меню</Headling>
            <Search placeholder='Введите блюдо или состав'/>
        </div>
        <div>
            {!isLoading && products.map(p => (
                <ProductCard
                    key={p.pizzaId}
                    pizzaId={p.pizzaId}
                    name={p.name}
                    description={p.description}
                    price={p.price}
                    rating={p.rating}
                    image={p.image}
                />
            ))}
            {isLoading && <>Загружаем продукты...</>}
        </div>
    </>;
}