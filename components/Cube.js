import React, { useState } from 'react'
import Box from './box'
let turn = 'X'

const changeturn =()=>{
    turn = turn === "X"?"0": "X"
}

const trigger = (pos,setPos,i) => {
setPos(prev=>{
    prev=turn
    return prev
    
})
       changeturn();
    }
const callCube = (pos,setPos) => {
    const arr = []
    for(let i=0; i<9; i++){
        arr.push(<Box  value={pos[i]} fnc= { ()=> trigger(pos,setPos,i)} />)
    }
    return arr
}
const Cube = () => {
    const [pos, setPos] = useState(['','','','','','','','',''])
  return (
    <div style={{
        display:'flex',
        flexWrap:'wrap',
        width:'66vmin',
        height:'66vmin',
        backgroundColor:'#fff'
    }} 
    >{callCube(pos,setPos).map(elem => {
                return elem;

        })}</div>
  )
}

export default Cube