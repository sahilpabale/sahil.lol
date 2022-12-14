import { Dropdown } from "./Dropdown";

// Next.js
import { useRouter } from "next/router";
import Link from "next/link";

export const Nav = () => {
  const ITEMS = [
    { id: 1, text: "/", to: "/", dropdown: "Home" },
    { id: 2, text: "Blog", to: "https://blog.sahil.lol" },
    { id: 3, text: "Experience", to: "/exp" },
  ];

  const router = useRouter();

  return (
    <nav className="flex px-6 top-8 fixed border dark:bg-[#10161a]/50 z-10 w-[90%] md:w-[40rem] border-teal-100 dark:border-teal-900 backdrop-blur-md mb-12 rounded-lg justify-between h-14 items-center">
      <div className="flex lg:hidden">
        <Dropdown items={ITEMS} />
      </div>
      <div className="hidden lg:flex">
        {ITEMS.map((nav) => (
          <LinkTag
            key={nav.id}
            className={`${
              router.pathname === nav.to && "dark:bg-gray-800 bg-gray-100"
            }`}
            to={nav.to}
          >
            {nav.text}
          </LinkTag>
        ))}
      </div>
    </nav>
  );
};

const LinkTag = ({
  children,
  to,
  className,
}: {
  children: React.ReactNode;
  to: string;
  className?: string | undefined;
}) => {
  return (
    <Link href={to} target="_blank">
      <a
        className={`mr-8 text-gray-600 focus:ring-2 ring-[#fc9d03] outline-none dark:text-gray-300 text-sm duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};
