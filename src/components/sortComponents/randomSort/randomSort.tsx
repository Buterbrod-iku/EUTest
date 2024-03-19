import {Dispatch, SetStateAction} from 'react';
import Data from "../../spaceBlock/Interface/blockType.ts";

interface MessageProps {
    arrayBlock: Array<Data>;
    setArrayBlock: Dispatch<SetStateAction<Array<Data>>>;
}
const RandomSort = ({arrayBlock, setArrayBlock}: MessageProps) => {
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

    return (<button onClick={() => randomSort(arrayBlock)}>Перемешать</button>);
};

export default RandomSort;