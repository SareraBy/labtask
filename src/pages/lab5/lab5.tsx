import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Lab5() {
    const [inputNumber, setInputNumber] = useState("");
    const [fromBase, setFromBase] = useState(10);
    const [toBase, setToBase] = useState(10);
    const [outputNumber, setOutputNumber] = useState("");
    const [precision, setPrecision] = useState(0);


    const convertNumber = () => {
        // Проверка входных параметров
        if (!/^[0-9A-Fa-f,\.]+$/.test(inputNumber)) {
            setOutputNumber("Неверный формат числа");
            return;
        }

        if (fromBase < 2 || fromBase > 16 || toBase < 2 || toBase > 16) {
            setOutputNumber("Неподдерживаемая система счисления");
            return;
        }
        if (precision <= 0) {
            setOutputNumber("Неверная точность");
            return;
        }

        // Заменяем запятые на точки
        const inputNumberWithDot = inputNumber.replace(',', '.');

        // Разбиваем число на целую и дробную части
        let [intPart, fracPart] = inputNumberWithDot.split(".");

        // Конвертируем целую часть
        let intResult = parseInt(intPart, fromBase).toString(toBase);

        // Конвертируем дробную часть
        let fracResult = "";
        if (fracPart) {
            let fracValue = parseInt(fracPart, fromBase) / Math.pow(fromBase, fracPart.length);
            for (let i = 0; i < precision; i++) {
                fracValue *= toBase;
                let digit = Math.floor(fracValue);
                fracResult += digit.toString(toBase);
                fracValue -= digit;
            }
        }

        // Склеиваем результаты
        let result = intResult;
        if (fracResult) {
            result += "." + fracResult;
        }

        setOutputNumber(result);
    }

    return (
        <Container className="py-5">
            <Row>
                <Col md={6}>
                    <h3 className={"m-3"}> Лабраторна робота №5</h3>
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
                        <Form.Group controlId="precision">
                            <Form.Label>Точність конвертації (для дробових чисел)</Form.Label>
                            <Form.Control
                                type="number"
                                value={precision}
                                onChange={(e) => setPrecision(parseInt(e.target.value))}
                                min={0}
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
export default Lab5;