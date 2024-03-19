import style from './spaceBlock.module.css'
import ElementBlock from "./elementBlock/elementBlock.tsx";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import Data from "../Interface/blockType.ts";

interface MessageProps {
    arrayBlock: Array<Data>;
    setArrayBlock: Dispatch<SetStateAction<Array<object>>>;
    rand: number;
}
const SpaceBlock = ({arrayBlock, setArrayBlock, rand}: MessageProps) => {
    const [randomIndex, setRandomIndex] = useState(parseInt(String(Math.random() * (rand - 1) + 1)));

    useEffect(() => {
        if (arrayBlock.length > 0){
            const interval = setInterval(() => {
                if (arrayBlock[randomIndex]?.time > 0) {
                    const newArray = [...arrayBlock];
                    newArray[randomIndex].time -= 1;
                    setArrayBlock(newArray);
                } else {
                    clearInterval(interval);
                    const newArray = [...arrayBlock];
                    newArray.splice(randomIndex, 1);
                    setArrayBlock(newArray)
                    setRandomIndex(parseInt(String(Math.random() * (newArray.length - 1 - 1) + 1)))
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [arrayBlock, randomIndex]);

    const updateTimer = (e: MouseEvent, index: number) => {
        e.preventDefault()
        const newArray = [...arrayBlock];
        newArray[index].time = 20;
        setArrayBlock(newArray);
    }

    return (
        <div className={style.main}>
            {
                arrayBlock.map((item, index) => (
                    <ElementBlock key={index} id={index} time={item.time} color={item.color} click={updateTimer}/>
                ))
            }
        </div>
    );
};

export default SpaceBlock;