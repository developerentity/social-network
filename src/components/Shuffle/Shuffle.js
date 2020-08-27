import React, { useState } from 'react';
import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';
import Block4 from './Block4';

const Shuffle = () => {

    const [blocks, setBlocks] = useState([
        <Block1 />,
        <Block2 />,
        <Block3 />,
        <Block4 />
    ])
    
    const shuffle = (blockNumber) => {
        
        const arr = [...blocks]
        const temporary = []
        const permColor = []
        const shuffledArr = []

        for (let i = 0; i < arr.length; i++) {
            if (i === blockNumber) {
              permColor.push(arr[i])
            }
            if (i !== blockNumber) {
              temporary.push(arr[i])
            } 
        }

        temporary.sort(() => Math.random() - 0.5)

        for (let i = 0; i < arr.length; i++) {
            if (i !== blockNumber) {
              shuffledArr[i] = temporary.pop()
            } 
            if (i === blockNumber) {
              shuffledArr[i] = permColor[0]
            }     
        }

        return setBlocks(shuffledArr)
    }

    const revert = () => {
        return setBlocks([
            <Block1 />,
            <Block2 />,
            <Block3 />,
            <Block4 />
        ])
    }

    return (
        <>
            <div onClick={ () => shuffle(0) }>
                {blocks[0]}
            </div>
            <div onClick={ () => shuffle(1) }>
                {blocks[1]}
            </div>
            <div onClick={ () => shuffle(2) }>
                {blocks[2]}
            </div>
            <div onClick={ () => revert() }>
                {blocks[3]}
            </div>  
        </>
    )
}

export default Shuffle;