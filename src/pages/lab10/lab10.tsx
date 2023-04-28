import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

const Lab10: React.FC = () => {
    const [binaryNum1, setBinaryNum1] = useState("");
    const [binaryNum2, setBinaryNum2] = useState("");
    const [result, setResult] = useState("");

    const divideBinary = (a: string, b: string): string => {
        const num1 = a.trim();
        const num2 = b.trim();
        console.log(num1)
        if (num2 === "0") {
            return "Деление на ноль невозможно";
        }

        const num1Length = num1.length;
        const num2Length = num2.length;

        if (num1Length < num2Length) {
            return "0";
        }

        let quotient = "";
        let remainder = num1.substring(0, num2Length);

        for (let i = num2Length; i <= num1Length; i++) {
            if (remainder >= num2) {
                quotient += "1";
                remainder = (parseInt(remainder, 2) - parseInt(num2, 2)).toString(2);
            } else {
                quotient += "0";
            }

            if (i < num1Length) {
                remainder += num1[i];
            }
        }

        if (remainder === "") {
            remainder = "0";
        }

        return quotient + "." + remainder;
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
                <Button className={"p-1 m m-2"} variant="outline-dark" type="submit">
                    /
                </Button>
            </Form>
            <br />
            <h3>Результат:</h3>
            <p>{result}</p>
        </div>
    );
};

export default Lab10;
