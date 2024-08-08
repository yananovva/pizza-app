import Button from "./components/Button/Button.tsx";
import { MouseEvent, useState } from "react";
import Input from "./components/Input/Input.tsx";
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";


function App() {
const [counter, setCounter] = useState<number>(0);

const addCounter = (e: MouseEvent) => {
    console.log(e);
}

    return (
        <>
            <Button onClick={addCounter}>Кнопка</Button>
            <Button appearance='big' onClick={addCounter}>Кнопка</Button>
            <Input placeholder='Email'/>
        </>
    )
}

export default App
