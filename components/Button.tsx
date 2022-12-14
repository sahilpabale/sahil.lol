import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      className="flex items-center p-2 rounded-lg justify-center px-6 text-black
      dark:text-white duration-300 font-semibold bg-gray-100 hover:bg-gray-200
      dark:bg-gray-800 dark:hover:bg-gray-900 outline-none focus:ring-2 ring-[#fc9d03]"
      {...props}
    >
      {props.children}
    </button>
  );
};
