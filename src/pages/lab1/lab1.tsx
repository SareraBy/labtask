import React, {FC, useState} from 'react';
import {Form,Button} from "react-bootstrap";


const Lab1:FC = () => {

    const [text, setText] = useState('')
    const [sim, setSim] = useState('')
    const [bool, setBool] = useState('')

    const checkup = function (str: string) {
        const arrStr = str.split(''); // Преоброзование строки в массив
        for (let symbol of text) { // Цикл перебора по буквам
        if (!arrStr.includes(symbol)){ // Проверка на наличие буквы
            return  setBool('Не совподает'); // Вывод
        }
        }
        return setBool('Совподает'); // Вывод
    };

    return ( // Визуальная часть
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



