import {useState, useEffect} from "react";

const form_initialValue= {"full_name":"","phone_number":""};
function Form({addContact,contacts}) {
    const [form, setForm] = useState(form_initialValue)

    useEffect(()=>{
        setForm(form_initialValue);
    },[contacts])
    const onChangeForm = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }

    const onsubmitData = (e) => {
        e.preventDefault();

        if(form.full_name === '' || form.phone_number === '')
            return false

        addContact([...contacts,form]);
    }

    return (
    <form onSubmit={onsubmitData}>
        <div>
            <input 
                name="full_name" 
                placeholder="Full Name" 
                value={form.full_name} 
                onChange={onChangeForm}
            />
        </div>
        <div>
            <input 
                name="phone_number" 
                placeholder="Phone Number"
                value={form.phone_number} 
                onChange={onChangeForm}
            />
        </div>
        <div className="btn">
            <button>Add</button>
        </div>
    </form>
    )
}

export default Form;