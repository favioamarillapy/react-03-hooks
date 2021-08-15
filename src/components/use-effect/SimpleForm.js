import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { Message } from './Message'

export const SimpleForm = () => {

    const [state, setState] = useState({
        email: '',
        password: ''
    });
    const { email, password } = state;

    const [login, setLogin] = useState(false);

    const inputChange = ({ target }) => {
        setState({
            ...state,
            [target.name]: target.value
        })
    }

    useEffect(() => {
        setLogin(email === 'favio');
    }, [email])


    return (
        <Container>
            <h1 className="mt-4">Simple Form</h1>
            <hr />
            <Row>
                <Col md={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" name="email"
                                value={email} onChange={inputChange} />
                        </Form.Group>
                    </Form>
                    <br />
                    {login && <Message />}




                </Col>
            </Row>
        </Container>
    )
}
