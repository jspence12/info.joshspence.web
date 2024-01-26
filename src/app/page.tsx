"use client";
import WorkHistory from "./ui/work-history/work-history";
import React, { useEffect, useRef, useState } from "react";
import Hero from "./ui/hero/hero";
import { workExperience } from "./lib/data/experience";
import About from "./ui/about/about";
import ContactModal from "./ui/contact/contact-modal";
import Alert, { AlertProps } from "./ui/common/alert";
import { sendEmail } from "./lib/util";

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [alertProps, setAlertProps] = useState({
    success: false,
    message: "",
    onClose: () => setShowAlert(false),
  } as AlertProps);

  const initialized = useRef(false);

  const displayAlert = (message: string, success: boolean) => {
    setAlertProps({ ...alertProps, message, success });
    setShowAlert(true);
  };

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      console.log(
        "Hi there! I'm happy to see you're poking around. Why not take a look at the source code directly at: https://github.com/jspence12/info.joshspence.web",
      );
    }
  }, []);

  return (
    <>
      <div
        data-testid="main-content"
        className="h-screen flex flex-col"
        aria-hidden={showModal}
      >
        <Hero title="Josh Spence" subtitle="Software Engineer" />
        <div
          className={`flex flex-row justify-center ${
            showModal ? "overflow-hidden" : "md:overflow-hidden"
          }`}
        >
          <main className="grid grid-cols-2 gap-4 max-w-screen-3xl transition-all md:divide-x divide-zinc-700">
            <About onClickContact={() => setShowModal(true)} />
            <WorkHistory jobs={workExperience} />
          </main>
        </div>
        {showModal && (
          <ContactModal
            onClose={() => setShowModal(false)}
            displayAlert={displayAlert}
            sendEmail={sendEmail}
          />
        )}

        {showAlert && <Alert {...alertProps} />}
      </div>
    </>
  );
}
