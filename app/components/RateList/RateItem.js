import React from "react";
import { countries, countriesFlag } from "../../config";

const RateItem = ({ rate }) => {
    return (
        <li className="block hover:bg-gray-50">
            <div className="px-4 py-3 flex items-center sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div className="truncate">
                        <div className="flex items-center">
                            <p className="font-normal text-gray-600 flex items-center">
                                <span className="inline-block mr-3">
                                    {countriesFlag[rate.country]}
                                </span>
                                {countries[rate.country]}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ml-5 flex-shrink-0 text-gray-600 font-semibold font-mono">
                    {rate.fxrate}{" "}
                    <span className="text-gray-500 text-sm font-light">
                        ({rate.currency})
                    </span>
                </div>
            </div>
        </li>
    );
};

export default RateItem;
