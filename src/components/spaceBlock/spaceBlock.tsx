import style from './spaceBlock.module.css'
import ElementBlock from "./elementBlock/elementBlock.tsx";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import Data from "./Interface/blockType.ts";

interface MessageProps {
    arrayBlock: Array<Data>;
    setArrayBlock: Dispatch<SetStateAction<Array<Data>>>;
}
const SpaceBlock = ({arrayBlock, setArrayBlock}: MessageProps) => {
    const [randomId, setRandomId] = useState<number>(0);

    useEffect(() => {
        if (arrayBlock.length > 0){
            const interval = setInterval(() => {
                const randomIndex = arrayBlock.findIndex(block => block.id === randomId);
                if (randomIndex !== -1 && arrayBlock[randomIndex]?.time > 0) {
                    const newArray = [...arrayBlock];
                    newArray[randomIndex].time -= 1;
                    setArrayBlock(newArray);
                } else {
                    clearInterval(interval);
                    const newArray = [...arrayBlock];
                    newArray.splice(randomIndex, 1);
                    setArrayBlock(newArray);
                    const randomId = newArray[Math.floor(Math.random() * newArray.length)].id;
                    setRandomId(randomId);
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [arrayBlock, randomId]);

    const updateTimer = (e: MouseEvent, index: number) => {
        e.preventDefault()
        const newArray = [...arrayBlock];
        newArray[index].time = newArray[index].startTime;
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