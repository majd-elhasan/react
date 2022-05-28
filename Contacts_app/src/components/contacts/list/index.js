import {useState} from "react";

function List({contacts}) {
    const [filterText , setfilterText] = useState("");

    const filtered = contacts.filter((item)=>{
        return Object.keys(item).some((key)=>
            item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLowerCase())
        )
    });

    console.log("filtered : ",filtered);

    return(
    <div>
        <input
                placeholder="filter contacts"
                value={filterText}
                onChange ={(e)=>setfilterText(e.target.value)}

            /> 
        <ul>
            {filtered.map((contact,i)=>(
                <li key={i}>{contact.full_name}</li>
            ))}
        </ul>
    </div>
    )
}

export default List;