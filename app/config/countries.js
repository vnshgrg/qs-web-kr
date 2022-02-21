export const countries = {
    ARM: "Armenia",
    AUS: "Australia",
    AZE: "Azerbaijan",
    BGD: "Bangladesh",
    BLR: "Belarus",
    IDN: "Indonesia",
    IND: "India",
    KAZ: "Kazakhstan",
    KGZ: "Kyrgyzstan",
    KOR: "South Korea",
    LKA: "Sri Lanka",
    MDA: "Moldova",
    MMR: "Myanmar",
    MNG: "Mongolia",
    MYS: "Malaysia",
    NPL: "Nepal",
    PAK: "Pakistan",
    PHL: "Philippines",
    RUS: "Russia",
    SGP: "Singapore",
    THA: "Thailand",
    TJK: "Tajikistan",
    UKR: "Ukraine",
    UZB: "Uzbekistan",
    VNM: "Viet Nam",
};

export const countriesFlag = {
    ARM: renderFlag("ARM"),
    AUS: renderFlag("AUS"),
    AZE: renderFlag("AZE"),
    BGD: renderFlag("BGD"),
    BLR: renderFlag("BLR"),
    IDN: renderFlag("IDN"),
    IND: renderFlag("IND"),
    KAZ: renderFlag("KAZ"),
    KGZ: renderFlag("KGZ"),
    KOR: renderFlag("KOR"),
    LKA: renderFlag("LKA"),
    MDA: renderFlag("MDA"),
    MMR: renderFlag("MMR"),
    MNG: renderFlag("MNG"),
    MYS: renderFlag("MYS"),
    NPL: renderFlag("NPL"),
    PAK: renderFlag("PAK"),
    PHL: renderFlag("PHL"),
    RUS: renderFlag("RUS"),
    SGP: renderFlag("SGP"),
    THA: renderFlag("THA"),
    TJK: renderFlag("TJK"),
    UKR: renderFlag("UKR"),
    UZB: renderFlag("UZB"),
    VNM: renderFlag("VNM"),
};

export function renderFlag(CODE) {
    return <SvgFlag code={CODE} />;

    // if (supportsFlagEmoji()) {
    //     return emojiFlags[CODE];
    // } else {
    // }
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
    ARM: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 301500,
                serviceCharge: 1500,
            },
            {
                min: 301001,
                max: 1002000,
                serviceCharge: 2000,
            },
        ],
    },
    AUS: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 301500,
                serviceCharge: 1500,
            },
            {
                min: 301001,
                max: 1002000,
                serviceCharge: 2000,
            },
        ],
    },
    AZE: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 301500,
                serviceCharge: 1500,
            },
            {
                min: 301001,
                max: 1002000,
                serviceCharge: 2000,
            },
        ],
    },
    BGD: {
        type: { bank: true, cash: true },
        cash: [
            {
                min: 5000,
                max: 50500,
                serviceCharge: 500,
            },
            {
                min: 50501,
                max: 300000,
                serviceCharge: 950,
            },
        ],
        bank: [
            {
                min: 5000,
                max: 50500,
                serviceCharge: 500,
            },
            {
                min: 50501,
                max: 300950,
                serviceCharge: 950,
            },
            {
                min: 300951,
                max: 1001500,
                serviceCharge: 1500,
            },
        ],
    },
    BLR: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 301500,
                serviceCharge: 1500,
            },
            {
                min: 301001,
                max: 1002000,
                serviceCharge: 2000,
            },
        ],
    },
    IDN: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 30750,
                serviceCharge: 750,
            },
            {
                min: 30751,
                max: 301450,
                serviceCharge: 1450,
            },
            {
                min: 301451,
                max: 1001780,
                serviceCharge: 1780,
            },
        ],
    },
    IND: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 30500,
                serviceCharge: 500,
            },
            {
                min: 30501,
                max: 301000,
                serviceCharge: 1000,
            },
            {
                min: 301001,
                max: 1001500,
                serviceCharge: 1500,
            },
        ],
    },
    KAZ: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 301500,
                serviceCharge: 1500,
            },
            {
                min: 301001,
                max: 1002000,
                serviceCharge: 2000,
            },
        ],
    },
    KGZ: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 301500,
                serviceCharge: 1500,
            },
            {
                min: 301001,
                max: 1002000,
                serviceCharge: 2000,
            },
        ],
    },
    KOR: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 1000,
                max: 100500,
                serviceCharge: 500,
            },
            {
                min: 100501,
                max: 501000,
                serviceCharge: 1000,
            },
        ],
    },
    LKA: {
        type: { bank: true, cash: true },
        bank: [
            {
                min: 5000,
                max: 100800,
                serviceCharge: 800,
            },
            {
                min: 100801,
                max: 601800,
                serviceCharge: 1800,
            },
        ],
        cash: [
            {
                min: 5000,
                max: 130800,
                serviceCharge: 800,
            },
        ],
    },
    MDA: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 301500,
                serviceCharge: 1500,
            },
            {
                min: 301001,
                max: 1002000,
                serviceCharge: 2000,
            },
        ],
    },
    MMR: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 100850,
                serviceCharge: 850,
            },
            {
                min: 100851,
                max: 301200,
                serviceCharge: 1200,
            },
            {
                min: 301201,
                max: 1001800,
                serviceCharge: 1800,
            },
        ],
    },
    MNG: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 301500,
                serviceCharge: 1500,
            },
            {
                min: 301001,
                max: 1002000,
                serviceCharge: 2000,
            },
        ],
    },
    MYS: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 2000,
                max: 100700,
                serviceCharge: 700,
            },
            {
                min: 100701,
                max: 501200,
                serviceCharge: 1200,
            },
            {
                min: 501201,
                max: 1001800,
                serviceCharge: 1800,
            },
        ],
    },
    NPL: {
        type: { bank: true, cash: true },
        cash: [
            {
                min: 2000,
                max: 30500,
                serviceCharge: 500,
            },
            {
                min: 30501,
                max: 301000,
                serviceCharge: 1000,
            },
            {
                min: 301001,
                max: 1001500,
                serviceCharge: 1500,
            },
        ],
        bank: [
            {
                min: 1500,
                max: 30500,
                serviceCharge: 500,
            },
            {
                min: 30501,
                max: 301000,
                serviceCharge: 1000,
            },
            {
                min: 301001,
                max: 1001500,
                serviceCharge: 1500,
            },
        ],
    },
    PAK: {
        type: { bank: true, cash: true },
        cash: [
            {
                min: 5000,
                max: 30500,
                // serviceCharge: 500,
                serviceCharge: 0,
            },
            {
                min: 30501,
                max: 300800,
                // serviceCharge: 800,
                serviceCharge: 0,
            },
            {
                min: 300801,
                max: 381200,
                // serviceCharge: 1200,
                serviceCharge: 0,
            },
        ],
        bank: [
            {
                min: 3000,
                max: 30500,
                // serviceCharge: 500,
                serviceCharge: 0,
            },
            {
                min: 30501,
                max: 300800,
                // serviceCharge: 800,
                serviceCharge: 0,
            },
            {
                min: 300801,
                max: 1001200,
                // serviceCharge: 1200,
                serviceCharge: 0,
            },
        ],
    },
    PHL: {
        type: { bank: true, cash: true },
        cash: [
            {
                min: 4000,
                max: 30450,
                serviceCharge: 450,
            },
            {
                min: 30451,
                max: 120000,
                serviceCharge: 850,
            },
        ],
        bank: [
            {
                min: 5000,
                max: 30450,
                serviceCharge: 450,
            },
            {
                min: 30451,
                max: 300850,
                serviceCharge: 850,
            },
            {
                min: 300851,
                max: 1001250,
                serviceCharge: 1250,
            },
        ],
    },
    RUS: {
        type: { bank: true, cash: true },
        cash: [
            {
                min: 5000,
                max: 101000,
                serviceCharge: 1000,
            },
            {
                min: 101001,
                max: 3001500,
                serviceCharge: 1500,
            },
            {
                min: 3001501,
                max: 10002000,
                serviceCharge: 2000,
            },
        ],
    },
    SGP: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 301000,
                serviceCharge: 1000,
            },
            {
                min: 301001,
                max: 1001800,
                serviceCharge: 1800,
            },
        ],
    },
    THA: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 100800,
                serviceCharge: 800,
            },
            {
                min: 100801,
                max: 301200,
                serviceCharge: 1200,
            },
            {
                min: 301201,
                max: 1001500,
                serviceCharge: 1500,
            },
        ],
    },
    RJK: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 301500,
                serviceCharge: 1500,
            },
            {
                min: 301001,
                max: 1002000,
                serviceCharge: 2000,
            },
        ],
    },
    UKR: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 301500,
                serviceCharge: 1500,
            },
            {
                min: 301001,
                max: 1002000,
                serviceCharge: 2000,
            },
        ],
    },
    UZB: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 301500,
                serviceCharge: 1500,
            },
            {
                min: 301001,
                max: 1002000,
                serviceCharge: 2000,
            },
        ],
    },
    VNM: {
        type: { bank: true, cash: true },
        cash: [
            {
                min: 1000,
                max: 30480,
                serviceCharge: 480,
            },
            {
                min: 30481,
                max: 250880,
                serviceCharge: 880,
            },
            {
                min: 250881,
                max: 601280,
                serviceCharge: 1280,
            },
            {
                min: 601281,
                max: 1001980,
                serviceCharge: 1680,
            },
        ],
        bank: [
            {
                min: 1000,
                max: 30480,
                serviceCharge: 480,
            },
            {
                min: 30481,
                max: 250880,
                serviceCharge: 880,
            },
            {
                min: 250881,
                max: 601280,
                serviceCharge: 1280,
            },
            {
                min: 601281,
                max: 1001980,
                serviceCharge: 1680,
            },
        ],
    },
};
