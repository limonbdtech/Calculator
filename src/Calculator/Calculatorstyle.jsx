import styled from "styled-components";

const CalculatorStyle  = styled.div`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: rgba(20, 3, 3, 0.858);
text-align:  center;
display: flex;
flex-direction: column;
width: 40%;
padding: 20px;
border-radius:10px;

@media (max-width: 800px) {
    width: 95%;
    padding: 10px 10px;
    transform: translate(-50%, -60%);
    }

`


export default CalculatorStyle