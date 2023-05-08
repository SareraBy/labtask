    import React, { useState } from 'react';
    import { Col, Form, Row, Button } from 'react-bootstrap';

    interface BinaryCalculatorProps {}

    const Lab8: React.FC<BinaryCalculatorProps> = () => {
        const [binaryNum1, setBinaryNum1] = useState('');
        const [binaryNum2, setBinaryNum2] = useState('');
        const [operation, setOperation] = useState('+');
        const [result, setResult] = useState('');

        const handleSubmit = (event: React.FormEvent) => {
            event.preventDefault();

            let num1 = parseInt(binaryNum1, 2);
            let num2 = parseInt(binaryNum2, 2);

            // Convert both numbers to their two's complement representation
            if (operation === '-') {
                num2 = (~num2 + 1) & 0b11111111;
            }

            // Perform the addition operation
            let calculatedResult = num1 + num2;

            if (!isNaN(calculatedResult)) {
                let binaryResult = (calculatedResult & 0b11111111).toString(2);
                binaryResult = addLeadingZeros(binaryResult, 8);

                setResult(binaryResult);
            } else {
                setResult('Пожалуйста, выберите операцию');
            }
        };


        // Функция для добавления ведущих нулей в двоичное число
        const addLeadingZeros = (binaryNumber: string, length: number): string => {
            while (binaryNumber.length < length && binaryNumber.length < 8) {
                binaryNumber = '0' + binaryNumber;
            }
            return binaryNumber;
        };

        const convertToAdditionalCode = (num: string): string => {
            let originalNum: string = (num[0] === '+' || num[0] === '-') ? num.slice(1) : num;

            if (originalNum.length > 7) {
                return 'Ваше число выходит за пределы 8-ми бит!';
            }

            let additionalCode: string;

            if (operation === '-') {
                let complement = (~parseInt(originalNum, 2) + 1) & 0b11111111;
                additionalCode = complement.toString(2);
            } else {
                additionalCode = originalNum;
            }

            return additionalCode;
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
                            <div>Дополнительный код: { operation === '-' ? binaryNum1 : binaryNum1 }</div>
                        </Form.Group>

                        <Form.Group controlId="binaryNum2">
                            <Form.Label>Друге число</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter binary number"
                                value={binaryNum2}
                                onChange={(event                            => setBinaryNum2(event.target.value))}
                            />
                            <div>Дополнительный код: { operation === '-' ? convertToAdditionalCode(binaryNum2) : binaryNum2 }</div>
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

    export default Lab8;

