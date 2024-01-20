import Button from "../common/button";
import Modal from "../common/modal";

const fieldIds = {
  name: "contact-name",
  email: "contact-email",
  message: "contact-message",
};

export interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  return (
    <Modal title="Contact" onClose={onClose}>
      <form className="grid grid-cols-2 gap-2">
        <div className="col-span-2 md:col-span-1">
          <label className="block ms-2 font-bold" htmlFor={fieldIds.name}>
            Name
          </label>
          <input
            id={fieldIds.name}
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="ms-2 font-bold" htmlFor={fieldIds.email}>
            Email
          </label>
          <input
            id={fieldIds.email}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="col-span-2">
          <label className="ms-2 font-bold" htmlFor={fieldIds.message}>
            Message
          </label>
          <textarea
            id={fieldIds.message}
            name="message"
            maxLength={2000}
            rows={10}
            required
          />
        </div>
        <div className="col-span-2 flex justify-end">
          <div className="w-full md:w-1/2 flex gap-2">
            <Button text="Cancel" onClick={onClose} />
            <Button text="Send" />
          </div>
        </div>
      </form>
    </Modal>
  );
}
