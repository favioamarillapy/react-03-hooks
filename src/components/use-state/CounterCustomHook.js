import React from 'react'
import { Container, Col, Row, Button } from "react-bootstrap";

import { useCounter } from '../useCounter'

export const CounterCustomHook = () => {


    const { state, reset, increment, decrement } = useCounter();

    return (
        <Container>
            <Row>
                <Col md={12}>

                    <h3> State: {state} </h3>

                    <Button
                        variant="primary"
                        onClick={() => increment(2)}
                    >
                        +1
                    </Button>
                    {' '}
                    <Button
                        variant="primary"
                        onClick={reset}
                    >
                        Reset
                    </Button>
                    {' '}
                    <Button
                        variant="primary"
                        onClick={() => decrement(2)}
                    >
                        -1
                    </Button>

                </Col>
            </Row>
        </Container >
    )
}
