export interface ButtonProps {
  text: string;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const enabledStyle = "border-gray-200 hover:bg-zinc-700";
const disabledStyle =
  "border-gray-400 text-gray-400 pointer pointer-events-none";
const sharedStyle =
  "border-2 w-full py-1 rounded-full transition-all font-bold text-center ";
export default function Button({ text, disabled, href, onClick }: ButtonProps) {
  const target = href?.length && href[0] !== "#" ? "_blank" : undefined;

  if (href) {
  }
  return (
    <a
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={sharedStyle + (disabled ? disabledStyle : enabledStyle)}
      href={href}
      target={target}
      onClick={onClick}
      role={href ? "link" : "button"}
    >
      {text}
    </a>
  );
}
