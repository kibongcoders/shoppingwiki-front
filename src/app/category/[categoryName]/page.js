'use client';

import Header from "@/components/header";
import {Col, Container, Row} from "react-bootstrap";
import Link from "next/link";
import styled from "styled-components";

const Head4 = styled.h4`
  color: #ddd;
`;

export default function Category({params}) {

    const categoryName = decodeURI(params.categoryName)

    return (
        <>
            <Header/>
            <Container style={{backgroundColor: "#2f3542"}}>
                <Row style={{width: "100%", alignItems:"flex-start", paddingTop:"20px", paddingBottom:"20px"}}>
                    <Col>
                        <Link href={"/category/"+categoryName}><h1>{categoryName}</h1></Link>
                    </Col>
                </Row>
                <Row style={{width: "100%", paddingTop:"20px", paddingBottom:"10px"}}>
                    <Col>
                        <Head4>상위 카테고리</Head4>
                    </Col>
                </Row>
                <Row style={{width: "100%", paddingTop:"10px", paddingBottom:"10px"}}>
                    <Col>
                        <Link href={"/category/"+"핸드폰"}>핸드폰</Link>
                    </Col>
                </Row>
                <Row style={{width: "100%", paddingTop:"20px", alignItems:"flex-start"}}>
                    <Col style={{alignItems:"flex-start"}}>
                        <Row style={{width: "100%", borderBottom:"0.5px white solid"}}>
                            <Col>
                                <Head4>하위 카테고리</Head4>
                            </Col>
                        </Row>
                        <Row style={{width: "100%", paddingTop:"10px"}}>
                            <Col>
                                <Link href={"/category/"+"헬로우"}>헬로우</Link>
                            </Col>
                        </Row>
                        <Row style={{width: "100%", paddingTop:"10px", paddingBottom:"10px"}}>
                            <Col>
                                <Link href={"/category/"+"헬로우"}>헬로우</Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col style={{alignItems:"flex-start"}}>
                        <Row style={{width: "100%", borderBottom:"0.5px white solid"}}>
                            <Col>
                                <Head4>카테고리 콘텐츠</Head4>
                            </Col>
                        </Row>
                        <Row style={{width: "100%", paddingTop:"10px"}}>
                            <Col>
                                <Link href={"/shopping/"+"헬로우"}>헬로우</Link>
                            </Col>
                        </Row>
                        <Row style={{width: "100%", paddingTop:"10px", paddingBottom:"10px"}}>
                            <Col>
                                <Link href={"/shopping/"+"헬로우"}>헬로우</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}