import React, { useState } from 'react'
import { Container, Col, Row, Button } from "react-bootstrap";

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 1,
        counter2: 2,
        counter3: 3,
        counter4: 4,
    });
    const { counter1, counter2, counter3, counter4, } = state;

    return (
        <Container>
            <Row>
                <Col md={12}>

                    <h3> Counter 1:{counter1} </h3>
                    <h3> Counter 2:{counter2} </h3>
                    <h3> Counter 3:{counter3} </h3>
                    <h3> Counter 4:{counter4} </h3>

                    <Button
                        variant="primary"
                        onClick={(e) => {
                            e.preventDefault();
                            setState({...state, counter1: counter1 + 1})
                        }}
                    >
                        +1
                    </Button>

                </Col>
            </Row>

        </Container >
    )
}
