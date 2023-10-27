export const data = {
    labels: ['Crystal Plushie', 'Crystal Cloudy', 'Crystal Mire', 'Crystal Ciricion', 'Crystal Loudy', 'Crystal Papa'],
    datasets: [
        {
            label: 'num. of buys',
            data: [600, 2200, 350, 40, 75, 5000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
            ],
            borderWidth: 0.5,
        },
    ],
};

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
        },
    },
};

export const countryData = {
    labels: ['BiH', 'CRO', 'USA', 'MNE', 'SRB', 'DE', 'RO'],
    datasets: [
        {
            label: 'Buys',
            data: [1015, 912, 862, 176, 2800, 2500, 400],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(12, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
            ],
            borderWidth: 1,
        },
    ],
};

export const categories = [
    {
        id: 1,
        name: 'Mobiteli'
    },
    {
        id: 2,
        name: 'Racunari'
    },
    {
        id: 3,
        name: 'Konzole'
    },
    {
        id: 4,
        name: 'Dodaci za mobitele'
    },
    {
        id: 5,
        name: 'Dodaci za racunare'
    },
    {
        id: 6,
        name: 'Proizvodi za poslovne proizvode'
    },
    {
        id: 7,
        name: 'Slusalice'
    },
    {
        id: 8,
        name: 'Ostalo'
    }
]

export const subcategories = [
    {
        id: 1,
        category_id: 1,
        name: "Mobiteli na tipke"
    },
    {
        id: 2,
        category_id: 1,
        name: "Mobiteli na dodir"
    },
    {
        id: 3,
        category_id: 1,
        name: "Fiksni mobiteli"
    },
    {
        id: 4,
        category_id: 1,
        name: "Ostalo"
    },
    {
        id: 5,
        category_id: 2,
        name: "Desktop Racunar"
    },
    {
        id: 6,
        category_id: 2,
        name: "Laptopi"
    },
    {
        id: 7,
        category_id: 2,
        name: "All in One"
    },
    {
        id: 8,
        category_id: 2,
        name: "Ostalo"
    },
    {
        id: 9,
        category_id: 3,
        name: "Playstation Konzole"
    },
    {
        id: 10,
        category_id: 3,
        name: "XBOX Konzole"
    },
    {
        id: 11,
        category_id: 3,
        name: "Dzojstici"
    },
    {
        id: 12,
        category_id: 3,
        name: "Ostalo"
    },
    {
        id: 13,
        category_id: 4,
        name: "Maske"
    },
    {
        id: 14,
        category_id: 4,
        name: "Folije"
    },
    {
        id: 15,
        category_id: 4,
        name: "Staklene Folije"
    },
    {
        id: 16,
        category_id: 4,
        name: "Punjaci"
    },
    {
        id: 17,
        category_id: 4,
        name: "Drzaci"
    },
    {
        id: 18,
        category_id: 4,
        name: "Ostalo"
    },
    {
        id: 19,
        category_id: 5,
        name: "Monitori"
    },
    {
        id: 20,
        category_id: 5,
        name: "Tastature"
    },
    {
        id: 21,
        category_id: 5,
        name: "Misevi"
    },
    {
        id: 22,
        category_id: 5,
        name: "Zvucnici"
    },
    {
        id: 23,
        category_id: 5,
        name: "Podloge"
    },
    {
        id: 24,
        category_id: 5,
        name: "Drzaci za monitore"
    },
    {
        id: 25,
        category_id: 5,
        name: "Ostalo"
    },
    {
        id: 26,
        category_id: 6,
        name: "Fizikalne kase"
    },
    {
        id: 27,
        category_id: 6,
        name: "Printeri"
    },
    {
        id: 28,
        category_id: 6,
        name: "Kamere"
    },
    {
        id: 29,
        category_id: 6,
        name: "Alarmi"
    },
    {
        id: 30,
        category_id: 6,
        name: "Skeneri"
    },
    {
        id: 31,
        category_id: 7,
        name: "Slusalice za mobitele"
    },
    {
        id: 32,
        category_id: 7,
        name: "Gejmerske slusalice"
    },
    {
        id: 33,
        category_id: 7,
        name: "Bluetooth slusalice"
    },
    {
        id: 34,
        category_id: 7,
        name: "WiFi slusalice"
    },
    {
        id: 35,
        category_id: 7,
        name: "Ostalo"
    },
    {
        id: 36,
        category_id: 7,
        name: "TV dodaci"
    },
    {
        id: 37,
        category_id: 7,
        name: "Serveri"
    },
    {
        id: 38,
        category_id: 7,
        name: "Ostalo"
    }
]

export const brands = [
    {
        id: 1,
        category_id: 1,
        subcategory_id: 2,
        name: 'Apple'
    },
    {
        id: 1,
        category_id: 1,
        subcategory_id: 2,
        name: 'Samsung'
    },
    {
        id: 1,
        category_id: 1,
        subcategory_id: 2,
        name: 'Redmi'
    }
]

export const products = [
    {
        id: 1,
        name: 'iPhone 15 PRO MAX',
        color: [
            {
                id: 1,
                color_id: 2623
            },
            {
                id: 1,
                color_id: 2623
            },
            {
                id: 1,
                color_id: 2623
            }
        ]
    }
]