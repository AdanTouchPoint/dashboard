import React, {useState} from 'react'
import Table from "react-bootstrap/cjs/Table";
import Button from "react-bootstrap/cjs/Button"
import Box from "@material-ui/core/Box";

function Rows({id, text, campaign,showChanges,setShowChanges,setShowForm}) {
    console.log()
const click = e => {
        e.preventDefault()
        setShowChanges(true)
     setShowForm(false)

}
    return (
        <div style={{display:"flex"}}>
            <td>

                    {id}
            </td>
            <td>

                    {campaign}

            </td>
            <tr>

                    {text}

            </tr>
            <td>
                <Button onClick={click}>update</Button>
                <Button href={"/"}>delete</Button>
            </td>
        </div>
    );
}

export default Rows;
