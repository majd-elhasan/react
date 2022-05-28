import React from "react";
import {useState,useEffect} from "react";
import Form from "./form";
import List from "./list";

function Contacts() {
    const [contacts, setContacts] = useState([])

    var start = true;
    useEffect(()=>{
        if((!contacts.length && start) || contacts.length){
            console.log(contacts);
            start = false;
        }
    },[contacts])

    return(
        <>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts} />
        
        </>
    )
}

export default Contacts;

