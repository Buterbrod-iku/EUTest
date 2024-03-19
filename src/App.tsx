import './App.css'
import SpaceBlock from "./components/spaceBlock/spaceBlock.tsx";
import {useState} from "react";
import hexGenerator from "./utils/hexGenerator.ts";
import RandomSort from "./components/sortComponents/randomSort/randomSort.tsx";
import AddBlock from "./components/sortComponents/addBlock/addBlock.tsx";
import SortTime from "./components/sortComponents/sortTime/sortTime.tsx";

function App() {
    const [rand] = useState(parseInt(String(Math.random() * (10 - 1) + 1)))
    const [arrayBlock, setArrayBlock] = useState(Array.from({length: rand}, (item, index) => {
        const randomTime = parseInt(String(Math.random() * (25 - 3) + 3))
        return {id: index, startTime: randomTime, time: randomTime, color: hexGenerator()}
    }));

    return (
        <div>
            <div>
                <h1>Тестовое задание</h1>

                <RandomSort arrayBlock={arrayBlock} setArrayBlock={setArrayBlock} />

                <AddBlock setArrayBlock={setArrayBlock} />

                <SortTime setArrayBlock={setArrayBlock} />
            </div>


            <SpaceBlock arrayBlock={arrayBlock} setArrayBlock={setArrayBlock}/>
        </div>
    )
}

export default App
