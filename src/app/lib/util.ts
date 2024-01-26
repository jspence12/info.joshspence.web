import axios from "axios";
import ContactPayload from "./models/contact-payload";

export async function sleep(milliseconds: number) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export async function sendEmail(payload: ContactPayload) {
  try {
    await axios.post("./Prod/Email", payload);
    return true;
  } catch {
    return false;
  }
}
