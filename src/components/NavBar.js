import React from "react";
import Nav from "react-bootstrap/cjs/Nav";
import axios from 'axios'
function NavBar({setData}) {
    const click = async e => {
        e.preventDefault()
        const dataTweet = await axios.get('http://localhost:8080/tweet/1')
        console.log(dataTweet)
      await  setData(dataTweet)
    }
    return (
        <div className="App">
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link onClick={click}>DontBanCash</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Perfil
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default NavBar;
