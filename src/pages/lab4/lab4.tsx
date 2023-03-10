import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Lab4() {
    const [inputNumber, setInputNumber] = useState("");
    const [fromBase, setFromBase] = useState(10);
    const [toBase, setToBase] = useState(10);
    const [outputNumber, setOutputNumber] = useState("");

    const convertNumber = () => {
        // Перевірка введених значень
        if (!inputNumber) {
            alert("Будь ласка, введіть число, яке потрібно переконвертувати.");
            return;
        }
        if (isNaN(parseInt(inputNumber, fromBase))) {
            alert("Введено некоректне число для вибраної системи числення.");
            return;
        }

        // Конвертація числа
        const decimalNumber = parseInt(inputNumber, fromBase);
        const convertedNumber = decimalNumber.toString(toBase).toUpperCase();
        setOutputNumber(convertedNumber);
    };

    return (
        <Container className="py-5">
            <Row>
                <Col md={6}>
                    <h2>Конвертер систем числення</h2>
                    <Form>
                        <Form.Group controlId="inputNumber">
                            <Form.Label>Число для конвертації</Form.Label>
                            <Form.Control
                                type="text"
                                value={inputNumber}
                                onChange={(e) => setInputNumber(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="fromBase">
                            <Form.Label>Система числення вхідного числа</Form.Label>
                            <Form.Control
                                as="select"
                                value={fromBase}
                                onChange={(e) => setFromBase(parseInt(e.target.value))}
                            >
                                <option value="2">Двійкова (2)</option>
                                <option value="8">Вісімкова (8)</option>
                                <option value="10">Десяткова (10)</option>
                                <option value="16">Шістнадцяткова (16)</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="toBase">
                            <Form.Label>Система числення вихідного числа</Form.Label>
                            <Form.Control
                                as="select"
                                value={toBase}
                                onChange={(e) => setToBase(parseInt(e.target.value))}
                            >
                                <option value="2">Двійкова (2)</option>
                                <option value="8">Вісімкова (8)</option>
                                <option value="10">Десяткова (10)</option>
                                <option value="16">Шістнадцяткова (16)</option>
                            </Form.Control>
                        </Form.Group>

                        <Button className={'mt-2'} variant="outline-dark" onClick={convertNumber}>
                            Конвертувати
                        </Button>
                    </Form>
                </Col>
                <Col md={6}>
                    <h2>Результат</h2>
                    {outputNumber ? (
                        <p>
                            Результат: <strong>{outputNumber}</strong>
                        </p>
                    ) : (
                        <p>Будь ласка, введіть та конвертуйте число.</p>
                    )}
                </Col>
            </Row>
        </Container>
        );
    };
    export default Lab4;