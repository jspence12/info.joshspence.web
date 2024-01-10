const fieldIds = {
  name: "contact-name",
  email: "contact-email",
  message: "contact-message",
};

export default function ContactForm() {
  return (
    <form className="grid grid-cols-2 gap-2 m-2">
      <div className="max-sm:col-span-2 col-span-1">
        <label className="block" htmlFor={fieldIds.name}>
          Name
        </label>
        <input
          className="w-full"
          id={fieldIds.name}
          name="name"
          type="text"
          autoComplete="name"
          required
        />
      </div>
      <div className="max-sm:col-span-2 col-span-1">
        <label className="block" htmlFor={fieldIds.email}>
          Email
        </label>
        <input
          className="w-full"
          id={fieldIds.email}
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="col-span-2">
        <label className="block" htmlFor={fieldIds.message}>
          Message
        </label>
        <textarea
          className="w-full"
          id={fieldIds.message}
          name="message"
          required
        ></textarea>
      </div>
      <button className="col-span-2" type="submit">
        Send
      </button>
    </form>
  );
}
