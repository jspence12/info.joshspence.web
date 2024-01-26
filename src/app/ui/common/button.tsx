export interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
}

export default function Button({ text, onClick, disabled, type }: ButtonProps) {
  const className =
    "border-2 w-full py-1 rounded-full transition-all font-bold text-center truncate " +
    (disabled ? "opacity-50" : "hover:bg-zinc-700");

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
}
