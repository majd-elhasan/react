import React from "react";
import {useState,useEffect} from "react";
import Form from "./form";
import List from "./list";
import './styles.css'

const initialConatcts = [
    {"full_name":"Mecid elhasan","phone_number":"05355517164"},
    {"full_name":"Yemin elhasan","phone_number":"05382972599"},
    {"full_name":"Mahmud ulebi","phone_number":"05314925410"},
    {"full_name":"Haydar","phone_number":"05317368845"}]

function Contacts() {
    const [contacts, setContacts] = useState(initialConatcts)

    var start = true;
    useEffect(()=>{
        if((!contacts.length && start) || contacts.length){
            console.log(contacts);
            start = false;
        }
    },[contacts])

    return(
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts;

