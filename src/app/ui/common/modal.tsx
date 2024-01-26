import React, { useEffect, useState } from "react";
import CloseIcon from "./icons/close-icon";
import { sleep } from "@/app/lib/util";
import ModalState from "@/app/lib/models/modal-state";

export interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export const testIds = {
  overlay: "modal-overlay",
  modal: "modal",
  close: "modal-close",
};

export default function Modal({ title, onClose, children }: ModalProps) {
  const [modalState, setModalState] = useState(ModalState.OPENING);
  useEffect(() => {
    if (modalState === ModalState.OPENING) setModalState(ModalState.ACTIVE);
  }, [modalState]);

  const [backgroundOpacity, modalOpacity] =
    modalState === ModalState.ACTIVE
      ? ["opacity-50", "opacity-100"]
      : ["opacity-0", "opacity-0"];

  const fadeOut = async () => {
    setModalState(ModalState.CLOSING);
    await sleep(300);
    onClose();
  };

  const titleId = `${title.toLowerCase().replaceAll(" ", "-")}-dialog-title`;

  return (
    <div className="absolute y-center top-0 left-0 right-0 bottom-0">
      <div
        data-testid={testIds.overlay}
        className={
          "absolute h-full w-full bg-black transition duration-300 " +
          backgroundOpacity
        }
      />
      <div className="x-center">
        <div
          data-testid={testIds.modal}
          className={
            "relative bg-zinc-800 border-zinc-600 border w-11/12 md:w-3/4 lg:max-w-screen-md rounded-lg transition duration-300 " +
            modalOpacity
          }
          role="dialog"
          aria-labelledby={titleId}
        >
          <div className="bg-zinc-900 px-5 shadow p-2 rounded-t-lg flex justify-between">
            <h2 id={titleId} className="text-4xl">
              {title}
            </h2>
            <button
              data-testid={testIds.close}
              className="y-center"
              onClick={fadeOut}
              aria-label="Close"
            >
              <CloseIcon className="h-8 w-8 rounded-full p-1 hover:bg-white hover:bg-opacity-20 transition-all duration-300" />
            </button>
          </div>
          <div className="mx-8 my-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
