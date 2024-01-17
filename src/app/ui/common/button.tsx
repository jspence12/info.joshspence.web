export interface ButtonProps {
  text: string;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}
export default function Button({ text, disabled, href, onClick }: ButtonProps) {
  const enabledStyle = "border-gray-200 hover:bg-zinc-700";
  const disabledStyle =
    "border-gray-400 text-gray-400 pointer pointer-events-none";
  return (
    <a
      aria-disabled={disabled}
      className={`
        ${
          disabled ? disabledStyle : enabledStyle
        } border-2 w-full py-1 rounded-full transition-all font-bold text-center`}
      href={href}
      target={href && "_blank"}
      onClick={onClick}
      role={href ? "link" : "button"}
    >
      {text}
    </a>
  );
}
