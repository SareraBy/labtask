import React, { useState } from 'react';
import { Col, Form, Row, Button } from "react-bootstrap";

const MathSys: React.FC = () => {
    // состояния для двух двоичных чисел, операции и результата
    const [binaryNum1, setBinaryNum1] = useState("");
    const [binaryNum2, setBinaryNum2] = useState("");
    const [operation, setOperation] = useState("+");
    const [result, setResult] = useState("");

    // функция для выполнения операции
    const performOperation = (): void => {
        let calculatedResult = "";
        switch (operation) {
            case "+":
                calculatedResult = addBinary(binaryNum1, binaryNum2);
                break;
            case "-":
                calculatedResult = subtractBinary(binaryNum1, binaryNum2);
                break;
            case "*":
                calculatedResult = multiplyBinary(binaryNum1, binaryNum2);
                break;
            case "/":
                calculatedResult = divideBinary(binaryNum1, binaryNum2);
                break;
            default:
                return;
        }
        setResult(calculatedResult);
    };

    // функция сложения двоичных чисел
    const addBinary = (a: string, b: string): string => {
        const sum = parseInt(a, 2) + parseInt(b, 2);
        return sum.toString(2);
    };

    // функция вычитания двоичных чисел
    const subtractBinary = (a: string, b: string): string => {
        const difference = parseInt(a, 2) - parseInt(b, 2);
        return difference.toString(2);
    };

    // функция умножения двоичных чисел
    const multiplyBinary = (a: string, b: string): string => {
        const product = parseInt(a, 2) * parseInt(b, 2);
        return product.toString(2);
    };

    // функция деления двоичных чисел
    const divideBinary = (a: string, b: string): string => {
        const quotient = parseInt(a, 2) / parseInt(b, 2);
        return quotient.toString(2);
    };

    // функция-обработчик отправки формы
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // отменяем стандартное поведение браузера
        performOperation();
    };

    return (
        <div>
            <h1>Калькулятор двоичных чисел</h1>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group controlId="binaryNum1">
                            <Form.Label>Первое число:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите двоичное число"
                                value={binaryNum1}
                                onChange={(event) => setBinaryNum1(event.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="binaryNum2">
                            <Form.Label>Второе число:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите двоичное число"
                                value={binaryNum2}
                                onChange={(event) => setBinaryNum2(event.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="operation">
                            <Form.Label>Операция:</Form.Label>
                            <Form.Control
                                as="select"
                                value={operation}
                                onChange={(event) => setOperation(event.target.value)}
                            >
                                <option value="+">+</option>
                                <option value="-">-</option>
                                <option value="*">*</option>
                                <option value="/">/</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Выполнить операцию
                </Button>
            </Form>
            <br />
            <h3>Результат:</h3>
            <p>{result}</p>
        </div>
    );
};

export default MathSys;