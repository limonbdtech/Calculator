import React, { useState } from 'react';

import InputStyle from './InputStyle';
const Input = ({getdata}) => {
    let [data,setdata] = useState("")
    let onhandle = (e)=>{
     
        setdata(data.concat(e.target.name))
      
    }
      let sum = 0
    let onSolve = ()=>{
      try{

          setdata(eval(data).toString())
      }catch(err){
        setdata("Error")
      }

    }
   let onClear =()=>{
    setdata('')
   }

   let backspace = ()=>{
       setdata(data.slice(0,-1))
   }

    getdata(data)


    
  
    console.log(data)
    
    return (
        <InputStyle>
        <button id="ac" onClick={onClear} > AC</button>
        <button id="ce" onClick={backspace} >CE</button >
        <button name="**" onClick={onhandle}>^</button >
        <button name="/" onClick={onhandle}>/</button >
        <button name='7' onClick={onhandle}>7</button >
        <button name="8 "onClick={onhandle}>8</button >
        <button name="9"onClick={onhandle}>9</button >
        <button  name="*" onClick={onhandle}>x</button >
        <button  name="4" onClick={onhandle}>4</button >
        <button  name="5" onClick={onhandle}>5</button >
        <button  name="6" onClick={onhandle}>6</button >
    
        <button name="-" onClick={onhandle} >-</button >
        <button name="1" onClick={onhandle}>1</button >
        <button name="2" onClick={onhandle}>2</button >
        <button name="3" onClick={onhandle}>3</button >
        <button name="+" onClick={onhandle} className='sum'>+</button >
        <button name="0" onClick={onhandle}>0</button >
        <button name="." onClick={onhandle}>.</button >
        <button id="=" onClick={onSolve}>=</button >
     
    </InputStyle>
    );
}

export default Input;
