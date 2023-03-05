import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

    const Lab3 = () => {
        const [number, setNumber] = useState('')
        const [bool10, setBool10] = useState<any>('')
        const [bool2, setBool2] = useState<any>('')

        const count = function (num:number|any) {
            setBool10(num || 0);


            const decimalNumber = parseInt(num, 2);

            return setBool2(decimalNumber || "0"); // Ч  исло или 0
        }

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            const regex = /^[01]*$/; // Регулярное выражение для проверки наличия только '0' и '1'
            console.log(regex.test(value))
            if (regex.test(value)) {
                setNumber(value);
            }
        };
        return (
            <div className={"m-2"}>
                <h3 className={"m-3"}> Лабраторна робота №3</h3>
                <h4> Перевод с двоичное в десяткову </h4>
                <Form>
                    <Form.Control value={number} onChange={handleChange} className={"mt-1 mb-2 w-25"}  type="number" placeholder="Двоичное число" />
                </Form>

                <Button onClick={()=> count(number)} className={"mb-3 w-25"}  variant={"outline-dark"}> Проверить</Button>
                <p>Десятичное число: {bool10} <br/> Двоичное число: {bool2}</p>
            </div>
        );
    };
    export default Lab3;