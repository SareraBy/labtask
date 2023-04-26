import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

const Lab10: React.FC = () => {
    // состояния для двух двоичных чисел и результата их умножения
    const [binaryNum1, setBinaryNum1] = useState("");
    const [binaryNum2, setBinaryNum2] = useState("");
    const [result, setResult] = useState("");

    // функция умножения двух двоичных чисел
    const divideBinary = (a: string, b: string): string => {
        const lenA = a.length;
        const lenB = b.length;
        const dividend = parseInt(a, 2);
        const divisor = parseInt(b, 2);
        let quotient = Math.floor(dividend / divisor).toString(2);
        let remainder = (dividend % divisor).toString(2);
        if (quotient === "0") {
            remainder = dividend.toString(2);
        }
        let result = quotient + "." + remainder;
        if (remainder === "0") {
            result = quotient;
        }
        return result;
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult(divideBinary(binaryNum1, binaryNum2));
    };

    return (
        <div>
            <h1>Деление двоичных чисел</h1>
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
                <Button className={'p-1 m m-2'} variant="outline-dark" type="submit">
                    /
                </Button>
            </Form>
            <br />
            <h3>Результат:</h3>
            <p>{parseFloat(result).toFixed(10)}</p>
        </div>
    );
};

export default Lab10;