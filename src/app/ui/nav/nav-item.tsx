import NavRecord from "@/app/lib/models/nav-record";
import Image from "next/image";

export interface NavItemProps {
  record: NavRecord;
}

export default function NavItem(props: NavItemProps) {
  const { record } = { ...props };
  return (
    <a className="mx-1 block" href={record.href} download={record.isDownload}>
      {record.image}
    </a>
  );
}
