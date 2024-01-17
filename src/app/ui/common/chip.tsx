export interface ChipProps {
  text: string;
}

export default function Chip({ text }: ChipProps) {
  return (
    <div className="border border-yellow-100 rounded-full px-2 text-yellow-100 cursor-default">
      {text}
    </div>
  );
}
