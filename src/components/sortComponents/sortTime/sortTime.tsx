import {Dispatch, SetStateAction, useState} from 'react';
import Data from "../../spaceBlock/Interface/blockType.ts";

interface MessageProps {
    setArrayBlock: Dispatch<SetStateAction<Array<Data>>>;
}
const SortTime = ({setArrayBlock}: MessageProps) => {
    const [typeSort, setTypeSort] = useState<number>(0)

    const switchSort = () => {
        switch (typeSort) {
            case 0:

                break
            case 1:
                setArrayBlock(oldArray => oldArray.filter(item => {

                }))
                break
            case 2:

                break
        }
    }

    return (
        <div>
            <button>sort</button>
        </div>
    );
};

export default SortTime;