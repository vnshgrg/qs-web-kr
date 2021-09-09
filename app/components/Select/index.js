import React from 'react';

const Select = ({ label, options, onChange }) => {
    return (
        <div>
            <label
                htmlFor={label}
                className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <select
                onChange={onChange}
                id={label}
                name={label}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                {options.map(({ code, name }, index) => {
                    return (
                        <option key={index.toString()} value={index}>
                            {name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Select;
