import axios from "axios";

import { url } from "./Config";

const todoslosautos = async () =>{
    const res = await axios.get(url+"/Car/findAll")
    console.log(res)
    return res.data
}

const autoAdd = async(auto) =>{
    const res = await axios.post(url + "/Car",auto)
   /*  console.log(res); */
    return res.data
}



export{ todoslosautos, autoAdd}