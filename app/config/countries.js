export const countries = {
    AUS: 'Australia',
    BGD: 'Bangladesh',
    IDN: 'Indonesia',
    IND: 'India',
    KOR: 'South Korea',
    LKA: 'Sri Lanka',
    MMR: 'Myanmar',
    MYS: 'Malaysia',
    NPL: 'Nepal',
    PAK: 'Pakistan',
    PHL: 'Philippines',
    RUS: 'Russia',
    SGP: 'Singapore',
    THA: 'Thailand',
    VNM: 'Viet Nam'
};

export const countriesFlag = {
    AUS: '🇦🇺',
    BGD: '🇧🇩',
    IDN: '🇮🇩',
    IND: '🇮🇳',
    KOR: '🇰🇷',
    LKA: '🇱🇰',
    MMR: '🇲🇲',
    MYS: '🇲🇾',
    NPL: '🇳🇵',
    PAK: '🇵🇰',
    PHL: '🇵🇭',
    RUS: '🇷🇺',
    SGP: '🇸🇬',
    THA: '🇹🇭',
    VNM: '🇻🇳'
};

export const serviceCharge = {
    AUS: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 301500,
                serviceCharge: 1500
            },
            {
                min: 301001,
                max: 1002000,
                serviceCharge: 2000
            }
        ]
    },
    BGD: {
        type: { bank: true, cash: true },
        cash: [
            {
                min: 5000,
                max: 50500,
                serviceCharge: 500
            },
            {
                min: 50501,
                max: 300000,
                serviceCharge: 950
            }
        ],
        bank: [
            {
                min: 5000,
                max: 50500,
                serviceCharge: 500
            },
            {
                min: 50501,
                max: 300950,
                serviceCharge: 950
            },
            {
                min: 300951,
                max: 1001500,
                serviceCharge: 1500
            }
        ]
    },
    IDN: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 30750,
                serviceCharge: 750
            },
            {
                min: 30751,
                max: 301450,
                serviceCharge: 1450
            },
            {
                min: 301451,
                max: 1001780,
                serviceCharge: 1780
            }
        ]
    },
    IND: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 30500,
                serviceCharge: 500
            },
            {
                min: 30501,
                max: 301000,
                serviceCharge: 1000
            },
            {
                min: 301001,
                max: 1001500,
                serviceCharge: 1500
            }
        ]
    },
    KOR: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 1000,
                max: 100500,
                serviceCharge: 500
            },
            {
                min: 100501,
                max: 501000,
                serviceCharge: 1000
            }
        ]
    },
    LKA: {
        type: { bank: true, cash: true },
        bank: [
            {
                min: 5000,
                max: 100800,
                serviceCharge: 800
            },
            {
                min: 100801,
                max: 601800,
                serviceCharge: 1800
            }
        ],
        cash: [
            {
                min: 5000,
                max: 130800,
                serviceCharge: 800
            }
        ]
    },
    MMR: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 100850,
                serviceCharge: 850
            },
            {
                min: 100851,
                max: 301200,
                serviceCharge: 1200
            },
            {
                min: 301201,
                max: 1001800,
                serviceCharge: 1800
            }
        ]
    },
    MYS: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 2000,
                max: 100700,
                serviceCharge: 700
            },
            {
                min: 100701,
                max: 501200,
                serviceCharge: 1200
            },
            {
                min: 501201,
                max: 1001800,
                serviceCharge: 1800
            }
        ]
    },
    NPL: {
        type: { bank: true, cash: true },
        cash: [
            {
                min: 2000,
                max: 30500,
                serviceCharge: 500
            },
            {
                min: 30501,
                max: 301000,
                serviceCharge: 1000
            },
            {
                min: 301001,
                max: 1001500,
                serviceCharge: 1500
            }
        ],
        bank: [
            {
                min: 1500,
                max: 30500,
                serviceCharge: 500
            },
            {
                min: 30501,
                max: 301000,
                serviceCharge: 1000
            },
            {
                min: 301001,
                max: 1001500,
                serviceCharge: 1500
            }
        ]
    },
    PAK: {
        type: { bank: true, cash: true },
        cash: [
            {
                min: 5000,
                max: 30500,
                serviceCharge: 500
            },
            {
                min: 30501,
                max: 300800,
                serviceCharge: 800
            },
            {
                min: 300801,
                max: 381200,
                serviceCharge: 1200
            }
        ],
        bank: [
            {
                min: 3000,
                max: 30500,
                serviceCharge: 500
            },
            {
                min: 30501,
                max: 300800,
                serviceCharge: 800
            },
            {
                min: 300801,
                max: 1001200,
                serviceCharge: 1200
            }
        ]
    },
    PHL: {
        type: { bank: true, cash: true },
        cash: [
            {
                min: 4000,
                max: 30450,
                serviceCharge: 450
            },
            {
                min: 30451,
                max: 120000,
                serviceCharge: 850
            }
        ],
        bank: [
            {
                min: 5000,
                max: 30450,
                serviceCharge: 450
            },
            {
                min: 30451,
                max: 300850,
                serviceCharge: 850
            },
            {
                min: 300851,
                max: 1001250,
                serviceCharge: 1250
            }
        ]
    },
    RUS: {
        type: { bank: true, cash: true },
        cash: [
            {
                min: 5000,
                max: 101000,
                serviceCharge: 1000
            },
            {
                min: 101001,
                max: 3001500,
                serviceCharge: 1500
            },
            {
                min: 3001501,
                max: 10002000,
                serviceCharge: 2000
            }
        ]
    },
    SGP: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 301000,
                serviceCharge: 1000
            },
            {
                min: 301001,
                max: 1001800,
                serviceCharge: 1800
            }
        ]
    },
    THA: {
        type: { bank: true, cash: false },
        bank: [
            {
                min: 5000,
                max: 100800,
                serviceCharge: 800
            },
            {
                min: 100801,
                max: 301200,
                serviceCharge: 1200
            },
            {
                min: 301201,
                max: 1001500,
                serviceCharge: 1500
            }
        ]
    },
    VNM: {
        type: { bank: true, cash: true },
        cash: [
            {
                min: 1000,
                max: 30480,
                serviceCharge: 480
            },
            {
                min: 30481,
                max: 250880,
                serviceCharge: 880
            },
            {
                min: 250881,
                max: 601280,
                serviceCharge: 1280
            },
            {
                min: 601281,
                max: 1001980,
                serviceCharge: 1680
            }
        ],
        bank: [
            {
                min: 1000,
                max: 30480,
                serviceCharge: 480
            },
            {
                min: 30481,
                max: 250880,
                serviceCharge: 880
            },
            {
                min: 250881,
                max: 601280,
                serviceCharge: 1280
            },
            {
                min: 601281,
                max: 1001980,
                serviceCharge: 1680
            }
        ]
    }
};
