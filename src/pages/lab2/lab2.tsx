import React, {FC, useState} from 'react';
import {Button, Form} from "react-bootstrap";

const Lab2:FC = () => {

    const [number, setNumber] = useState('')
    const [bool10, setBool10] = useState('')
    const [bool2, setBool2] = useState('')

    const count = function (num:number|any) {
        setBool10(num);

        let num2 = "", bit = 1;

        while( num >= bit ) {

            num2 = (!(num && bit) ? 0 : 1) + num2;


            bit <<= 1;


        }

        return setBool2(num2 || "0");

    }

    return (
        <div className={"m-2"}>
            <h3 className={"m-3"}> Лабраторна робота №2</h3>
            <h4> Перевод с десятичной в двоичную </h4>
            <Form>
                <Form.Control value={number} onChange={e=> setNumber(e.target.value)} className={"mt-1 mb-2 w-25"}  type="number" placeholder="Десятичное число" />
            </Form>

            <Button onClick={()=> count(number)} className={"mb-3 w-25"}  variant={"outline-dark"}> Проверить</Button>
            <p>Десятичное число: {bool10} <br/> Двоичное число: {bool2}</p>
        </div>
    );
};

export default Lab2;