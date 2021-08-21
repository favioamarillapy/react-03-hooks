import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'


export const FetchCustomHook = () => {

    const { state, increment } = useCounter(1);
    const { data, loading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const { author, quote } = !!data && data[0];

    return (
        <Container>
            <h1 className="mt-4">Fetch Custom Hook</h1>
            <hr />

            {loading &&
                <Row>
                    <Col md={12}>
                        <Spinner animation="border" role="status"> </Spinner>
                    </Col>
                </Row>}

            {!loading && <Row>
                <Col md={6}>
                    <h4>{author}</h4>
                    <p>{quote}</p>
                </Col>
            </Row>
            }


            <Button
                variant="primary"
                onClick={() => increment()}
            >
                Next
            </Button>

        </Container>
    )
}
