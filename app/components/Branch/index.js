import React from 'react';

const Branch = ({ number, branch }) => {
    const { name, location, details } = branch;
    return (
        <li className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary">
            <div className="sm:flex sm:space-x-4">
                <div className="sr-only sm:not-sr-only">
                    <div className="text-primary text-2xl bg-yellow-50 w-12 h-12 inline-flex items-center justify-center rounded-full border border-yellow-200">
                        {number}
                    </div>
                </div>
                <div className="flex-1">
                    <p className=" font-medium text-primary truncate">{name}</p>
                    <p className="text-sm uppercase text-gray-500 truncate">
                        {location}
                    </p>
                    <div className="mt-3 text-sm text-gray-600 space-y-1">
                        {details.length > 0 &&
                            details.map((detail, index) => (
                                <p key={index.toString()}>{detail}</p>
                            ))}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Branch;
