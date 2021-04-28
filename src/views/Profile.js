import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/cjs/Button"
import axios from "axios";
import Jumbotron     from "react-bootstrap/cjs/Jumbotron";
import Container from "react-bootstrap/cjs/Container";

function Profile()  {

    return (

            <Jumbotron fluid>
                <Container>
                    <h1>Profile</h1>
                    <p>
                      Name:
                    </p>
                    <p>
                        Company:
                    </p>
                    <p>
                        Email:
                    </p>
                    <p>
                        Phone:
                    </p>
                    <p>
                        Expires in:
                    </p>
                    <Button> Edit</Button>
                    <Button> Back</Button>
                </Container>

            </Jumbotron>

    );
}

export default Profile;

