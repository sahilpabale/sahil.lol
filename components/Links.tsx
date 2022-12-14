import { LINKS } from "../lib/links";

// Next.js
import Link from "next/link";

export const Links = () => {
  return (
    <div className="flex">
      {LINKS.map((link) => (
        <LinkWrapper key={link.id} href={link.href} title={link.title}>
          {link.icon}
        </LinkWrapper>
      ))}
    </div>
  );
};

interface Props {
  children?: React.ReactNode;
  title: string;
  href: string;
}

const LinkWrapper = ({ href, children, title }: Props) => {
  return (
    <Link href={href} rel="noreferrer">
      <a
        className="text-2xl duration-100 focus:ring-2 ring-[#fc9d03] outline-none rounded cursor-pointer mr-6 hover:text-black dark:hover:text-white text-gray-600 dark:text-gray-300"
        title={title}
        target="_blank"
      >
        {children}
      </a>
    </Link>
  );
};
