import React, {useEffect, useState} from "react";
import Table from "react-bootstrap/cjs/Table";
import Button from "react-bootstrap/cjs/Button"
import axios from "axios";
import Form from "../components/Form"
import InputGroup from "react-bootstrap/cjs/InputGroup"

function Management({showChanges}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log()
    const [items, setItems] = useState([])
    const [itemId, setItemId] = useState()
    const update = async e => {
        e.preventDefault()


    }
    const select = e => {
        e.preventDefault()
        setItemId(e.target.value)
    }
    const click = async e => {
        e.preventDefault()
        const dataTweet = await axios.get('http://localhost:8080/tweet')
        const payload = dataTweet.data.data.tweet
        await setItems(payload)
    }
    useEffect(() => {
        console.log(itemId)
    }, [itemId])
    return (
        <div hidden={showChanges}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>id</th>
                    <th>campaign</th>
                    <th>text</th>
                    <th>select</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.length > 0 &&
                    items.map((item, index) => (

                            <tr key={item.id}>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.campaign}
                                </td>
                                <td>
                                    {item.text}
                                </td>
                                <td>
                                    <InputGroup.Radio
                                        onClick={select}
                                        value={item.id}
                                    />
                                </td>
                            </tr>
                        )
                    )
                }

                </tbody>

            </Table>
            <Button onClick={click}>Search</Button>
            <Button onClick={handleShow}>update</Button>
            <Button href={"/"}>delete</Button>
            <Form
                itemId={itemId}
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
            />


        </div>
    );
}

export default Management;

//
// async function payload() {
//     await axios.patch(`http://localhost:8080/tweet/${item.id}`)
// }