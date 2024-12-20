import Link from "next/link"; // Ensure this is only imported once
import { SanityLogo } from "./icons/SanityLogo";
import { NextJsLogo } from "./icons/NextJsLogo";
import { PlusIcon } from "./icons/PlusIcon";
import { GitHubIcon } from "./icons/GitHubIcon";

interface NavItem {
  label: string;
  href: string;
  className?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    label: "About",
    href: "/about",
  },
];

export default function Header() {
  return (
    <header className="fixed z-50 h-24 inset-0 bg-white/80 flex items-center backdrop-blur-lg">
      <div className="container py-6 sm:px-6">
        <div className="flex items-center justify-between gap-5">
          <Link className="flex items-center gap-2" href="/">
            <p className="text-2xl font-bold text-red-500">CrisisHQ</p>
          </Link>

          <nav>
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 leading-5 text-sm md:text-base tracking-tight font-normal"
            >
              {navItems.map((item, index) => (
                <li
                  key={item.href}
                  className={index > 0 ? "sm:before:w-[1px] sm:before:bg-gray-100 before:block flex sm:gap-4 md:gap-6" : ""}
                >
                  <Link
                    href={item.href}
                    className={item.className || ""}
                    {...(item.isExternal && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    <span className={item.icon ? "sr-only sm:not-sr-only" : ""}>
                      {item.label}
                    </span>
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}