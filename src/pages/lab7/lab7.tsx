import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

interface BinaryCalculatorProps {}

const Lab7: React.FC<BinaryCalculatorProps> = () => {
    const [binaryNum1, setBinaryNum1] = useState('');
    const [binaryNum2, setBinaryNum2] = useState('');
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState('');

    const reverseBinary = (num: string): string => {
        return num.split('').map((bit) => (bit === '0' ? '1' : '0')).join('');
    };

    const toReverseBinary = (num: string): string => {
        if (num.startsWith('-')) {
            num = num.slice(1).padStart(8, '0');
            num = reverseBinary(num);
        } else {
            num = num.padStart(8, '0');
        }
        return num;
    };

    const reverseBinaryAddition = (a: string, b: string): string => {
        let carry = 0;
        let result = '';
        for (let i = a.length - 1; i >= 0; i--) {
            let temp = carry;
            temp += a[i] === '1' ? 1 : 0;
            temp += b[i] === '1' ? 1 : 0;
            result = (temp % 2 === 1 ? '1' : '0') + result;
            carry = temp > 1 ? 1 : 0;
        }

        if (carry !== 0) {
            result = '1' + result;
        }

        if (result.endsWith('0')) {
            result = result.slice(0, -1) + '1';
        }

        return result;
    };


    const reverseBinarySubtraction = (a: string, b: string): string => {
        let borrow = 0;
        let result = '';
        for (let i = a.length - 1; i >= 0; i--) {
            let temp = borrow;
            temp += a[i] === '1' ? 1 : 0;
            temp -= b[i] === '1' ? 1 : 0;
            if (temp < 0) {
                temp += 2;
                borrow = -1;
            } else {
                borrow = 0;
            }
            result = (temp % 2 === 1 ? '1' : '0') + result;
        }
        if (borrow !== 0) {
            console.error('Invalid operation: result is negative');
            return '';
        }
        // Remove leading zeroes
        while (result.startsWith('0') && result.length > 1) {
            result = result.slice(1);
        }
        return result;
    };

    const handleOperationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOperation(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const num1 = toReverseBinary(binaryNum1);
        const num2 = toReverseBinary(binaryNum2);
        let result: string;
        if (operation === '+') {
            result = reverseBinaryAddition(num1, num2);
        } else if (operation === '-') {
            result = reverseBinarySubtraction(num1, num2);
        } else {
            console.error('Invalid operation');
            return;
        }
        setResult(result);
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