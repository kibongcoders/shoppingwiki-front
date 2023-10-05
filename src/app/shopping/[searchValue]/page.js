import {Card, CardBody, CardHeader, Col, Container, Form, Image, PageItem, Pagination, Row} from "react-bootstrap";
import Header from "@/components/header";
import Link from "next/link";
import Paging from "@/components/pagination";

const container = {}

const row = {
    borderBottom : "0.5px white solid",
    paddingTop   : "10px",
    paddingBottom: "10px"
}

const headerRow = {
    borderBottom : "0.5px white solid",
    paddingTop   : "15px",
    paddingBottom: "15px"
}

const card = {
    backgroundColor: "#2f3542"
}

export default function Home({params}) {

    const searchValue = decodeURI(params.searchValue)

    return (
        <>
            <Header/>
            <Container style={container}>
                <Row style={{width: "100%", alignItems: "flex-start"}}>
                    <Col style={{paddingLeft: 0, marginTop: "20px"}} md={7}>
                        <Card style={card}>
                            <CardHeader style={{width: "100%", borderBottom: "0.5px white solid"}}>
                                <Row style={{paddingTop: "20px", paddingBottom: "30px"}}>
                                    <Col>
                                        <Link href={"/shopping/"+searchValue}><h1>{searchValue}</h1></Link>
                                    </Col>
                                    <Col className={"text-end"}>
                                        <Link href={"/shopping/update/"+searchValue}>편집</Link>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{border: "0.5px white solid", paddingTop: "5px", paddingBottom: "5px"}}>
                                        <Link href={"/category/"+searchValue}>아이폰</Link>
                                    </Col>
                                </Row>
                                <Row style={{paddingTop: "15px", paddingBottom: "15px"}}>
                                    <Col className={"text-end"}>
                                        <p>최근 수정 시각: 2023-10-04 00:30:04</p>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody style={{width: "100%"}}>
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
                            </CardBody>
                        </Card>
                    </Col>
                    <Col style={{marginTop: "20px"}} md={5}>
                        <Card style={card}>
                            <CardHeader style={{width: "100%", borderBottom: "0.5px white solid"}}>
                                <Row>
                                    <Col md={8} className={"text-start"}>
                                        <p>정확도순 날짜순 높은 가격순 낮은 가격순</p>
                                    </Col>
                                    <Col md={4} className={"text-end"}>
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
                            </CardHeader>
                            <CardBody style={{width: "100%", paddingTop: "10px"}}>
                                <Row style={{borderBottom: "0.5px white solid", paddingBottom: "10px"}}>
                                    <Col md={5}>
                                        <Image thumbnail={true}
                                               src="https://shopping-phinf.pstatic.net/main_3456175/34561756621.20220929142551.jpg"/>
                                    </Col>
                                    <Col md={7}>
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
                                    <Col md={5}>
                                        <Image thumbnail={true}
                                               src="https://shopping-phinf.pstatic.net/main_3456175/34561756621.20220929142551.jpg"/>
                                    </Col>
                                    <Col md={7}>
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
                                    <Col md={5}>
                                        <Image thumbnail={true}
                                               src="https://shopping-phinf.pstatic.net/main_3456175/34561756621.20220929142551.jpg"/>
                                    </Col>
                                    <Col md={7}>
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
                                <Paging/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}