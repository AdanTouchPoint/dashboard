import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Box from "@material-ui/core/Box";
import Button from "react-bootstrap/cjs/Button"
import axios from "axios";
import Modal from "react-bootstrap/cjs/Modal";
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function Form({show, handleClose,handleShow, itemId}) {
    const classes = useStyles();
    const [data, setData] = useState()

    const handleChange = e => {
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log(data)
    }

    const click = async e => {
        e.preventDefault();
        //peticion patch a bd
        const payload = await axios.patch(`http://localhost:8080/tweet/${itemId}`, {data})
        //confirmar respuesta exitosa

    }

    return (

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
            <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Box>
                <form className={classes.root}  >
                    <TextField
                        name={"campaign"}
                        id="campaign"
                        label="campaign"
                        type="text"
                        onChange={handleChange}
                    />
                    <TextField
                        name={"text"}
                        id="txt"
                        label="Text"
                        type="text"
                        onChange={handleChange}
                    />
                </form>
              </Box>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button
                onClick={click}
                variant="primary">Update</Button>
        </Modal.Footer>
    </Modal>

    );
}

