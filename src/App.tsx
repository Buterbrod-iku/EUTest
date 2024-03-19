import './App.css'
import SpaceBlock from "./components/spaceBlock/spaceBlock.tsx";
import {useState} from "react";
import hexGenerator from "./utils/hexGenerator.ts";
import Data from "./components/Interface/blockType.ts";

function App() {
    const [rand] = useState(parseInt(String(Math.random() * (5 - 1) + 1)))
    const [arrayBlock, setArrayBlock] = useState(Array.from({length: rand}, (item, index) => {return {id: index, time: 20, color: hexGenerator()}}));

    const randomSort = (array: Array<Data>) => {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        setArrayBlock(array)
    }

    return (
        <div>
            <div>
                <h1>Тестовое задание</h1>

                <button onClick={() => randomSort(arrayBlock)}>Перемешать</button>

                <div>
                    <input type="text" />
                    <button>add</button>
                </div>

                <button>sort</button>
            </div>


            <SpaceBlock arrayBlock={arrayBlock} setArrayBlock={setArrayBlock} rand={rand}/>
        </div>
    )
}

export default App
