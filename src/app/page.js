import {Col, Container, Form, Image, Row} from "react-bootstrap";
import Header from "@/components/header";

const container = {
    backgroundColor: "#2f3542",
}

const row = {
    borderBottom : "0.5px white solid",
    paddingTop   : "10px",
    paddingBottom: "10px"
}

export default function Home() {
    return (
        <>
            <Header/>
            <Container style={container}>
                <Row style={{paddingTop: "10px"}}>
                    <Col>
                        <h1>아이폰</h1>
                    </Col>
                </Row>
                <Row style={row}>
                    <Col className={"text-end"}>
                        <p>최근 수정 시각: 2023-10-04 00:30:04</p>
                    </Col>
                </Row>
                <Row style={row}>
                    <Col className={"text-start"}>
                        <p>아이폰 좋아요</p>
                        <p>아이폰 좋아요</p>
                        <p>아이폰 좋아요</p>
                        <p>아이폰 좋아요</p>
                        <p>아이폰 좋아요</p>
                        <p>아이폰 좋아요</p>
                    </Col>
                </Row>
                <Row style={row}>
                    <Col md={10} className={"text-end"}>
                        <p>정확도순 날짜순 높은 가격순 낮은 가격순</p>
                    </Col>
                    <Col md={2} className={"text-end"}>
                        <Form.Select>
                            <option value={10}>
                                10개씩 보기
                            </option>
                            <option value={20}>
                                20개씩 보기
                            </option>
                            <option value={50}>
                                50씩 보기
                            </option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row style={row}>
                    <Col md={2}>
                        <Image thumbnail={true}
                               src="https://shopping-phinf.pstatic.net/main_3456175/34561756621.20220929142551.jpg"/>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <p>
                                <b>아이폰</b> 14 프로 256GB [자급제]
                            </p>
                        </Row>
                        <Row>
                            <p>
                                1461990
                            </p>
                        </Row>
                        <Row>
                            <p>
                                디지털/가전 {">"} 휴대폰 {">"} 자급제폰
                            </p>
                        </Row>
                    </Col>
                </Row>
                <Row style={row}>
                    <Col md={2}>
                        <Image thumbnail={true}
                               src="https://shopping-phinf.pstatic.net/main_3456175/34561756621.20220929142551.jpg"/>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <p>
                                <b>아이폰</b> 14 프로 256GB [자급제]
                            </p>
                        </Row>
                        <Row>
                            <p>
                                1461990
                            </p>
                        </Row>
                        <Row>
                            <p>
                                디지털/가전 {">"} 휴대폰 {">"} 자급제폰
                            </p>
                        </Row>
                    </Col>
                </Row>
                <Row style={row}>
                    <Col md={2}>
                        <Image thumbnail={true}
                               src="https://shopping-phinf.pstatic.net/main_3456175/34561756621.20220929142551.jpg"/>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <p>
                                <b>아이폰</b> 14 프로 256GB [자급제]
                            </p>
                        </Row>
                        <Row>
                            <p>
                                1461990
                            </p>
                        </Row>
                        <Row>
                            <p>
                                디지털/가전 {">"} 휴대폰 {">"} 자급제폰
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}