export const countries = {
    AUS: "Australia",
    BGD: "Bangladesh",
    IDN: "Indonesia",
    IND: "India",
    JPN: "Japan",
    KOR: "South Korea",
    LKA: "Sri Lanka",
    MMR: "Myanmar",
    MYS: "Malaysia",
    NPL: "Nepal",
    PAK: "Pakistan",
    PHL: "Philippines",
    RUS: "Russia",
    SGP: "Singapore",
    THA: "Thailand",
    VNM: "Viet Nam",
};

export const countriesFlag = {
    AUS: renderFlag("AUS"),
    BGD: renderFlag("BGD"),
    IDN: renderFlag("IDN"),
    IND: renderFlag("IND"),
    KOR: renderFlag("KOR"),
    LKA: renderFlag("LKA"),
    MMR: renderFlag("MMR"),
    MYS: renderFlag("MYS"),
    NPL: renderFlag("NPL"),
    PAK: renderFlag("PAK"),
    PHL: renderFlag("PHL"),
    RUS: renderFlag("RUS"),
    SGP: renderFlag("SGP"),
    THA: renderFlag("THA"),
    VNM: renderFlag("VNM"),
};

export function renderFlag(CODE) {
    return <SvgFlag code={CODE} />;
}

export function SvgFlag({ code }) {
    return (
        <img
            src={`/flags/${code.toLowerCase()}.svg`}
            className="w-auto h-4 rounded-sm shadow"
        />
    );
}

export const serviceCharge = {
    AUS: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
    },
    BGD: {
        type: { bank: true, cash: true },
        cash: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
        bank: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
    },
    IDN: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
    },
    IND: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
    },
    KOR: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
    },
    LKA: {
        type: { bank: true, cash: true },
        bank: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
        cash: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
    },
    MMR: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
    },
    MYS: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
    },
    NPL: {
        type: { bank: true, cash: true },
        cash: [
            {
                min: 5000,
                max: 5700000,
                serviceCharge: 5000,
            },
        ],
        bank: [
            {
                min: 5000,
                max: 5700000,
                serviceCharge: 5000,
            },
        ],
    },
    PAK: {
        type: { bank: true, cash: true },
        cash: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
        bank: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
    },
    PHL: {
        type: { bank: true, cash: true },
        cash: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
        bank: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
    },
    RUS: {
        type: { bank: true, cash: true },
        cash: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
    },
    SGP: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
    },
    THA: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
    },
    VNM: {
        type: { bank: true, cash: true },
        cash: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
        bank: [
            {
                min: 5000,
                max: 5500000,
                serviceCharge: 5000,
            },
        ],
    },
};
