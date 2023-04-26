import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

interface BinaryCalculatorProps {}

const Lab8: React.FC<BinaryCalculatorProps> = () => {
    const [decimalNum1, setDecimalNum1] = useState("");
    const [decimalNum2, setDecimalNum2] = useState("");
    const [operation, setOperation] = useState("+");
    const [result, setResult] = useState("");

    const decimalToTwosComplement = (decimal: number, bits: number): string => {
        const sign = decimal < 0 ? 1 : 0;
        let positiveDecimal = Math.abs(decimal);
        let binary = "";
        while (positiveDecimal > 0) {
            binary = (positiveDecimal % 2) + binary;
            positiveDecimal = Math.floor(positiveDecimal / 2);
        }
        binary = binary.padStart(bits - 1, "0");
        binary = sign === 1 ? invertBinary(binary) : binary;
        binary = addBinary(binary, "1").slice(-bits);
        return binary;
    };

    const invertBinary = (binary: string): string => {
        return binary
            .split("")
            .map((bit) => (bit === "0" ? "1" : "0"))
            .join("");
    };

    const addBinary = (a: string, b: string): string => {
        let carry = 0;
        let result = "";
        for (let i = a.length - 1; i >= 0; i--) {
            let temp = carry;
            temp += a[i] === "1" ? 1 : 0;
            temp += b[i] === "1" ? 1 : 0;
            result = (temp % 2 === 1 ? "1" : "0") + result;
            carry = temp > 1 ? 1 : 0;
        }

        if (carry !== 0) {
            result = "1" + result;
        }

        return result;
    };

    const subtractBinary = (a: string, b: string): string => {
        b = invertBinary(b);
        b = addBinary(b, "1");
        return addBinary(a, b);
    };

    const handleOperationChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setOperation(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const num1 = decimalToTwosComplement(Number(decimalNum1), 8);
        const num2 = decimalToTwosComplement(Number(decimalNum2), 8);
        let result: string;
        if (operation === "+") {
            result = addBinary(num1, num2);
        } else if (operation === "-") {
            result = subtractBinary(num1, num2);
        } else {
            console.error("Invalid operation");
            return;
        }
        setResult(result);
    };
    return (
        <Row>
            <Col>
                <Form onSubmit={handleSubmit} className={"mt-1 p-1 m-lg-1"}>
                    <Form.Group controlId="decimalNum1">
                        <Form.Label>Перше число</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter decimal number"
                            value={decimalNum1}
                            onChange={(event) => setDecimalNum1(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="decimalNum2">
                        <Form.Label>Друге число</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter decimal number"
                            value={decimalNum2}
                            onChange={(event) => setDecimalNum2(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className={'p-1 mt-2'} controlId="operation">
                        <Form.Check
                            type="radio"
                            label="+"
                            name="operation"
                            value="+"
                            checked={operation === "+"}
                            onChange={handleOperationChange}
                        />
                        <Form.Check
                            type="radio"
                            label="-"
                            name="operation"
                            value="-"
                            checked={operation === "-"}
                            onChange={handleOperationChange}
                        />
                    </Form.Group>

                    <Button className={'p-1 mt-2'} variant="outline-dark" type="submit">
                        Перевести
                    </Button>
                    <Form.Group controlId="result">
                        <Form.Label>Результат:</Form.Label>
                        <Form.Control type="text" value={result} readOnly />
                    </Form.Group>

                </Form>
            </Col>
        </Row>

    );
}
export default Lab8;