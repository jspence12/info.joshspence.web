export interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
}
export default function Button({
  text,
  disabled,
  onClick,
  className,
}: ButtonProps) {
  const enabledStyle = "border-gray-200 hover:bg-zinc-700";
  const disabledStyle = "border-gray-400 text-gray-400";
  return (
    <button
      className={`
        ${className} ${
          disabled ? disabledStyle : enabledStyle
        } border-2 px-6 py-1 rounded-full bg-zinc-800  transition-all font-bold`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
