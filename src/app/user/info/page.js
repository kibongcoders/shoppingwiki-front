'use client';

import styled from "styled-components";

const Head3 = styled.h3`
  color: #ddd;
`;

const Head1 = styled.h1`
  color: #ddd;
`;

import Header from "@/components/header";
import {Button, Card, CardBody, CardHeader, Col, Container, Form, Row} from "react-bootstrap";

const card = {
    backgroundColor: "#2f3542",
    marginTop : "30px"
}

const rowPadding = {
    marginTop : "30px"
}



export default function Page() {

    const goToList = () => {
        history.back();
    }

    return (
        <>
            <Header/>
            <Container>
                <Card style={card}>
                    <CardHeader style={{width: "100%", borderBottomColor:"white"}}>
                        <Head1>유저 정보</Head1>
                    </CardHeader>
                    <CardBody style={{width: "100%"}}>
                        <Row>
                            <Col md={3}>
                                <Head3>이메일</Head3>
                            </Col>
                            <Col md={9}>
                                <p>test@test.com</p>
                            </Col>
                        </Row>
                        <Row style={rowPadding}>
                            <Col md={3}>
                                <Head3>비밀번호</Head3>
                            </Col>
                            <Col md={9}>
                                <Form.Control
                                    type={"password"}
                                    value={"123dsadsadsa"}
                                />
                            </Col>
                        </Row>
                        <Row style={rowPadding}>
                            <Col md={3}>
                                <Head3>비밀번호 확인</Head3>
                            </Col>
                            <Col md={9}>
                                <Form.Control
                                    type={"password"}
                                    value={"1232131sdsa"}
                                />
                            </Col>
                        </Row>
                        <Row style={rowPadding}>
                            <Col md={3}>
                                <Head3>닉네임</Head3>
                            </Col>
                            <Col md={9}>
                                <Form.Control
                                    type={"text"}
                                    value={"닉네임"}
                                />
                            </Col>
                        </Row>
                        <Row style={rowPadding}>
                            <Col md={3}>
                                <Head3>등록일</Head3>
                            </Col>
                            <Col md={9}>
                                <p>2023.01.05</p>
                            </Col>
                        </Row>
                        <Row style={rowPadding}>
                            <Col className={"text-end"}>
                                <Button onClick={() => {console.log("hello")}} style={{marginRight:"20px"}} variant={"success"}>
                                    수정
                                </Button>
                                <Button onClick={goToList} variant={"secondary"}>
                                    목록
                                </Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}