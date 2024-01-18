import React, { useEffect, useState } from "react";
import CloseIcon from "./icons/close-icon";
import { sleep } from "@/app/lib/util";

export interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

enum ModalState {
  LOADING = 1,
  LOADED = 2,
  CLOSING = 3,
}

export default function Modal({ title, onClose, children }: ModalProps) {
  const [modalState, setModalState] = useState(ModalState.LOADING);
  useEffect(() => {
    if (modalState === ModalState.LOADING) setModalState(ModalState.LOADED);
  });

  const [backgroundOpacity, modalOpacity] =
    modalState === ModalState.LOADED
      ? ["opacity-50", "opacity-100"]
      : ["opacity-0", "opacity-0"];

  const fadeOut = async () => {
    setModalState(ModalState.CLOSING);
    await sleep(300);
    onClose();
  };

  return (
    <div className="absolute y-center top-0 left-0 right-0 bottom-0">
      <div
        className={
          "absolute h-full w-full z-30 bg-black transition duration-300 " +
          backgroundOpacity
        }
      />
      <div className="x-center z-30">
        <div
          className={
            "relative bg-zinc-800 border-zinc-600 border w-11/12 md:w-3/4 lg:max-w-screen-md rounded-lg shadow-lg transition duration-300 " +
            modalOpacity
          }
        >
          <div className="bg-zinc-900 px-5 shadow p-2 rounded-t-lg flex justify-between">
            <h4 className="text-4xl text-yellow-100 font-bold">{title}</h4>
            <button className="y-center  " onClick={fadeOut}>
              <CloseIcon className="h-8 w-8 rounded-full p-1 hover:bg-zinc-700 transition-colors duration-300" />
            </button>
          </div>
          <div className="mx-8 my-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
