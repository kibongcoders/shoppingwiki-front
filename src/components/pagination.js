'use client'

import {Pagination} from "react-bootstrap";

const paginationDiv = {
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    width:"100%",
    paddingTop : "20px"
}
export default function Paging() {
    return (
        <div style={paginationDiv}>
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Item>{6}</Pagination.Item>
                <Pagination.Item>{7}</Pagination.Item>
                <Pagination.Item>{8}</Pagination.Item>
                <Pagination.Item>{9}</Pagination.Item>
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </div>
    )
}