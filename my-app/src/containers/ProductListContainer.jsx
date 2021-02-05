import { Container, Row, Col } from "reactstrap";

import React, { useEffect, useState } from "react";
import ProductCardComponent from "../components/ProductCardComponent";

const axios = require('axios').default;


const ProductListContainer = () => {
    const [userList,setUserList]= useState([]);
    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
            .then(function (response) {
                // handle success
                //console.log(userList);
                setUserList(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }, []);


    const productList = userList.map((ele) => {
        const { id, first_name,last_name,email } = ele;
        return <ProductCardComponent
            key={id}
            id={id}
            first_name={first_name}
            last_name={last_name}
            email={email} />

    });

    return (
        <div>
            <Container>
                <Row>
                    <Col>{productList}/</Col>
                </Row>
            </Container>
        </div>
    );


}

export default ProductListContainer;