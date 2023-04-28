import React, {useState} from 'react';
import ButtonClick from "../components/Button/ButtonC";
import {Button, Row} from "react-bootstrap";

const Math: React.FC = () => {
    const [value, setValue] = useState<any>(0);
    const [operator, setOperator] = useState<any>("+");
    const [result, setResult] = useState<any>(0);
    const [numberSystem, setNumberSystem] = useState<any>(10);

    const handleNumberClick = (num: number) => {
        setValue(value * numberSystem + num);
    };

    const handleOperatorClick = (op: string) => {
        setOperator(op);
        setResult(value);
        setValue(0);
    };

    const handleEqualClick = () => {
        let res = 0;
        if (operator === "+") {
            res = result + value;
        } else if (operator === "-") {
            res = result - value;
        } else if (operator === "*") {
            res = result * value;
        } else if (operator === "/") {
            res = result / value;
        }
        setResult(res);
        setValue(res);
    };

    const handleSystemChange = (system: number) => {
        setNumberSystem(system);
    };

    const convertToBinary = (num: number) => {
        return num.toString(2);
    };

    const convertToOctal = (num: number) => {
        return num.toString(8);
    };

    const convertToHexadecimal = (num: number) => {
        return num.toString(16).toUpperCase();
    };

    return (
        <div className={"m-5 d-flex align-content-center justify-content-center"}>
            <div style={{width: "500px", background: "darkslategray", borderRadius: '25px'}} className={"d-grid"}>
                <h4 style={{color: "white"}} className={"text-center mt-2"}>Калькулятор</h4>
                <input className={"mb-2"}
                       style={{height: '50px', width: "300px", marginLeft: 'auto', marginRight: 'auto'}} value={value}
                       type="text" name="name"/>
                <Row style={{width: "300px"}} md={3} className={"d-flex align-content-center justify-content-center"}>
                    <ButtonClick onClick={() => setValue(1)}>1</ButtonClick>
                    <ButtonClick onClick={() => setValue(2)}>2</ButtonClick>
                    <ButtonClick onClick={() => setValue(3)}>3</ButtonClick>
                    <ButtonClick onClick={() => setValue("+")}>+</ButtonClick>
                    <ButtonClick onClick={() => setValue(4)}>4</ButtonClick>
                    <ButtonClick onClick={() => setValue(5)}>5</ButtonClick>
                    <ButtonClick onClick={() => setValue(6)}>6</ButtonClick>
                    <ButtonClick onClick={() => setValue("-")}>-</ButtonClick>
                    <ButtonClick onClick={() => setValue(7)}>7</ButtonClick>
                    <ButtonClick onClick={() => setValue(8)}>8</ButtonClick>
                    <ButtonClick onClick={() => setValue(9)}>9</ButtonClick>
                    <ButtonClick onClick={() => setValue("*")}>*</ButtonClick>
                    <ButtonClick onClick={() => setValue(0)}>0</ButtonClick>
                    <ButtonClick onClick={() => setValue("C")}>C</ButtonClick>
                    <ButtonClick onClick={() => setValue("/")}>/</ButtonClick>
                    <ButtonClick onClick={() => console.log(value)}>=</ButtonClick>
                </Row>
                <Row className={"d-flex align-content-center justify-content-center"}>
                    <Button variant="outline-light" className={"m-2"}
                            onClick={() => setValue(parseInt(value as any, 10).toString(2))}>2</Button>
                    <Button variant="outline-light" className={"m-2"}
                            onClick={() => setValue(parseInt(value as any, 10).toString(8))}>8</Button>
                    <Button variant="outline-light" className={"m-2"}
                            onClick={() => setValue(parseInt(value as any, 10).toString(10))}>10</Button>
                    <Button variant="outline-light" className={"m-2"}
                            onClick={() => setValue(parseInt(value as any, 10).toString(16))}>16</Button>
                </Row>
            </div>
        </div>
    );
}

    export default Math;