import { FiChevronDown, FiCheck } from "react-icons/fi";
import { Listbox } from "@headlessui/react";
import { Fragment } from "react";

interface Props {
  items: Item[];
  selectedItem: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

interface Item {
  tag: string;
  slug: string;
}

export const FilterListBox = ({ items, selectedItem, onChange }: Props) => {
  return (
    <Listbox value={selectedItem} onChange={onChange}>
      <div className="flex duration-300 relative flex-col w-1/2">
        <Listbox.Button className="flex p-3 font-semibold items-center text-sm justify-between dark:bg-[#10161a]/50 dark:text-white rounded-lg bg-white border border-teal-100 dark:bg-black dark:border-teal-900">
          {selectedItem} <FiChevronDown />
        </Listbox.Button>
        <Listbox.Options className="flex py-2 absolute w-full flex-col border bg-white border-teal-100 dark:bg-black dark:border-teal-900 rounded-lg mt-16">
          {items.map((item) => (
            <Listbox.Option key={item.slug} value={item.tag} as={Fragment}>
              {({
                active,
                selected,
              }: {
                active: boolean;
                selected: boolean;
              }) => (
                <li
                  className={`flex cursor-pointer font-semibold text-sm dark:bg-black dark:text-white items-center justify-between p-2 px-3 ${
                    active
                      ? "bg-[#fc9d03] dark:bg-[#fc9d03] duration-300 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {item.tag}
                  {selected && <FiCheck />}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};
