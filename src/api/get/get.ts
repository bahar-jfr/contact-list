import axios from "axios";
import { BASEURL } from "../BASEURL";

export async function get() {
  const response = await axios.get(BASEURL);
  return response.data;
}
