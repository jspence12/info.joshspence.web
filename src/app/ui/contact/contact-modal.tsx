import { useState } from "react";
import Modal from "../common/modal";
import Button from "../common/button";
import ContactPayload from "@/app/lib/models/contact-payload";

const fieldIds = {
  name: "contact-name",
  email: "contact-email",
  message: "contact-message",
};

export interface ContactModalProps {
  onClose: () => void;
  sendEmail: (payload: ContactPayload) => Promise<boolean>;
  displayAlert: (message: string, success: boolean) => void;
}

// This is an oversimplification but is close enough for practical use
const emailRegex = new RegExp(/.+@.+\..+/);

export default function ContactModal({
  onClose,
  sendEmail,
  displayAlert,
}: ContactModalProps) {
  const [sending, setSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isValid = name && message && email && emailRegex.test(email);

  const onSubmit = async (payload: ContactPayload) => {
    setSending(true);
    const success = await sendEmail(payload);
    if (success) {
      displayAlert("Message sent!", true);
      onClose();
    } else {
      displayAlert("Something went wrong.", false);
      setSending(false);
    }
  };

  return (
    <Modal title="Contact" onClose={onClose}>
      <form className={`grid grid-cols-2 gap-2 ${sending ? "opacity-50" : ""}`}>
        <div className="col-span-2 md:col-span-1">
          <label htmlFor={fieldIds.name}>Name</label>
          <input
            id={fieldIds.name}
            name="name"
            type="text"
            autoComplete="name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            disabled={sending}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label htmlFor={fieldIds.email}>Email</label>
          <input
            id={fieldIds.email}
            name="email"
            type="email"
            autoComplete="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={sending}
          />
        </div>
        <div className="col-span-2">
          <label htmlFor={fieldIds.message}>Message</label>
          <textarea
            id={fieldIds.message}
            name="message"
            maxLength={2000}
            rows={10}
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            disabled={sending}
          />
        </div>
        <div className="col-span-2 flex justify-end">
          <div className="w-full md:w-1/2 flex gap-2">
            <Button text="Cancel" onClick={onClose} disabled={sending} />
            <Button
              text="Send"
              type="submit"
              onClick={() => onSubmit({ name, email, message })}
              disabled={sending || !isValid}
            />
          </div>
        </div>
      </form>
    </Modal>
  );
}
