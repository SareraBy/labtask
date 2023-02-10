import React, {FC, useEffect, useState} from 'react';
import {Form, Table,Button} from "react-bootstrap";


const Lab1:FC = () => {

    const [text, setText] = useState('')
    const [sim, setSim] = useState('')
    const [bool, setBool] = useState('')
    const checkup = function (str: string) {
        const arrStr = str.split('');
        console.log(arrStr)
        for (let symbol of text) {
            console.log(symbol)
        if (!arrStr.includes(symbol)){

            return  setBool('Не совподает');
        }

        }
        return setBool('Совподает');
    };

    return (
        <div className={"m-2"}>
            <h3 className={"m-3"}> Лабраторна робота №1</h3>
            <Form>
                <Form.Control value={sim} onChange={e=> setSim(e.target.value)} className={"mb-2 w-25"}  type="text" placeholder="Алфовит" />
                <Form.Control value={text} onChange={e=> setText(e.target.value)} className={"mb-1 w-25"}  type="text" placeholder="Ведите сообщение" />
            </Form>
            <p className={'m-1'}>{bool}</p>
            <Button onClick={()=> checkup(sim)} className={"mb-3 w-25"}  variant={"outline-dark"}> Проверить</Button>


            <div className={"d-flex w-25"}>

            </div>
        </div>
    );
};

export default Lab1;



