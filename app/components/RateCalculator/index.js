import axios from "axios";
import React, { useState, useEffect } from "react";
import Select from "../Select";
import { countries, countriesFlag, serviceCharge } from "../../config";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

const sendingCountries = [
    {
        code: "KOR",
        currency: "KRW",
        name: "Korea",
        url: "https://mobile.qsremit.net/openapi/get/fxrates",
    },
];

const RateCalculator = () => {
    const [receivingCountries, setReceivingCountries] = useState([]);
    const [selectedReceivingCountry, setSelectedReceivingCountry] =
        useState(null);
    const [selectedSendingCountry, setSelectedSendingCountry] = useState(
        sendingCountries[0]
    );
    const [sendingOrReceiving, setSendingOrReceiving] = useState("Sending");
    const [amount, setAmount] = useState(0);
    const [sendingMethod, setSendingMethod] = useState("bank");
    const [currentServiceCharge, setCurrentServiceCharge] = useState(null);
    const [currentServiceChargeAmount, setCurrentServiceChargeAmount] =
        useState(0);

    const { t } = useTranslation("ratecalculator");

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
        const fetchRates = async () => {
            try {
                const URL = selectedSendingCountry.url;
                const response = await axios.get(URL);
                const uniqueCountries = filterUniqueCountries(
                    response.data.list
                );
                const options = uniqueCountries.map(
                    ({ country, currency, fxrate }) => {
                        let countryName = `${countries[country]}`;
                        return {
                            name: countryName,
                            code: country,
                            currency,
                            fxrate,
                        };
                    }
                );
                setReceivingCountries(options);
                setSelectedReceivingCountry(options[0]);
            } catch (error) {
                console.log("Could not retrieve rates");
            }
        };
        fetchRates();
    }, [selectedSendingCountry]);

    useEffect(() => {
        // get service charge for selected country and sending method
        if (selectedReceivingCountry) {
            const serviceChargeRate =
                serviceCharge[selectedReceivingCountry.code][sendingMethod];
            // check if minimum
            if (serviceChargeRate) {
                setCurrentServiceChargeAmount(0);
                const amount = sendingAmount();

                if (amount < serviceChargeRate[0].min) {
                    setCurrentServiceCharge(
                        t("service-charge-min-amount", {
                            sendingCurrency: sendingCurrency(),
                            minimum: serviceChargeRate[0].min,
                        })
                    );
                } else if (
                    amount > serviceChargeRate[serviceChargeRate.length - 1].max
                ) {
                    setCurrentServiceCharge(
                        t("service-charge-max-amount-exceed", {
                            sendingCurrency: sendingCurrency(),
                            maximum:
                                serviceChargeRate[serviceChargeRate.length - 1]
                                    .max,
                        })
                    );
                } else {
                    // calculate service charge
                    let serviceChargeAmount = null;
                    serviceChargeRate.map((bracket) => {
                        if (amount >= bracket.min && amount <= bracket.max) {
                            serviceChargeAmount = bracket.serviceCharge;
                        }
                    });

                    setCurrentServiceCharge(
                        t("service-charge-amount", {
                            sendingCurrency: sendingCurrency(),
                            amount: serviceChargeAmount,
                        })
                    );
                    setCurrentServiceChargeAmount(serviceChargeAmount);
                }
            }
            // check if maximum
        }
    }, [sendingMethod, selectedReceivingCountry, amount, sendingOrReceiving]);

    const handleReceivingCountrySelect = (event) => {
        const selectedIndex = event;
        const newReceivingCountry = receivingCountries[selectedIndex];
        setSelectedReceivingCountry(newReceivingCountry);

        // check if currently selected sendingMethod is available for new Receiving country
        const { code } = newReceivingCountry;
        const sendingMethodForNewReceivingCountry = serviceCharge[code].type;
        if (!sendingMethodForNewReceivingCountry[sendingMethod]) {
            if (sendingMethod === "bank") {
                setSendingMethod("cash");
            } else {
                setSendingMethod("bank");
            }
        }
    };

    const handleSendingCountrySelect = (event) => {
        const selectedIndex = event;
        setSelectedSendingCountry(sendingCountries[selectedIndex]);
    };

    const handleSendingOrReceiving = (event) => {
        setSendingOrReceiving(event.target.value);
    };

    const handleSendingMethod = (event) => {
        setSendingMethod(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const sendingCurrency = () => {
        if (sendingOrReceiving === "Sending") {
            return selectedSendingCountry.currency;
        } else {
            return selectedReceivingCountry.currency;
        }
    };

    const receivingCurrency = () => {
        if (sendingOrReceiving === "Sending") {
            return selectedReceivingCountry.currency;
        } else {
            return selectedSendingCountry.currency;
        }
    };

    const receivingAmount = () => {
        if (!selectedReceivingCountry) return null;

        let currency = "";
        let amountFloat = 0;

        if (sendingOrReceiving === "Sending") {
            currency = receivingCurrency();
            amountFloat = amount * selectedReceivingCountry.fxrate;
        } else {
            currency = sendingCurrency();
            amountFloat = amount;
        }

        return `${currency} ${formatAmount(currency, amountFloat)}`;
    };

    const sendingAmount = () => {
        if (!selectedReceivingCountry) return null;

        if (sendingOrReceiving === "Sending") {
            console.log(amount, currentServiceChargeAmount);
            return amount;
        } else {
            return formatAmount(
                sendingCurrency(),
                amount / selectedReceivingCountry.fxrate
            );
        }
    };

    const formatAmount = (currency, amount) => {
        if (
            currency === "AUD" ||
            currency === "SGD" ||
            currency === "MYR" ||
            currency === "RUB"
        ) {
            return `${parseFloat(amount).toFixed(2)}`;
        } else {
            return `${parseInt(amount, 10)}`;
        }
    };

    const renderResult = () => {
        if (amount === 0 || amount === "") return null;

        let sendingInfo = {};
        let rateInfo = {};
        let receivingInfo = {};
        if (sendingOrReceiving === "Sending") {
            sendingInfo = {
                currency: sendingCurrency(),
                amount:
                    parseInt(amount, 10) +
                    parseInt(currentServiceChargeAmount, 10),
                country: selectedSendingCountry.name,
            };

            rateInfo = {
                sendingCurrency: sendingCurrency(),
                receivingCurrency: receivingCurrency(),
                receivingFx: selectedReceivingCountry.fxrate,
            };
            receivingInfo = {
                amount: receivingAmount(),
                country:
                    selectedReceivingCountry && selectedReceivingCountry.name,
            };
        } else {
            sendingInfo = {
                currency: selectedSendingCountry.currency,
                amount:
                    parseInt(sendingAmount(), 10) +
                    parseInt(currentServiceChargeAmount, 10),
                country: selectedSendingCountry.name,
            };

            rateInfo = {
                sendingCurrency: receivingCurrency(),
                receivingCurrency:
                    selectedReceivingCountry && sendingCurrency(),
                receivingFx: selectedReceivingCountry.fxrate,
            };

            receivingInfo = {
                amount: receivingAmount(),
                country:
                    selectedReceivingCountry && selectedReceivingCountry.name,
            };
        }

        let sendingMethodIcon = null;
        if (sendingMethod === "cash") {
            sendingMethodIcon = (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
            );
        } else {
            sendingMethodIcon = (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
            );
        }

        return (
            <div className="flow-root">
                <ul className="-mb-8">
                    <li>
                        <div className="relative pb-4">
                            <span
                                className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                aria-hidden="true"
                            ></span>
                            <div className="relative flex items-start space-x-3">
                                <div>
                                    <div className="relative px-1">
                                        <div className="h-8 w-8 bg-gray-100 rounded-full ring-4 ring-white flex items-center justify-center">
                                            <svg
                                                className="h-5 w-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="min-w-0 flex-1 py-1.5">
                                    <Trans
                                        i18nKey="ratecalculator:sending"
                                        values={sendingInfo}
                                        components={[
                                            <div className="text-base text-gray-600" />,
                                            <span className="font-medium text-blue-700" />,
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="relative pb-5">
                            <span
                                className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                aria-hidden="true"
                            ></span>
                            <div className="relative flex items-start space-x-3">
                                <div>
                                    <div className="relative px-1">
                                        <div className="h-8 w-8 bg-gray-100 rounded-full ring-4 ring-white flex items-center justify-center">
                                            <svg
                                                className="h-4 w-4 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="min-w-0 flex-1 py-1.5">
                                    <div className="text-sm text-gray-400 italic">
                                        {currentServiceCharge}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="relative pb-5">
                            <span
                                className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                aria-hidden="true"
                            ></span>
                            <div className="relative flex items-start space-x-3">
                                <div>
                                    <div className="relative px-1">
                                        <div className="h-8 w-8 bg-gray-100 rounded-full ring-4 ring-white flex items-center justify-center">
                                            <svg
                                                className="h-4 w-4 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="min-w-0 flex-1 py-1.5">
                                    <Trans
                                        i18nKey="ratecalculator:rate"
                                        values={rateInfo}
                                        components={[
                                            <div className="text-sm text-gray-400 italic" />,
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="relative pb-12">
                            <div className="relative flex items-start space-x-3">
                                <div>
                                    <div className="relative px-1">
                                        <div className="h-8 w-8 bg-blue-100 rounded-full ring-4 ring-white flex items-center justify-center">
                                            <svg
                                                className="h-4 w-4 text-blue-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                {sendingMethodIcon}
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="min-w-0 flex-1 py-1.5">
                                    <Trans
                                        i18nKey="ratecalculator:receiving"
                                        values={receivingInfo}
                                        components={[
                                            <div className="text-base text-gray-600" />,
                                            <span className="font-medium text-blue-700" />,
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    };

    const SendBank = (
        <div className="flex items-center">
            <input
                id="bank"
                name="sendingMethod"
                type="radio"
                value="bank"
                checked={sendingMethod === "bank" && true}
                onChange={handleSendingMethod}
                className="focus:ring-indigo-500 h-4 w-4 text-blue-600 border-gray-300"
            />
            <label
                htmlFor="bank"
                className="ml-3 block text-sm font-medium text-gray-700"
            >
                {t("bank-deposit")}
            </label>
        </div>
    );

    const SendCash = (
        <div className="flex items-center">
            <input
                id="cash"
                name="sendingMethod"
                type="radio"
                value="cash"
                checked={sendingMethod === "cash" && true}
                onChange={handleSendingMethod}
                className="focus:ring-indigo-500 h-4 w-4 text-blue-600 border-gray-300"
            />
            <label
                htmlFor="cash"
                className="ml-3 block text-sm font-medium text-gray-700"
            >
                {t("cash-pickup")}
            </label>
        </div>
    );

    const renderSendingType = () => {
        // get send types based on selected country
        const sendingType = serviceCharge[selectedReceivingCountry?.code]?.type;
        if (!sendingType) {
            return null;
        }
        if (sendingType.bank && sendingType.cash) {
            return (
                <>
                    {SendBank}
                    {SendCash}
                </>
            );
        } else if (sendingType.bank) {
            return <>{SendBank}</>;
        } else if (sendingType.cash) {
            return <>{SendCash}</>;
        }

        return null;
    };

    const renderCalculationForm = () => {
        if (receivingCountries.length === 0) {
            return (
                <div className="mt-6 text-center py-10 text-gray-600">
                    Loading...
                </div>
            );
        }

        return (
            <div className="mt-6">
                <form
                    action="#"
                    method="POST"
                    className="space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    >
                    <div className="grid grid-cols-2 gap-x-6">
                        <div>
                            <label htmlFor="name" className="sr-only">
                                {t("from")}
                            </label>
                            <Select
                                label={t("from")}
                                options={sendingCountries}
                                onChange={handleSendingCountrySelect}
                                selected={selectedSendingCountry}
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="sr-only">
                                {t("to")}
                            </label>
                            <Select
                                label={t("to")}
                                options={receivingCountries}
                                onChange={handleReceivingCountrySelect}
                                selected={selectedReceivingCountry}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-6">
                        <div className="flex items-center">
                            <input
                                id="sending"
                                name="calculationMethod"
                                type="radio"
                                value="Sending"
                                checked={
                                    sendingOrReceiving === "Sending" && true
                                }
                                onChange={handleSendingOrReceiving}
                                className="focus:ring-indigo-500 h-4 w-4 text-blue-600 border-gray-300"
                            />
                            <label
                                htmlFor="sending"
                                className="ml-3 block text-sm font-medium text-gray-700"
                            >
                                {t("Sending")}
                                {t("amount")}
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="receiving"
                                name="calculationMethod"
                                type="radio"
                                value="Receiving"
                                checked={
                                    sendingOrReceiving === "Receiving" && true
                                }
                                onChange={handleSendingOrReceiving}
                                className="focus:ring-indigo-500 h-4 w-4 text-blue-600 border-gray-300"
                            />
                            <label
                                htmlFor="receiving"
                                className="ml-3 block text-sm font-medium text-gray-700"
                            >
                                {t("Receiving")}
                                {t("amount")}
                            </label>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700"
                        >
                            {t(sendingOrReceiving)}
                            {t("amount")}
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">
                                    {sendingCurrency()}
                                </span>
                            </div>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="focus:ring-indigo-500 focus:border-blue-500 block w-full pl-12 pr-4 sm:text-sm border-gray-300 rounded-md"
                                placeholder="0"
                                aria-describedby="price-currency"
                                value={amount === 0 ? "" : amount}
                                onChange={handleAmountChange}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-6">
                        {renderSendingType()}
                    </div>
                    <div>{renderResult()}</div>
                </form>
            </div>
        );
    };

    return (
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg">
                <div className="px-4 pt-8 pb-4 sm:px-8">
                    <div className="">
                        <h2 className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                            {t("rate-calculator")}
                        </h2>
                        <p className="mt-1 text-md leading-6 text-gray-500">
                            {t("description")}
                        </p>
                        {renderCalculationForm()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RateCalculator;
