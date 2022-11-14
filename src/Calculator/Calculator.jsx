import React, { useState, useEffec } from 'react';
import CalculatorStyle from './Calculatorstyle';
import Input from './Input/Input';
import Show from './Show.jsx/Show';
 

const Calculator = () => {
    let [show,setshow] = useState([])
    
           let getdata = (value)=>{
      setshow(value)
        }

        console.log(show)

    return (
        <CalculatorStyle>
            <h1>Calculator</h1>
          <Show show={show}/>
          <Input getdata={getdata} />
           
          </CalculatorStyle>
    );
}

export default Calculator;
