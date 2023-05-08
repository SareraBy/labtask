import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Math: React.FC = () => {
    const [input, setInput] = useState<string>(''); // Вхідна строка для обчислень
    const [result, setResult] = useState<string>(''); // Результат обчислень
    const [base, setBase] = useState<number>(10); // Система числення для перекладу

    // Функція для додавання символів до вхідної строки
    const addToInput = (value: string): void => {
        setInput(input + value);
    };

    // Функція для виконання обчислень і встановлення результату
    const calculateResult = (): void => {
        try {
            const decimalResult = eval(input); // Обчислення в десятковій системі числення
            const convertedResult = decimalResult.toString(base); // Переклад результату в задану систему числення
            setResult(convertedResult);
        } catch (error) {
            setResult('Error');
        }
    };

    // Функція для очищення вхідної строки і результату
    const clearInput = (): void => {
        setInput('');
        setResult('');
    };

    // Функція для зміни системи числення
    const changeBase = (newBase: number): void => {
        setBase(newBase);
        setResult('');
    };


    return (
        <Container className="my-4">
            <h1>Калькулятор</h1>
            <input type="text" className="form-control mb-4" value={input} onChange={(e) => setInput(e.target.value)} />
            <Row>
                <Col>
                    <Button style={{width: "35px", height:"35px"}} className={"m-2"} variant="outline-dark"  onClick={() => addToInput('1')}>
                        1
                    </Button>
                    <Button style={{width: "35px", height:"35px"}}  className={"m-2"} variant="outline-dark"  onClick={() => addToInput('2')}>
                        2
                    </Button>
                    <Button style={{width: "35px", height:"35px"}}  className={"m-2"} variant="outline-dark"  onClick={() => addToInput('3')}>
                        3
                    </Button>
                    <Button style={{width: "35px", height:"35px"}}  className={"m-2"} variant="outline-dark"   onClick={() => addToInput('+')}>
                        +
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button style={{width: "35px", height:"35px"}}  className={"m-2"} variant="outline-dark"   onClick={() => addToInput('4')}>
                        4
                    </Button>
                    <Button style={{width: "35px", height:"35px"}}  className={"m-2"} variant="outline-dark"  onClick={() => addToInput('5')}>
                        5
                    </Button>
                    <Button style={{width: "35px", height:"35px"}}  className={"m-2"} variant="outline-dark"  onClick={() => addToInput('6')}>
                        6
                    </Button>
                    <Button style={{width: "35px", height:"35px"}}  className={"m-2"} variant="outline-dark"   onClick={() => addToInput('-')}>
                        -
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button style={{width: "35px", height:"35px"}}  className={"m-2"} variant="outline-dark"   onClick={() => addToInput('7')}>
                        7
                    </Button>
                    <Button style={{width: "35px", height:"35px"}}  className={"m-2"} variant="outline-dark"   onClick={() => addToInput('8')}>
                        8
                    </Button>
                    <Button style={{width: "35px", height:"35px"}}  className={"m-2"} variant="outline-dark"  onClick={() => addToInput('9')}>
                        9
                    </Button>
                    <Button style={{width: "35px", height:"35px"}}  className={"m-2"} variant="outline-dark"   onClick={() => addToInput('*')}>
                        *
                    </Button>

                </Col>
            </Row>
            <Row>
                <Col>
                    <Button style={{width: "35px", height:"35px"}}  className={"m-2"} variant="outline-dark"   onClick={() => addToInput('0')}>
                        0
                    </Button>
                    <Button style={{width: "35px", height:"35px"}}  className={"m-2"} variant="outline-dark"   onClick={() => addToInput('.')}>
                        .
                    </Button>
                    <Button style={{width: "35px", height:"35px"}}  className={"m-2"} variant="outline-success" onClick={calculateResult}>
                        =
                    </Button>
                    <Button style={{width: "35px", height:"35px"}}  className={"m-2"} variant="outline-dark"   onClick={() => addToInput('/')}>
                        /
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>

                    <Button style={{width: "180px", height:"35px"}}  className={"m-2"} variant="outline-danger" onClick={clearInput}>
                        Clear
                    </Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h4>Система числення:</h4>
                    <Button  variant={base === 2 ? 'dark' : 'light'} onClick={() => changeBase(2)} className="mr-2">
                        2
                    </Button>
                    <Button variant={base === 8 ? 'dark' : 'light'} onClick={() => changeBase(8)} className="mr-2">
                        8
                    </Button>
                    <Button variant={base === 10 ? 'dark' : 'light'} onClick={() => changeBase(10)} className="mr-2">
                        10
                    </Button>
                    <Button variant={base === 16 ? 'dark' : 'light'} onClick={() => changeBase(16)} className="mr-2">
                        16
                    </Button>
                </Col>
            </Row>
    <Row>
        <Col>
            <h4>Результат:</h4>
            <p>{result}</p>
        </Col>
    </Row>
</Container>
);
};

export default Math;
