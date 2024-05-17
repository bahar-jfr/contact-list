import axios from "axios";
import { BASEURL } from "../BASEURL";
import { ContactType } from "../../components/contact-form/ContactForm";

export async function post(data : ContactType):Promise<ContactType>{
const response = await axios.post(BASEURL,data)
return response.data
}