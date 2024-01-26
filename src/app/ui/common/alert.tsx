import { useEffect, useState } from "react";
import CloseIcon from "./icons/close-icon";
import ErrorIcon from "./icons/error-icon";
import SuccessIcon from "./icons/success-icon";
import { sleep } from "@/app/lib/util";
import ModalState from "@/app/lib/models/modal-state";

export interface AlertProps {
  success: boolean;
  message: string;
  onClose: () => void;
}

export default function Alert({ success, message, onClose }: AlertProps) {
  const [modalState, setModalState] = useState(ModalState.OPENING);

  useEffect(() => {
    if (modalState === ModalState.OPENING) {
      const timeOutModal = async () => {
        setModalState(ModalState.ACTIVE);
        await sleep(5000);
        setModalState(ModalState.CLOSING);
        await sleep(300);
        onClose();
      };
      timeOutModal().catch(console.error);
    }
  }, [onClose, modalState]);

  const classes = [
    "w-full max-w-md flex justify-between rounded-lg border-2 px-2 transition duration-300",
  ];

  if (success) {
    classes.push("bg-green-200 text-green-700 border-green-400");
  } else {
    classes.push("bg-red-200 text-red-700 border-red-300");
  }

  if (modalState !== ModalState.ACTIVE) {
    classes.push("opacity-0");
  }

  const icon = success ? (
    <SuccessIcon className="h-8 w-8" />
  ) : (
    <ErrorIcon className="h-8 w-8" />
  );

  return (
    <div
      className={
        "h-10 z-100 absolute bottom-0 sticky-y flex justify-center w-full mb-4 "
      }
    >
      <div className={classes.join(" ")}>
        <div className="flex gap-4">
          <div className="y-center">{icon}</div>
          <span className="y-center font-bold">{message}</span>
        </div>
        <button
          className="y-center"
          onClick={async () => {
            setModalState(ModalState.CLOSING);
            await sleep(300);
            onClose();
          }}
        >
          <CloseIcon className="h-8 w-8 p-1 rounded-full hover:bg-white hover:bg-opacity-40 transition-all duration-300" />
        </button>
      </div>
    </div>
  );
}
