'use client'

import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { useRouter } from 'next/navigation'

const center = {
    width         : "100%",
    height        : "100vh",
    display       : "flex",
    justifyContent: "center",
    alignItems    : "center"
}

const card = {
    backgroundColor: "#2f3542",
    width          : "400px",
    height         : "320px",
    borderRadius   : "10px"
}

const divPadding = {
    paddingTop   : "10px",
    paddingLeft  : "20px",
}

export default function Login() {

    const router = useRouter()

    return (
        <div style={center}>
            <Container style={card}>
                <Row>
                    <Col style={divPadding} className={"text-end"}>
                        <Button variant={"secondary"} size={"sm"} onClick={() => {router.back()}}>돌아가기</Button>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Form.Label><p>아이디</p></Form.Label>
                        <Form.Control
                            type={"email"}
                        />
                    </Col>
                </Row>
                <Row style={{marginTop:"20px"}}>
                    <Col>
                        <Form.Label><p>비밀번호</p></Form.Label>
                        <Form.Control
                            type={"password"}
                        />
                    </Col>
                </Row>
                <Row style={{marginTop:"30px"}}>
                    <Col className={"text-end"}>
                        <Button variant={"primary"}>
                            로그인
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}