import axios from "axios";

import { url } from "./Config";

const addUser = async (usuario) => {
    //Esta constante recibe la respuesta de la api
    //url + "/user" 
    //eventuaslmenrte usuario sera igual a = 
/*     {
    "name": "Pamela",
    "lasname": "Nahum",
    "correo": "chamaquito@gmail.com"
    } 
    
    */
    const res = await axios.post(url + "/user", usuario);
    console.log(res);
    return res.data;
}

const getUsers = async (id) => {
    // url + /user/ + id = "http://localhost:8080/user/1"
    const res = await axios.get(url + "/user/" + id);
    console.log(res);
    return res.data;
}

const editUser = async (usuario) => {
    const res = await axios.put(url + "/user", usuario);
    console.log(res);
    return res.data;
}

const deleteUser = async(id) =>{
    const res = await axios.delete(url+"/delete/"+ id);
    console.log(res);
    return res.data;
}

const getAllUsers = async() =>{
    const res = await axios.get(url+"/AllUser")
    console.log(res);
    return res.data;
}   

export { addUser,getUsers,editUser,deleteUser,getAllUsers}