import React, {useEffect, useState} from "react";
import Table from "react-bootstrap/cjs/Table";
import Button from "react-bootstrap/cjs/Button"
import axios from "axios";
import Jumbotron     from "react-bootstrap/cjs/Jumbotron";
import Container from "react-bootstrap/cjs/Container";

function Profile()  {

    return (

        <Jumbotron fluid>
            <Container>
                <h1>Stats</h1>
                <p>
                    Conversions:
                </p>
                <p>
                    Campaigns:
                </p>
                <Button>Back</Button>
            </Container>
        </Jumbotron>

    );
}

export default Profile;

//
// async function payload() {
//     await axios.patch(`http://localhost:8080/tweet/${item.id}`)
// }