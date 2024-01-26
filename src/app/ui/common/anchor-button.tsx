export interface AnchorButtonProps {
  text: string;
  href: string;
}

export default function AnchorButton({ text, href }: AnchorButtonProps) {
  const target = href?.length && href[0] !== "#" ? "_blank" : undefined;

  return (
    <a
      className="border-2 w-full py-1 rounded-full transition-all font-bold text-center truncate hover:bg-zinc-700"
      href={href}
      target={target}
    >
      {text}
    </a>
  );
}
