'use client';

import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import React , {useState} from "react";
import Link from "next/link";

const header = {
    backgroundColor: "#2f3542",
    width          : "100%",
    maxWidth       : "100%",
    margin         : 0,
    paddingTop     : "10px",
    paddingBottom  : "10px",
    borderBottom   : "0.5px white solid"
}



export default function Header() {

    const [searchValue, setSearchValue] = useState("");

    const onClickSearch = () => {
        if(searchValue == "" || searchValue == null){
            location.href = "/shopping/쇼핑위키";
        }else{
            location.href = "/shopping/"+searchValue;
        }
    }

    const onClickUser = () => {
        location.href = "/user/info"
    }

    const onClickMain = () => {
        location.href = "/shopping/쇼핑위키"
    }

    return (
        <div style={header}>
            <Container>
                <Row>
                    <Col xs={4} md={7}>
                        <h3 onClick={onClickMain} className={"align-items-center"} style={{color:"white", cursor:"pointer"}}><i className="bi bi-cart-fill"></i>쇼핑위키</h3>
                    </Col>
                    <Col xs={5} md={3}>
                        <Form.Control
                            type={"text"}
                            value={searchValue}
                            name={"search"}
                            onChange={(e) => {setSearchValue(e.target.value)}}
                        />

                    </Col>
                    <Col xs={1} md={1}>
                        <Button onClick={() => {onClickSearch()}} variant={"secondary"}>
                            <Image width={25} src={"/search.svg"}/>
                        </Button>
                    </Col>
                    <Col xs={2} md={1}>
                        <Link href="/login">
                            로그인
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
