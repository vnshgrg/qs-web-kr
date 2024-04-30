import React, { useState, useEffect } from "react";
import axios from "axios";
import RateItem from "./RateItem";

const RateList = () => {
    const [rates, setRates] = useState([]);
    const [keyCurrency, setKeyCurrency] = useState("");
    const [timestamp, setTimestamp] = useState("");

    const filterUniqueCountries = (rateList) => {
        const distinctCountry = [];
        const distinctRate = [];
        rateList.map((country) => {
            if (distinctCountry.indexOf(country.country) === -1) {
                distinctCountry.push(country.country);
                distinctRate.push(country);
            }
        });

        return distinctRate;
    };

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
                    setKeyCurrency(response.data.key_currency);
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
