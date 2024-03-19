import style from './sortTime.module.css'
import {Dispatch, SetStateAction} from 'react';
import Data from "../../spaceBlock/Interface/blockType.ts";

interface MessageProps {
    arrayBlock: Array<Data>;
    setArrayBlock: Dispatch<SetStateAction<Array<Data>>>;
    typeSort: number;
    setTypeSort: Dispatch<SetStateAction<number>>;
}
const SortTime = ({arrayBlock, setArrayBlock, typeSort, setTypeSort}: MessageProps) => {
    const switchSort = () => {
        switch (typeSort) {
            case 0:
                // eslint-disable-next-line no-case-declarations
                const sortedArray = [...arrayBlock].sort((a, b) => a.time - b.time);
                setArrayBlock(sortedArray);
                setTypeSort(1)
                break
            case 1:
                // eslint-disable-next-line no-case-declarations
                const altSortedArray = [...arrayBlock].sort((a, b) => b.time - a.time);
                setArrayBlock(altSortedArray);
                setTypeSort(2)
                break
            case 2:
                setTypeSort(0)
                break
        }
    }

    return (
        <div>
            <button className={style.button} onClick={switchSort}>
                {typeSort === 0 ? (<p>Без сортировки</p>) : null}
                {typeSort === 1 ? (<p>По возрастанию</p>) : null}
                {typeSort === 2 ? (<p>По убыванию</p>) : null}
            </button>
        </div>
    );
};

export default SortTime;