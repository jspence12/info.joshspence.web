import NavRecord from "@/app/lib/models/nav-record";
import NavItem from "../nav-item";
import { SectionNames } from "@/app/lib/models/section-names";

export interface SideNavProps {
  navRecords: NavRecord[];
}

export default function SideNav(props: SideNavProps) {
  return (
    <nav className="absolute left-0 top-0 h-screen z-10 w-60 translate-x-0 overflow-hidden bg-black text-white text-center flex flex-col justify-between snap-x sticky">
      <h2>Josh Spence</h2>
      <ul className="m-0" aria-label="site navigation">
        <li>
          <a href={`#${SectionNames.About}`}>About</a>
        </li>
        <li>
          <a href={`#${SectionNames.Experience}`}>Experience</a>
        </li>
        <li>
          <a href={`#${SectionNames.Contact}`}>Contact</a>
        </li>
        <li>
          <a>Download Resume</a>
        </li>
      </ul>
      <ul
        className="m-0 flex flex-row justify-center"
        aria-label="additional links"
      >
        {props.navRecords.map((record) => (
          <NavItem key={record.altText} record={record} />
        ))}
      </ul>
    </nav>
  );
}
