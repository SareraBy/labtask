    import React, { useState } from "react";
    import { Col, Form, Row, Button } from "react-bootstrap";

    const Lab9: React.FC = () => {
        // состояния для двух двоичных чисел и результата их умножения
        const [binaryNum1, setBinaryNum1] = useState("");
        const [binaryNum2, setBinaryNum2] = useState("");
        const [result, setResult] = useState("");

        // функция умножения двух двоичных чисел
        const multiplyBinary = (a: string, b: string): string => {
            const lenA = a.length;
            const lenB = b.length;
            const result = new Array(lenA + lenB).fill(0); // массив для результата умножения

            // двойной цикл для умножения каждой цифры первого числа на каждую цифру второго числа
            for (let i = lenA - 1; i >= 0; i--) {
                for (let j = lenB - 1; j >= 0; j--) {
                    const product = parseInt(a[i]) * parseInt(b[j]); // произведение текущих цифр
                    const sum = result[i + j + 1] + product; // сумма произведения и старшей цифры из предыдущего разряда
                    result[i + j] += Math.floor(sum / 2); // запоминаем перенос в старший разряд
                    result[i + j + 1] = sum % 2; // запоминаем остаток от деления на 2 в текущем разряде
                }
            }

            // пропускаем незначащие нули в начале результата
            let i = 0;
            while (i < result.length && result[i] === 0) {
                i++;
            }

            // если результат получился пустым (ноль), возвращаем строку "0"
            if (i === result.length) {
                return "0";
            }

            // преобразуем массив в строку и возвращаем результат умножения
            return result.slice(i).join("");
        };

        // функция-обработчик отправки формы
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault(); // отменяем стандартное поведение браузера

            // умножаем два двоичных числа и сохраняем результат в состояние
            setResult(multiplyBinary(binaryNum1, binaryNum2));
        };

        return (
            <div>
                <h1>Умножение двоичных чисел</h1>
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
                        Умножить
                    </Button>
                </Form>
                <br />
                <h3>Результат:</h3>
                <p>{result}</p>
            </div>
    );
    };

    export default Lab9;