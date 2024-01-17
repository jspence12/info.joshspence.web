import CloseIcon from "../../../../public/close-icon";

export interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ title, onClose, children }: ModalProps) {
  return (
    <div className="absolute y-center top-0 left-0 right-0 bottom-0">
      <div className="absolute h-full w-full z-30 bg-black opacity-50" />
      <div className="x-center z-30">
        <div className="bg-zinc-800 border-zinc-600 border w-11/12 md:w-3/4 lg:max-w-screen-md rounded-lg shadow-lg ">
          <div className="bg-zinc-900 px-5 shadow p-2 rounded-t-lg flex justify-between">
            <h4 className="text-4xl text-yellow-100 font-bold">{title}</h4>
            <button className="y-center  " onClick={onClose}>
              <CloseIcon className="h-8 w-8 rounded-full p-1 hover:bg-zinc-700 transition-colors duration-300" />
            </button>
          </div>
          <div className="mx-8 my-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
