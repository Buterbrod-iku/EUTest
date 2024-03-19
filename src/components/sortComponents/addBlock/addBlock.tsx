import {Dispatch, SetStateAction, useState} from 'react';
import {onChangeHexColor} from "../../../utils/onChangeHexColor.ts";
import Data from "../../spaceBlock/Interface/blockType.ts";

interface MessageProps {
    setArrayBlock: Dispatch<SetStateAction<Array<Data>>>;
}
const AddBlock = ({setArrayBlock}: MessageProps) => {
    const [check, setCheck] = useState(false)
    const [input, setInput] = useState("")

    const addBlock = () => {
        if (input.length === 0){
            alert("Введите hex код цвета")
        } else {
            const randomTime = parseInt(String(Math.random() * (25 - 3) + 3))
            setArrayBlock(oldArray => [...oldArray, {id: oldArray.length, startTime: randomTime, color: "#"+input, time: randomTime}])
        }
    }

    return (
        <div>
            <h2>#</h2>
            <input type="text"
                   value={input}
                   onChange={(e) => onChangeHexColor(e, setInput, setCheck)}/>
            <button onClick={addBlock} disabled={check}>add</button>
        </div>
    );
};

export default AddBlock;