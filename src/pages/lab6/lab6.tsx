import React, { useState } from 'react';
import {Col, Form, Row, Button} from "react-bootstrap";

const convert = (num: string): string | string[] => {
    let originalNum: string = (num[0] === '+' || num[0] === '-') ? num.slice(1) : num;

    if (originalNum.length > 7) {
        return 'Ваше число выходит за пределы 8-ми бит!';
    }

    let straightCode: string = '';
    if (num[0] === '-') {
        straightCode += '1';
    } else {
        straightCode += '0';
    }

    for (let i = 0; i < (7 - originalNum.length); i++) {
        straightCode += '0';
    }

    straightCode += originalNum;

    let reverseCode: string = '',
        addCode: string = '';

    if (num[0] === '-') {
        reverseCode = straightCode[0] + straightCode
            .slice(1)
            .split('')
            .map((symbol: string) => symbol === '1' ? '0' : '1')
            .join('');

        addCode = reverseCode;
        for (let i = addCode.length - 1; i >= 0; i--) {
            if (addCode[i] === '0') {
                addCode = addCode.slice(0, i) + '1' + addCode.slice(i + 1);
                break;
            } else {
                addCode = addCode.slice(0, i) + '0' + addCode.slice(i + 1);
            }
        }
    } else {
        reverseCode = addCode = straightCode;
    }

    return [straightCode, reverseCode, addCode];
};

const Lab6 = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [result, setResult] = useState<string>('Введите число');
    const [output, setOutput] = useState<string[]>(['', '', '']);
    const [resultClass, setResultClass] = useState<string>('sum');

    const handleButtonClick = () => {
        if (inputValue === '') {
            setResult('Вы еще не ввели число');
            setResultClass('sum');
            setOutput(['', '', '']);
            return;
        }

        let allowed: string = '+-01';
        let ind: number = 0;

        for (let symbol of inputValue) {
            if (!allowed.includes(symbol)) {
                setResult('Некорректно введено входное число!');
                setResultClass('sum wrong');
                setOutput(['', '', '']);
                return;
            }

            if (ind === 0) {
                allowed = '01';
                ind++;
            }
        }

        const res: string | string[] = convert(inputValue);

        if (typeof res === 'string') {
            setResult(res);
            setResultClass('sum wrong');
            setOutput(['', '', '']);
            return;
        }

        setOutput(res);
        setResult('Вычисление выполнено!');
        setResultClass('sum done');
    };

    return (
        <div className="container mt-5">
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="inputValue">
                            <Form.Label>Введіть число:</Form.Label>
                            <Form.Control type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                            <Button className={'mt-2'} variant="outline-dark"onClick={handleButtonClick}>Обчислити</Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                    <div >
                        <h1 style={{fontSize:'15px', marginTop:"41px", color:"red"}}>{result}</h1>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <div className="out">
                        <p>Прямий код:</p>
                        <p>{output[0]}</p>
                    </div>
                </Col>
                <Col>
                    <div className="out">
                        <p>Обернений код:</p>
                        <p>{output[1]}</p>
                    </div>
                </Col>
                <Col>
                    <div className="out">
                        <p>Додатковий код:</p>
                        <p>{output[2]}</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Lab6;