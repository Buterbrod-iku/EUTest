import style from './App.module.css'
import SpaceBlock from "./components/spaceBlock/spaceBlock.tsx";
import {useState} from "react";
import hexGenerator from "./utils/hexGenerator.ts";
import RandomSort from "./components/sortComponents/randomSort/randomSort.tsx";
import AddBlock from "./components/sortComponents/addBlock/addBlock.tsx";
import SortTime from "./components/sortComponents/sortTime/sortTime.tsx";

function App() {
    const [rand] = useState(parseInt(String(Math.random() * (10 - 1) + 1)))
    const [arrayBlock, setArrayBlock] = useState(Array.from({length: rand}, (item, index) => {
        const i = item
        console.log(i)
        const randomTime = parseInt(String(Math.random() * (25 - 3) + 3))
        return {id: index, startTime: randomTime, time: randomTime, color: hexGenerator()}
    }));
    const [typeSort, setTypeSort] = useState<number>(0)

    return (
        <div>
            <div className={style.function}>
                <h1 className={style.title}>Тестовое задание</h1>

                <div className={style.positionFun}>
                    <RandomSort arrayBlock={arrayBlock} setArrayBlock={setArrayBlock} />
                    <AddBlock setArrayBlock={setArrayBlock} />
                    <SortTime arrayBlock={arrayBlock} setArrayBlock={setArrayBlock} typeSort={typeSort} setTypeSort={setTypeSort}/>
                </div>
            </div>


            <SpaceBlock arrayBlock={arrayBlock} setArrayBlock={setArrayBlock} typeSort={typeSort}/>
        </div>
    )
}

export default App
