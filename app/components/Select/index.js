import React from "react";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { SvgFlag } from "../../config/countries";

const Select = ({ label, options, onChange, selected }) => {
  if (!selected) return null;
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <Listbox value={selected} onChange={onChange}>
        <div className="mt-1 relative">
          <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <span className="block truncate">
              <div className=" flex items-center">
                <span className="inline-block mr-2">
                  <SvgFlag code={selected.code} />
                </span>
                {selected.name}
              </div>
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {options.map((country, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    classNames(
                      active ? "text-white bg-indigo-600" : "text-gray-900",
                      "cursor-default select-none relative py-2 pl-3 pr-9"
                    )
                  }
                  value={idx}
                >
                  {({ selected, active }) => (
                    <>
                      {console.log(selected)}
                      <span
                        className={classNames(
                          selected ? "font-semibold" : "font-normal",
                          "truncate"
                        )}
                      >
                        <div className=" flex items-center">
                          <span className="inline-block mr-2">
                            <SvgFlag code={country.code} />
                          </span>
                          {country.name}
                        </div>
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Select;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
