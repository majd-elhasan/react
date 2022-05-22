import axios from "axios";
export default async (id_number)=>{
    const {data : user} = await axios("https://jsonplaceholder.typicode.com/users/" + id_number);
    const {data : post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + id_number);
    const result = {"user":user,"posts":post};
    console.log(result);
} ;