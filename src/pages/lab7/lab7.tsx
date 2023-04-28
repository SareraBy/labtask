import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

interface BinaryCalculatorProps {}

const Lab7: React.FC<BinaryCalculatorProps> = () => {
    const [binaryNum1, setBinaryNum1] = useState('');
    const [binaryNum2, setBinaryNum2] = useState('');
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        let num1 = parseInt(binaryNum1, 2);
        let num2 = parseInt(binaryNum2, 2);

        // Вычисление результата на основе выбранной операции
        let calculatedResult;
        if (operation === '+') {
            calculatedResult = num1 + num2;
        } else if (operation === '-') {
            calculatedResult = num1 - num2;
        }

        // Проверка, была ли выбрана операция
        if (calculatedResult !== undefined) {
            // Преобразование результата обратно в двоичное число в дополнительном коде
            let binaryResult = (calculatedResult >>> 0).toString(2);

            // Добавление ведущих нулей, чтобы число было в формате дополнительного кода
            binaryResult = addLeadingZeros(binaryResult, binaryNum1.length);

            // Отображение результата
            setResult(binaryResult);
        } else {
            // Отображение сообщения об ошибке или обработка случая, когда операция не выбрана
            setResult('Пожалуйста, выберите операцию');
        }
    };

// Функция для добавления ведущих нулей в двоичное число
    const addLeadingZeros = (binaryNumber: string, length: number): string => {
        while (binaryNumber.length < length) {
            binaryNumber = '0' + binaryNumber;
        }
        return binaryNumber;
    };

    return (
        <Row>
            <Col>
                <Form onSubmit={handleSubmit} className={'mt-1 p-1 m-lg-1'}>
                    <Form.Group controlId="binaryNum1">
                        <Form.Label>Перше число</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter binary number"
                            value={binaryNum1}
                            onChange={(event) => setBinaryNum1(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="binaryNum2">
                        <Form.Label>Друге число</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter binary number"
                            value={binaryNum2}
                            onChange={(event) => setBinaryNum2(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group  controlId="operation">
                        <Form.Label>Operation</Form.Label>
                        <Form.Control as="select" value={operation} onChange={(event) => setOperation(event.target.value)}>
                            <option value="+">+</option>
                            <option value="-">-</option>
                        </Form.Control>
                    </Form.Group>

                    <Button className={'p-1 mt-2'} variant="outline-dark" type="submit">
                        Calculate
                    </Button>
                </Form>
                <div  className={'mt-1 p-1 m-lg-1'} >Результат: {result}</div>
            </Col>
        </Row>
    );
};

export default Lab7;
