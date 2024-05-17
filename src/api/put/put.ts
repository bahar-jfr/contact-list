import axios from "axios";
import { BASEURL } from "../BASEURL";
import { ContactType } from "../../components/contact-form/ContactForm";

export async function putContact(updateContact:ContactType){
    const response = await axios.put(`${BASEURL}/${updateContact.id}`,updateContact);
    return response.data;
}