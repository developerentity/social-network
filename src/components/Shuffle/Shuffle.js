import React from 'react';
import style from './Shuffle.module.css';
import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';
import Block4 from './Block4';

const blocks = [
    <Block1 />,
    <Block2 />,
    <Block3 />,
    <Block4 />
]

const Shuffle = () => {
    return (
        <div className={style.shuffle}>
            {blocks [0]}
            {blocks [1]}
            {blocks [2]}
            {blocks [3]} 
        </div>
    )
}

export default Shuffle;