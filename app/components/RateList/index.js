import React, { useState, useEffect } from "react";
import axios from "axios";
import RateItem from "./RateItem";
import { filterUniqueCountries } from "../RateCalculator";

const RateList = () => {
    const [rates, setRates] = useState([]);
    const [timestamp, setTimestamp] = useState("");

    useEffect(() => {
        const fetchRate = async () => {
            try {
                const response = await axios.get(
                    "https://mobile.qsremit.net/openapi/get/fxrates"
                );
                if (response.data) {
                    const TS = new Date(response.data.dateTime);
                    const TSReadable = `${TS.toLocaleTimeString()} ${TS.toDateString()}`;
                    setTimestamp(TSReadable);
                    setRates(filterUniqueCountries(response.data.list));
                    console.log(response.data);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchRate();
    }, []);
    if (rates.length === 0) {
        return null;
    }
    return (
        <div className="h-full">
            <div className="bg-white shadow overflow-auto sm:rounded-md h-[50rem]">
                <ul className="divide-y divide-gray-100">
                    {rates.map((country, index) => {
                        return (
                            <RateItem key={index.toString()} rate={country} />
                        );
                    })}
                </ul>
            </div>
            <div className="text-gray-400 text-sm mt-4">
                Last updated on: {timestamp}
            </div>
        </div>
    );
};

export default RateList;
