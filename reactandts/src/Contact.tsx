import React, { useState } from "react";
import axios from "axios";

const Contact = () =>  {
    const [data, setData] = useState( {
        name: "",
        email: "",
        number: "",
        messages: "",
    });

    const InputEvent = (event: any) => {
        const { name, value } = event.target;
        setData ((preVal: any) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    };

    const formSubmit = (e:any) => {
        e.preventDefault();
        axios.post('http://localhost:8000/users/add', data).then(res: Response)
        alert (`${data.name}`)
    };
    return(<>
            <h1>Contact Us</h1>
            <form onSubmit={formSubmit}>
            <input type="text" className="myInput" name="name" value={data.name} onChange={InputEvent} placeholder="Enter you Name"></input><br/><br/><br/>
            <input type="text" className="myInput" name="email" value={data.email} onChange={InputEvent} placeholder="Enter you Email"></input> <br/><br/><br/>
            <input type="number" className="myInput" name="number" value={data.number} onChange={InputEvent} placeholder="Enter you Number"></input><br/><br/><br/>
            <input type="text" className="myInput" name="messages" value={data.messages} onChange={InputEvent} placeholder="Enter you Messages"></input><br/><br/><br/>
            <button className = "btn btn-outline-primary" type="submit" >Submit</button>
            </form>
        </>
    )
}

export default Contact;