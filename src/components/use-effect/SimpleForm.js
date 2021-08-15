import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { useForm } from '../../hooks/useForm'
import { Message } from './Message'

export const SimpleForm = () => {

    const [inputs, inputChange] = useForm({
        email: '',
        password: ''
    });
    const { email, password } = inputs;

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
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password"
                                value={password} onChange={inputChange} />
                        </Form.Group>
                    </Form>
                    <br />
                    {email == 'Favio' && <Message />}




                </Col>
            </Row>
        </Container>
    )
}
