const countries = Object.freeze([
    {
        "id": 57000000,
        "key": "_EU",
        "name": "Europe",
        "isCountry": false
    },
    {
        "id": 57000001,
        "key": "_NA",
        "name": "North America",
        "isCountry": false
    },
    {
        "id": 57000002,
        "key": "_SA",
        "name": "South America",
        "isCountry": false
    },
    {
        "id": 57000003,
        "key": "_AS",
        "name": "Asia",
        "isCountry": false
    },
    {
        "id": 57000004,
        "key": "_AU",
        "name": "Oceania",
        "isCountry": false
    },
    {
        "id": 57000005,
        "key": "_AF",
        "name": "Africa",
        "isCountry": false
    },
    {
        "id": 57000006,
        "key": "_INT",
        "name": "International",
        "isCountry": false
    },
    {
        "id": 57000007,
        "key": "AF",
        "name": "Afghanistan",
        "isCountry": true
    },
    {
        "id": 57000008,
        "key": "AX",
        "name": "Åland Islands",
        "isCountry": true
    },
    {
        "id": 57000009,
        "key": "AL",
        "name": "Albania",
        "isCountry": true
    },
    {
        "id": 57000010,
        "key": "DZ",
        "name": "Algeria",
        "isCountry": true
    },
    {
        "id": 57000011,
        "key": "AS",
        "name": "American Samoa",
        "isCountry": true
    },
    {
        "id": 57000012,
        "key": "AD",
        "name": "Andorra",
        "isCountry": true
    },
    {
        "id": 57000013,
        "key": "AO",
        "name": "Angola",
        "isCountry": true
    },
    {
        "id": 57000014,
        "key": "AI",
        "name": "Anguilla",
        "isCountry": true
    },
    {
        "id": 57000015,
        "key": "AQ",
        "name": "Antarctica",
        "isCountry": true
    },
    {
        "id": 57000016,
        "key": "AG",
        "name": "Antigua and Barbuda",
        "isCountry": true
    },
    {
        "id": 57000017,
        "key": "AR",
        "name": "Argentina",
        "isCountry": true
    },
    {
        "id": 57000018,
        "key": "AM",
        "name": "Armenia",
        "isCountry": true
    },
    {
        "id": 57000019,
        "key": "AW",
        "name": "Aruba",
        "isCountry": true
    },
    {
        "id": 57000020,
        "key": "AC",
        "name": "Ascension Island",
        "isCountry": true
    },
    {
        "id": 57000021,
        "key": "AU",
        "name": "Australia",
        "isCountry": true
    },
    {
        "id": 57000022,
        "key": "AT",
        "name": "Austria",
        "isCountry": true
    },
    {
        "id": 57000023,
        "key": "AZ",
        "name": "Azerbaijan",
        "isCountry": true
    },
    {
        "id": 57000024,
        "key": "BS",
        "name": "Bahamas",
        "isCountry": true
    },
    {
        "id": 57000025,
        "key": "BH",
        "name": "Bahrain",
        "isCountry": true
    },
    {
        "id": 57000026,
        "key": "BD",
        "name": "Bangladesh",
        "isCountry": true
    },
    {
        "id": 57000027,
        "key": "BB",
        "name": "Barbados",
        "isCountry": true
    },
    {
        "id": 57000028,
        "key": "BY",
        "name": "Belarus",
        "isCountry": true
    },
    {
        "id": 57000029,
        "key": "BE",
        "name": "Belgium",
        "isCountry": true
    },
    {
        "id": 57000030,
        "key": "BZ",
        "name": "Belize",
        "isCountry": true
    },
    {
        "id": 57000031,
        "key": "BJ",
        "name": "Benin",
        "isCountry": true
    },
    {
        "id": 57000032,
        "key": "BM",
        "name": "Bermuda",
        "isCountry": true
    },
    {
        "id": 57000033,
        "key": "BT",
        "name": "Bhutan",
        "isCountry": true
    },
    {
        "id": 57000034,
        "key": "BO",
        "name": "Bolivia",
        "isCountry": true
    },
    {
        "id": 57000035,
        "key": "BA",
        "name": "Bosnia and Herzegovina",
        "isCountry": true
    },
    {
        "id": 57000036,
        "key": "BW",
        "name": "Botswana",
        "isCountry": true
    },
    {
        "id": 57000037,
        "key": "BV",
        "name": "Bouvet Island",
        "isCountry": true
    },
    {
        "id": 57000038,
        "key": "BR",
        "name": "Brazil",
        "isCountry": true
    },
    {
        "id": 57000039,
        "key": "IO",
        "name": "British Indian Ocean Territory",
        "isCountry": true
    },
    {
        "id": 57000040,
        "key": "VG",
        "name": "British Virgin Islands",
        "isCountry": true
    },
    {
        "id": 57000041,
        "key": "BN",
        "name": "Brunei",
        "isCountry": true
    },
    {
        "id": 57000042,
        "key": "BG",
        "name": "Bulgaria",
        "isCountry": true
    },
    {
        "id": 57000043,
        "key": "BF",
        "name": "Burkina Faso",
        "isCountry": true
    },
    {
        "id": 57000044,
        "key": "BI",
        "name": "Burundi",
        "isCountry": true
    },
    {
        "id": 57000045,
        "key": "KH",
        "name": "Cambodia",
        "isCountry": true
    },
    {
        "id": 57000046,
        "key": "CM",
        "name": "Cameroon",
        "isCountry": true
    },
    {
        "id": 57000047,
        "key": "CA",
        "name": "Canada",
        "isCountry": true
    },
    {
        "id": 57000048,
        "key": "IC",
        "name": "Canary Islands",
        "isCountry": true
    },
    {
        "id": 57000049,
        "key": "CV",
        "name": "Cape Verde",
        "isCountry": true
    },
    {
        "id": 57000050,
        "key": "BQ",
        "name": "Caribbean Netherlands",
        "isCountry": true
    },
    {
        "id": 57000051,
        "key": "KY",
        "name": "Cayman Islands",
        "isCountry": true
    },
    {
        "id": 57000052,
        "key": "CF",
        "name": "Central African Republic",
        "isCountry": true
    },
    {
        "id": 57000053,
        "key": "EA",
        "name": "Ceuta and Melilla",
        "isCountry": true
    },
    {
        "id": 57000054,
        "key": "TD",
        "name": "Chad",
        "isCountry": true
    },
    {
        "id": 57000055,
        "key": "CL",
        "name": "Chile",
        "isCountry": true
    },
    {
        "id": 57000056,
        "key": "CN",
        "name": "China",
        "isCountry": true
    },
    {
        "id": 57000057,
        "key": "CX",
        "name": "Christmas Island",
        "isCountry": true
    },
    {
        "id": 57000058,
        "key": "CC",
        "name": "Cocos (Keeling) Islands",
        "isCountry": true
    },
    {
        "id": 57000059,
        "key": "CO",
        "name": "Colombia",
        "isCountry": true
    },
    {
        "id": 57000060,
        "key": "KM",
        "name": "Comoros",
        "isCountry": true
    },
    {
        "id": 57000061,
        "key": "CG",
        "name": "Congo (DRC)",
        "isCountry": true
    },
    {
        "id": 57000062,
        "key": "CD",
        "name": "Congo (Republic)",
        "isCountry": true
    },
    {
        "id": 57000063,
        "key": "CK",
        "name": "Cook Islands",
        "isCountry": true
    },
    {
        "id": 57000064,
        "key": "CR",
        "name": "Costa Rica",
        "isCountry": true
    },
    {
        "id": 57000065,
        "key": "CI",
        "name": "Côte d’Ivoire",
        "isCountry": true
    },
    {
        "id": 57000066,
        "key": "HR",
        "name": "Croatia",
        "isCountry": true
    },
    {
        "id": 57000067,
        "key": "CU",
        "name": "Cuba",
        "isCountry": true
    },
    {
        "id": 57000068,
        "key": "CW",
        "name": "Curaçao",
        "isCountry": true
    },
    {
        "id": 57000069,
        "key": "CY",
        "name": "Cyprus",
        "isCountry": true
    },
    {
        "id": 57000070,
        "key": "CZ",
        "name": "Czech Republic",
        "isCountry": true
    },
    {
        "id": 57000071,
        "key": "DK",
        "name": "Denmark",
        "isCountry": true
    },
    {
        "id": 57000072,
        "key": "DG",
        "name": "Diego Garcia",
        "isCountry": true
    },
    {
        "id": 57000073,
        "key": "DJ",
        "name": "Djibouti",
        "isCountry": true
    },
    {
        "id": 57000074,
        "key": "DM",
        "name": "Dominica",
        "isCountry": true
    },
    {
        "id": 57000075,
        "key": "DO",
        "name": "Dominican Republic",
        "isCountry": true
    },
    {
        "id": 57000076,
        "key": "EC",
        "name": "Ecuador",
        "isCountry": true
    },
    {
        "id": 57000077,
        "key": "EG",
        "name": "Egypt",
        "isCountry": true
    },
    {
        "id": 57000078,
        "key": "SV",
        "name": "El Salvador",
        "isCountry": true
    },
    {
        "id": 57000079,
        "key": "GQ",
        "name": "Equatorial Guinea",
        "isCountry": true
    },
    {
        "id": 57000080,
        "key": "ER",
        "name": "Eritrea",
        "isCountry": true
    },
    {
        "id": 57000081,
        "key": "EE",
        "name": "Estonia",
        "isCountry": true
    },
    {
        "id": 57000082,
        "key": "ET",
        "name": "Ethiopia",
        "isCountry": true
    },
    {
        "id": 57000083,
        "key": "FK",
        "name": "Falkland Islands",
        "isCountry": true
    },
    {
        "id": 57000084,
        "key": "FO",
        "name": "Faroe Islands",
        "isCountry": true
    },
    {
        "id": 57000085,
        "key": "FJ",
        "name": "Fiji",
        "isCountry": true
    },
    {
        "id": 57000086,
        "key": "FI",
        "name": "Finland",
        "isCountry": true
    },
    {
        "id": 57000087,
        "key": "FR",
        "name": "France",
        "isCountry": true
    },
    {
        "id": 57000088,
        "key": "GF",
        "name": "French Guiana",
        "isCountry": true
    },
    {
        "id": 57000089,
        "key": "PF",
        "name": "French Polynesia",
        "isCountry": true
    },
    {
        "id": 57000090,
        "key": "TF",
        "name": "French Southern Territories",
        "isCountry": true
    },
    {
        "id": 57000091,
        "key": "GA",
        "name": "Gabon",
        "isCountry": true
    },
    {
        "id": 57000092,
        "key": "GM",
        "name": "Gambia",
        "isCountry": true
    },
    {
        "id": 57000093,
        "key": "GE",
        "name": "Georgia",
        "isCountry": true
    },
    {
        "id": 57000094,
        "key": "DE",
        "name": "Germany",
        "isCountry": true
    },
    {
        "id": 57000095,
        "key": "GH",
        "name": "Ghana",
        "isCountry": true
    },
    {
        "id": 57000096,
        "key": "GI",
        "name": "Gibraltar",
        "isCountry": true
    },
    {
        "id": 57000097,
        "key": "GR",
        "name": "Greece",
        "isCountry": true
    },
    {
        "id": 57000098,
        "key": "GL",
        "name": "Greenland",
        "isCountry": true
    },
    {
        "id": 57000099,
        "key": "GD",
        "name": "Grenada",
        "isCountry": true
    },
    {
        "id": 57000100,
        "key": "GP",
        "name": "Guadeloupe",
        "isCountry": true
    },
    {
        "id": 57000101,
        "key": "GU",
        "name": "Guam",
        "isCountry": true
    },
    {
        "id": 57000102,
        "key": "GT",
        "name": "Guatemala",
        "isCountry": true
    },
    {
        "id": 57000103,
        "key": "GG",
        "name": "Guernsey",
        "isCountry": true
    },
    {
        "id": 57000104,
        "key": "GN",
        "name": "Guinea",
        "isCountry": true
    },
    {
        "id": 57000105,
        "key": "GW",
        "name": "Guinea-Bissau",
        "isCountry": true
    },
    {
        "id": 57000106,
        "key": "GY",
        "name": "Guyana",
        "isCountry": true
    },
    {
        "id": 57000107,
        "key": "HT",
        "name": "Haiti",
        "isCountry": true
    },
    {
        "id": 57000108,
        "key": "HM",
        "name": "Heard & McDonald Islands",
        "isCountry": true
    },
    {
        "id": 57000109,
        "key": "HN",
        "name": "Honduras",
        "isCountry": true
    },
    {
        "id": 57000110,
        "key": "HK",
        "name": "Hong Kong",
        "isCountry": true
    },
    {
        "id": 57000111,
        "key": "HU",
        "name": "Hungary",
        "isCountry": true
    },
    {
        "id": 57000112,
        "key": "IS",
        "name": "Iceland",
        "isCountry": true
    },
    {
        "id": 57000113,
        "key": "IN",
        "name": "India",
        "isCountry": true
    },
    {
        "id": 57000114,
        "key": "ID",
        "name": "Indonesia",
        "isCountry": true
    },
    {
        "id": 57000115,
        "key": "IR",
        "name": "Iran",
        "isCountry": true
    },
    {
        "id": 57000116,
        "key": "IQ",
        "name": "Iraq",
        "isCountry": true
    },
    {
        "id": 57000117,
        "key": "IE",
        "name": "Ireland",
        "isCountry": true
    },
    {
        "id": 57000118,
        "key": "IM",
        "name": "Isle of Man",
        "isCountry": true
    },
    {
        "id": 57000119,
        "key": "IL",
        "name": "Israel",
        "isCountry": true
    },
    {
        "id": 57000120,
        "key": "IT",
        "name": "Italy",
        "isCountry": true
    },
    {
        "id": 57000121,
        "key": "JM",
        "name": "Jamaica",
        "isCountry": true
    },
    {
        "id": 57000122,
        "key": "JP",
        "name": "Japan",
        "isCountry": true
    },
    {
        "id": 57000123,
        "key": "JE",
        "name": "Jersey",
        "isCountry": true
    },
    {
        "id": 57000124,
        "key": "JO",
        "name": "Jordan",
        "isCountry": true
    },
    {
        "id": 57000125,
        "key": "KZ",
        "name": "Kazakhstan",
        "isCountry": true
    },
    {
        "id": 57000126,
        "key": "KE",
        "name": "Kenya",
        "isCountry": true
    },
    {
        "id": 57000127,
        "key": "KI",
        "name": "Kiribati",
        "isCountry": true
    },
    {
        "id": 57000128,
        "key": "XK",
        "name": "Kosovo",
        "isCountry": true
    },
    {
        "id": 57000129,
        "key": "KW",
        "name": "Kuwait",
        "isCountry": true
    },
    {
        "id": 57000130,
        "key": "KG",
        "name": "Kyrgyzstan",
        "isCountry": true
    },
    {
        "id": 57000131,
        "key": "LA",
        "name": "Laos",
        "isCountry": true
    },
    {
        "id": 57000132,
        "key": "LV",
        "name": "Latvia",
        "isCountry": true
    },
    {
        "id": 57000133,
        "key": "LB",
        "name": "Lebanon",
        "isCountry": true
    },
    {
        "id": 57000134,
        "key": "LS",
        "name": "Lesotho",
        "isCountry": true
    },
    {
        "id": 57000135,
        "key": "LR",
        "name": "Liberia",
        "isCountry": true
    },
    {
        "id": 57000136,
        "key": "LY",
        "name": "Libya",
        "isCountry": true
    },
    {
        "id": 57000137,
        "key": "LI",
        "name": "Liechtenstein",
        "isCountry": true
    },
    {
        "id": 57000138,
        "key": "LT",
        "name": "Lithuania",
        "isCountry": true
    },
    {
        "id": 57000139,
        "key": "LU",
        "name": "Luxembourg",
        "isCountry": true
    },
    {
        "id": 57000140,
        "key": "MO",
        "name": "Macau",
        "isCountry": true
    },
    {
        "id": 57000141,
        "key": "MK",
        "name": "Macedonia (FYROM)",
        "isCountry": true
    },
    {
        "id": 57000142,
        "key": "MG",
        "name": "Madagascar",
        "isCountry": true
    },
    {
        "id": 57000143,
        "key": "MW",
        "name": "Malawi",
        "isCountry": true
    },
    {
        "id": 57000144,
        "key": "MY",
        "name": "Malaysia",
        "isCountry": true
    },
    {
        "id": 57000145,
        "key": "MV",
        "name": "Maldives",
        "isCountry": true
    },
    {
        "id": 57000146,
        "key": "ML",
        "name": "Mali",
        "isCountry": true
    },
    {
        "id": 57000147,
        "key": "MT",
        "name": "Malta",
        "isCountry": true
    },
    {
        "id": 57000148,
        "key": "MH",
        "name": "Marshall Islands",
        "isCountry": true
    },
    {
        "id": 57000149,
        "key": "MQ",
        "name": "Martinique",
        "isCountry": true
    },
    {
        "id": 57000150,
        "key": "MR",
        "name": "Mauritania",
        "isCountry": true
    },
    {
        "id": 57000151,
        "key": "MU",
        "name": "Mauritius",
        "isCountry": true
    },
    {
        "id": 57000152,
        "key": "YT",
        "name": "Mayotte",
        "isCountry": true
    },
    {
        "id": 57000153,
        "key": "MX",
        "name": "Mexico",
        "isCountry": true
    },
    {
        "id": 57000154,
        "key": "FM",
        "name": "Micronesia",
        "isCountry": true
    },
    {
        "id": 57000155,
        "key": "MD",
        "name": "Moldova",
        "isCountry": true
    },
    {
        "id": 57000156,
        "key": "MC",
        "name": "Monaco",
        "isCountry": true
    },
    {
        "id": 57000157,
        "key": "MN",
        "name": "Mongolia",
        "isCountry": true
    },
    {
        "id": 57000158,
        "key": "ME",
        "name": "Montenegro",
        "isCountry": true
    },
    {
        "id": 57000159,
        "key": "MS",
        "name": "Montserrat",
        "isCountry": true
    },
    {
        "id": 57000160,
        "key": "MA",
        "name": "Morocco",
        "isCountry": true
    },
    {
        "id": 57000161,
        "key": "MZ",
        "name": "Mozambique",
        "isCountry": true
    },
    {
        "id": 57000162,
        "key": "MM",
        "name": "Myanmar (Burma)",
        "isCountry": true
    },
    {
        "id": 57000163,
        "key": "NA",
        "name": "Namibia",
        "isCountry": true
    },
    {
        "id": 57000164,
        "key": "NR",
        "name": "Nauru",
        "isCountry": true
    },
    {
        "id": 57000165,
        "key": "NP",
        "name": "Nepal",
        "isCountry": true
    },
    {
        "id": 57000166,
        "key": "NL",
        "name": "Netherlands",
        "isCountry": true
    },
    {
        "id": 57000167,
        "key": "NC",
        "name": "New Caledonia",
        "isCountry": true
    },
    {
        "id": 57000168,
        "key": "NZ",
        "name": "New Zealand",
        "isCountry": true
    },
    {
        "id": 57000169,
        "key": "NI",
        "name": "Nicaragua",
        "isCountry": true
    },
    {
        "id": 57000170,
        "key": "NE",
        "name": "Niger",
        "isCountry": true
    },
    {
        "id": 57000171,
        "key": "NG",
        "name": "Nigeria",
        "isCountry": true
    },
    {
        "id": 57000172,
        "key": "NU",
        "name": "Niue",
        "isCountry": true
    },
    {
        "id": 57000173,
        "key": "NF",
        "name": "Norfolk Island",
        "isCountry": true
    },
    {
        "id": 57000174,
        "key": "KP",
        "name": "North Korea",
        "isCountry": true
    },
    {
        "id": 57000175,
        "key": "MP",
        "name": "Northern Mariana Islands",
        "isCountry": true
    },
    {
        "id": 57000176,
        "key": "NO",
        "name": "Norway",
        "isCountry": true
    },
    {
        "id": 57000177,
        "key": "OM",
        "name": "Oman",
        "isCountry": true
    },
    {
        "id": 57000178,
        "key": "PK",
        "name": "Pakistan",
        "isCountry": true
    },
    {
        "id": 57000179,
        "key": "PW",
        "name": "Palau",
        "isCountry": true
    },
    {
        "id": 57000180,
        "key": "PS",
        "name": "Palestine",
        "isCountry": true
    },
    {
        "id": 57000181,
        "key": "PA",
        "name": "Panama",
        "isCountry": true
    },
    {
        "id": 57000182,
        "key": "PG",
        "name": "Papua New Guinea",
        "isCountry": true
    },
    {
        "id": 57000183,
        "key": "PY",
        "name": "Paraguay",
        "isCountry": true
    },
    {
        "id": 57000184,
        "key": "PE",
        "name": "Peru",
        "isCountry": true
    },
    {
        "id": 57000185,
        "key": "PH",
        "name": "Philippines",
        "isCountry": true
    },
    {
        "id": 57000186,
        "key": "PN",
        "name": "Pitcairn Islands",
        "isCountry": true
    },
    {
        "id": 57000187,
        "key": "PL",
        "name": "Poland",
        "isCountry": true
    },
    {
        "id": 57000188,
        "key": "PT",
        "name": "Portugal",
        "isCountry": true
    },
    {
        "id": 57000189,
        "key": "PR",
        "name": "Puerto Rico",
        "isCountry": true
    },
    {
        "id": 57000190,
        "key": "QA",
        "name": "Qatar",
        "isCountry": true
    },
    {
        "id": 57000191,
        "key": "RE",
        "name": "Réunion",
        "isCountry": true
    },
    {
        "id": 57000192,
        "key": "RO",
        "name": "Romania",
        "isCountry": true
    },
    {
        "id": 57000193,
        "key": "RU",
        "name": "Russia",
        "isCountry": true
    },
    {
        "id": 57000194,
        "key": "RW",
        "name": "Rwanda",
        "isCountry": true
    },
    {
        "id": 57000195,
        "key": "BL",
        "name": "Saint Barthélemy",
        "isCountry": true
    },
    {
        "id": 57000196,
        "key": "SH",
        "name": "Saint Helena",
        "isCountry": true
    },
    {
        "id": 57000197,
        "key": "KN",
        "name": "Saint Kitts and Nevis",
        "isCountry": true
    },
    {
        "id": 57000198,
        "key": "LC",
        "name": "Saint Lucia",
        "isCountry": true
    },
    {
        "id": 57000199,
        "key": "MF",
        "name": "Saint Martin",
        "isCountry": true
    },
    {
        "id": 57000200,
        "key": "PM",
        "name": "Saint Pierre and Miquelon",
        "isCountry": true
    },
    {
        "id": 57000201,
        "key": "WS",
        "name": "Samoa",
        "isCountry": true
    },
    {
        "id": 57000202,
        "key": "SM",
        "name": "San Marino",
        "isCountry": true
    },
    {
        "id": 57000203,
        "key": "ST",
        "name": "São Tomé and Príncipe",
        "isCountry": true
    },
    {
        "id": 57000204,
        "key": "SA",
        "name": "Saudi Arabia",
        "isCountry": true
    },
    {
        "id": 57000205,
        "key": "SN",
        "name": "Senegal",
        "isCountry": true
    },
    {
        "id": 57000206,
        "key": "RS",
        "name": "Serbia",
        "isCountry": true
    },
    {
        "id": 57000207,
        "key": "SC",
        "name": "Seychelles",
        "isCountry": true
    },
    {
        "id": 57000208,
        "key": "SL",
        "name": "Sierra Leone",
        "isCountry": true
    },
    {
        "id": 57000209,
        "key": "SG",
        "name": "Singapore",
        "isCountry": true
    },
    {
        "id": 57000210,
        "key": "SX",
        "name": "Sint Maarten",
        "isCountry": true
    },
    {
        "id": 57000211,
        "key": "SK",
        "name": "Slovakia",
        "isCountry": true
    },
    {
        "id": 57000212,
        "key": "SI",
        "name": "Slovenia",
        "isCountry": true
    },
    {
        "id": 57000213,
        "key": "SB",
        "name": "Solomon Islands",
        "isCountry": true
    },
    {
        "id": 57000214,
        "key": "SO",
        "name": "Somalia",
        "isCountry": true
    },
    {
        "id": 57000215,
        "key": "ZA",
        "name": "South Africa",
        "isCountry": true
    },
    {
        "id": 57000216,
        "key": "KR",
        "name": "South Korea",
        "isCountry": true
    },
    {
        "id": 57000217,
        "key": "SS",
        "name": "South Sudan",
        "isCountry": true
    },
    {
        "id": 57000218,
        "key": "ES",
        "name": "Spain",
        "isCountry": true
    },
    {
        "id": 57000219,
        "key": "LK",
        "name": "Sri Lanka",
        "isCountry": true
    },
    {
        "id": 57000220,
        "key": "VC",
        "name": "St. Vincent & Grenadines",
        "isCountry": true
    },
    {
        "id": 57000221,
        "key": "SD",
        "name": "Sudan",
        "isCountry": true
    },
    {
        "id": 57000222,
        "key": "SR",
        "name": "Suriname",
        "isCountry": true
    },
    {
        "id": 57000223,
        "key": "SJ",
        "name": "Svalbard and Jan Mayen",
        "isCountry": true
    },
    {
        "id": 57000224,
        "key": "SZ",
        "name": "Swaziland",
        "isCountry": true
    },
    {
        "id": 57000225,
        "key": "SE",
        "name": "Sweden",
        "isCountry": true
    },
    {
        "id": 57000226,
        "key": "CH",
        "name": "Switzerland",
        "isCountry": true
    },
    {
        "id": 57000227,
        "key": "SY",
        "name": "Syria",
        "isCountry": true
    },
    {
        "id": 57000228,
        "key": "TW",
        "name": "Taiwan",
        "isCountry": true
    },
    {
        "id": 57000229,
        "key": "TJ",
        "name": "Tajikistan",
        "isCountry": true
    },
    {
        "id": 57000230,
        "key": "TZ",
        "name": "Tanzania",
        "isCountry": true
    },
    {
        "id": 57000231,
        "key": "TH",
        "name": "Thailand",
        "isCountry": true
    },
    {
        "id": 57000232,
        "key": "TL",
        "name": "Timor-Leste",
        "isCountry": true
    },
    {
        "id": 57000233,
        "key": "TG",
        "name": "Togo",
        "isCountry": true
    },
    {
        "id": 57000234,
        "key": "TK",
        "name": "Tokelau",
        "isCountry": true
    },
    {
        "id": 57000235,
        "key": "TO",
        "name": "Tonga",
        "isCountry": true
    },
    {
        "id": 57000236,
        "key": "TT",
        "name": "Trinidad and Tobago",
        "isCountry": true
    },
    {
        "id": 57000237,
        "key": "TA",
        "name": "Tristan da Cunha",
        "isCountry": true
    },
    {
        "id": 57000238,
        "key": "TN",
        "name": "Tunisia",
        "isCountry": true
    },
    {
        "id": 57000239,
        "key": "TR",
        "name": "Turkey",
        "isCountry": true
    },
    {
        "id": 57000240,
        "key": "TM",
        "name": "Turkmenistan",
        "isCountry": true
    },
    {
        "id": 57000241,
        "key": "TC",
        "name": "Turks and Caicos Islands",
        "isCountry": true
    },
    {
        "id": 57000242,
        "key": "TV",
        "name": "Tuvalu",
        "isCountry": true
    },
    {
        "id": 57000243,
        "key": "UM",
        "name": "U.S. Outlying Islands",
        "isCountry": true
    },
    {
        "id": 57000244,
        "key": "VI",
        "name": "U.S. Virgin Islands",
        "isCountry": true
    },
    {
        "id": 57000245,
        "key": "UG",
        "name": "Uganda",
        "isCountry": true
    },
    {
        "id": 57000246,
        "key": "UA",
        "name": "Ukraine",
        "isCountry": true
    },
    {
        "id": 57000247,
        "key": "AE",
        "name": "United Arab Emirates",
        "isCountry": true
    },
    {
        "id": 57000248,
        "key": "GB",
        "name": "United Kingdom",
        "isCountry": true
    },
    {
        "id": 57000249,
        "key": "US",
        "name": "United States",
        "isCountry": true
    },
    {
        "id": 57000250,
        "key": "UY",
        "name": "Uruguay",
        "isCountry": true
    },
    {
        "id": 57000251,
        "key": "UZ",
        "name": "Uzbekistan",
        "isCountry": true
    },
    {
        "id": 57000252,
        "key": "VU",
        "name": "Vanuatu",
        "isCountry": true
    },
    {
        "id": 57000253,
        "key": "VA",
        "name": "Vatican City",
        "isCountry": true
    },
    {
        "id": 57000254,
        "key": "VE",
        "name": "Venezuela",
        "isCountry": true
    },
    {
        "id": 57000255,
        "key": "VN",
        "name": "Vietnam",
        "isCountry": true
    },
    {
        "id": 57000256,
        "key": "WF",
        "name": "Wallis and Futuna",
        "isCountry": true
    },
    {
        "id": 57000257,
        "key": "EH",
        "name": "Western Sahara",
        "isCountry": true
    },
    {
        "id": 57000258,
        "key": "YE",
        "name": "Yemen",
        "isCountry": true
    },
    {
        "id": 57000259,
        "key": "ZM",
        "name": "Zambia",
        "isCountry": true
    },
    {
        "id": 57000260,
        "key": "ZW",
        "name": "Zimbabwe",
        "isCountry": true
    }
]);

export default countries;