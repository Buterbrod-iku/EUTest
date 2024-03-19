import style from './elementBlock.module.css'

const ElementBlock = ({...props}) => {
    return (
        <div onClick={e => props.click(e, props.id)} className={style.main} style={{backgroundColor: props.color}}>
            <h2>{props.time}</h2>
        </div>
    );
};

export default ElementBlock;