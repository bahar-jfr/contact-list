import axios from "axios"
import { BASEURL } from "../BASEURL"

export async function deleteContact(id:number){
    
    const response = await axios.delete(`${BASEURL}/${id}`)
    return response.data
}