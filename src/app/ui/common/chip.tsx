export interface ChipProps {
  text: string;
}

export default function Chip({ text }: ChipProps) {
  return (
    <div className="border border-yellow-100 rounded-full px-2 text-yellow-100 transition duration-300 hover:bg-yellow-100 hover:text-slate-800 cursor-default">
      {text}
    </div>
  );
}
