import NavRecord from "@/app/lib/models/nav-record";
import NavItem from "../nav-item";

export interface TopNavProps {
  navRecords: NavRecord[];
}

export default function TopNav(props: TopNavProps) {
  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900 sticky top-0 z-10 h-nav-height md:hidden">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4 align-center">
        <p className="text-white font-bold">Josh Spence</p>
        <div className="flex">
          {props.navRecords.map((record) => (
            <NavItem key={record.href} record={record} />
          ))}
        </div>
      </div>
    </nav>
  );
}
