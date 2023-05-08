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
        let calculatedResult = 0; // Initialize with a default value
        if (operation === '+') {
            calculatedResult = num1 + num2;
        } else if (operation === '-') {
            calculatedResult = num1 - num2;
        }

        if (!isNaN(calculatedResult)) {
            let binaryResult = (calculatedResult >>> 0).toString(2);
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

    const convert = (num: string): string | string[] => {
        let originalNum: string = (num[0] === '+' || num[0] === '-') ? num.slice(1) : num;

        if (originalNum.length > 7) {
            return 'Ваше число выходит за пределы 8-ми бит!';
        }

        let straightCode: string = '';
        if (operation === '-') {
            straightCode += '1';
        } else {
            straightCode += '0';
        }

        for (let i = 0; i < (7 - originalNum.length); i++) {
            straightCode += '0';
        }

        straightCode += originalNum;

        let reverseCode: string = '';
        let addCode: string = '';

        if (operation === '-') {
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
                        <div>Обратний код: { operation === '-' ? (binaryNum1) : binaryNum1 }</div>
                    </Form.Group>

                    <Form.Group controlId="binaryNum2">
                        <Form.Label>Друге число</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter binary number"
                            value={binaryNum2}
                            onChange={(event) => setBinaryNum2(event.target.value)}
                        />
                        <div>Обратний код: {binaryNum2 === '' ? ' ': convert(binaryNum2)[1]}</div>
                    </Form.Group>

                    <Form.Group controlId="operation">
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
                <div className={'mt-1 p-1 m-lg-1'}>Результат: {result}</div>
            </Col>
        </Row>
    );
};

export default Lab7;