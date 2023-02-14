import React, {useState} from 'react';
import ButtonClick from "../components/Button/ButtonC";
import {Button, Row} from "react-bootstrap";

const Math = () => {
    const [value, setValue] = useState<number>()
    // @ts-ignore
    return (
        <div className={"m-5 d-flex align-content-center justify-content-center"}>

        <div style={{width:"300px"}}>


        <Row style={{background: "darkslategray"}} className={"d-flex align-content-center justify-content-center"}>
            <h4 style={{color: "white"}} className={"text-center mt-2"}>Калькулятор</h4>
            <input className={"mb-2 mt-2"} style={{height:'50px', width:"300px"}} value={value} id="GET-name" type="number" name="name"/>

            <ButtonClick onClick={()=>setValue(1)}>1</ButtonClick>
            <ButtonClick onClick={()=>setValue(2)}>2</ButtonClick>
            <ButtonClick onClick={()=>setValue(3)}>3</ButtonClick>
            <ButtonClick onClick={()=>setValue(4)}>4</ButtonClick>
            <ButtonClick onClick={()=>setValue(5)}>5</ButtonClick>
            <ButtonClick onClick={()=>setValue(6)}>6</ButtonClick>
            <ButtonClick onClick={()=>setValue(7)}>7</ButtonClick>
            <ButtonClick onClick={()=>setValue(8)}>8</ButtonClick>
            <ButtonClick onClick={()=>setValue(9)}>9</ButtonClick>
            <ButtonClick onClick={()=>setValue(0)}>0</ButtonClick>

               <div className={"d-flex align-content-center justify-content-center"}>
                     <Button className={"w-50 mt-2 mb-2"} style={{color:"black", background:"white"}} variant={"outline-dark"}> = </Button>
                </div>
          </Row>
        </div>
        </div>
    );
};

export default Math;