import http from "http";

const server = http.createServer((request, response) => {
    console.log("api is invoked");
    for(const item of json){
        if(request.url === `/${item.country}`) {
            response.end(item.totalOlympicMedals.toString());
        }
    }});

server.listen(8001, () => {
    console.log("normal node js server started at 8001");
})

const json = [
    {
      "country": "United States",
      "goldOlympicMedals": 1127,
      "silverOlympicMedals": 907,
      "bronzeOlympicMedials": 793,
      "totalOlympicMedals": 2827,
      "pop2021": "332915.0730"
    },
    {
      "country": "United Kingdom",
      "goldOlympicMedals": 274,
      "silverOlympicMedals": 299,
      "bronzeOlympicMedials": 310,
      "totalOlympicMedals": 883,
      "pop2021": "68207.1160"
    },
    {
      "country": "Germany",
      "goldOlympicMedals": 283,
      "silverOlympicMedals": 282,
      "bronzeOlympicMedials": 290,
      "totalOlympicMedals": 855,
      "pop2021": "83900.4730"
    },
    {
      "country": "France",
      "goldOlympicMedals": 248,
      "silverOlympicMedals": 276,
      "bronzeOlympicMedials": 316,
      "totalOlympicMedals": 840,
      "pop2021": "65426.1790"
    },
    {
      "country": "Italy",
      "goldOlympicMedals": 246,
      "silverOlympicMedals": 214,
      "bronzeOlympicMedials": 241,
      "totalOlympicMedals": 701,
      "pop2021": "60367.4770"
    },
    {
      "country": "Sweden",
      "goldOlympicMedals": 202,
      "silverOlympicMedals": 216,
      "bronzeOlympicMedials": 234,
      "totalOlympicMedals": 652,
      "pop2021": "10160.1690"
    },
    {
      "country": "China",
      "goldOlympicMedals": 237,
      "silverOlympicMedals": 195,
      "bronzeOlympicMedials": 176,
      "totalOlympicMedals": 608,
      "pop2021": "1444216.1070"
    },
    {
      "country": "Russia",
      "goldOlympicMedals": 195,
      "silverOlympicMedals": 163,
      "bronzeOlympicMedials": 188,
      "totalOlympicMedals": 546,
      "pop2021": "145912.0250"
    },
    {
      "country": "Norway",
      "goldOlympicMedals": 188,
      "silverOlympicMedals": 174,
      "bronzeOlympicMedials": 158,
      "totalOlympicMedals": 520,
      "pop2021": "5465.6300"
    },
    {
      "country": "Canada",
      "goldOlympicMedals": 137,
      "silverOlympicMedals": 166,
      "bronzeOlympicMedials": 198,
      "totalOlympicMedals": 501,
      "pop2021": "38067.9030"
    },
    {
      "country": "Hungary",
      "goldOlympicMedals": 176,
      "silverOlympicMedals": 149,
      "bronzeOlympicMedials": 173,
      "totalOlympicMedals": 498,
      "pop2021": "9634.1640"
    },
    {
      "country": "Japan",
      "goldOlympicMedals": 156,
      "silverOlympicMedals": 158,
      "bronzeOlympicMedials": 183,
      "totalOlympicMedals": 497,
      "pop2021": "126050.8040"
    },
    {
      "country": "Finland",
      "goldOlympicMedals": 144,
      "silverOlympicMedals": 148,
      "bronzeOlympicMedials": 178,
      "totalOlympicMedals": 470,
      "pop2021": "5548.3600"
    },
    {
      "country": "Netherlands",
      "goldOlympicMedals": 130,
      "silverOlympicMedals": 136,
      "bronzeOlympicMedials": 149,
      "totalOlympicMedals": 415,
      "pop2021": "17173.0990"
    },
    {
      "country": "Switzerland",
      "goldOlympicMedals": 106,
      "silverOlympicMedals": 120,
      "bronzeOlympicMedials": 119,
      "totalOlympicMedals": 345,
      "pop2021": "8715.4940"
    },
    {
      "country": "South Korea",
      "goldOlympicMedals": 121,
      "silverOlympicMedals": 112,
      "bronzeOlympicMedials": 104,
      "totalOlympicMedals": 337,
      "pop2021": "51305.1860"
    },
    {
      "country": "Austria",
      "goldOlympicMedals": 82,
      "silverOlympicMedals": 114,
      "bronzeOlympicMedials": 123,
      "totalOlympicMedals": 319,
      "pop2021": "9043.0700"
    },
    {
      "country": "Romania",
      "goldOlympicMedals": 89,
      "silverOlympicMedals": 95,
      "bronzeOlympicMedials": 123,
      "totalOlympicMedals": 307,
      "pop2021": "19127.7740"
    },
    {
      "country": "Poland",
      "goldOlympicMedals": 75,
      "silverOlympicMedals": 90,
      "bronzeOlympicMedials": 141,
      "totalOlympicMedals": 306,
      "pop2021": "37797.0050"
    },
    {
      "country": "Cuba",
      "goldOlympicMedals": 78,
      "silverOlympicMedals": 68,
      "bronzeOlympicMedials": 80,
      "totalOlympicMedals": 226,
      "pop2021": "11317.5050"
    },
    {
      "country": "Bulgaria",
      "goldOlympicMedals": 52,
      "silverOlympicMedals": 89,
      "bronzeOlympicMedials": 83,
      "totalOlympicMedals": 224,
      "pop2021": "6896.6630"
    },
    {
      "country": "Denmark",
      "goldOlympicMedals": 45,
      "silverOlympicMedals": 75,
      "bronzeOlympicMedials": 75,
      "totalOlympicMedals": 195,
      "pop2021": "5813.2980"
    },
    {
      "country": "Belgium",
      "goldOlympicMedals": 41,
      "silverOlympicMedals": 55,
      "bronzeOlympicMedials": 58,
      "totalOlympicMedals": 154,
      "pop2021": "11632.3260"
    },
    {
      "country": "Spain",
      "goldOlympicMedals": 46,
      "silverOlympicMedals": 64,
      "bronzeOlympicMedials": 44,
      "totalOlympicMedals": 154,
      "pop2021": "46745.2160"
    },
    {
      "country": "Ukraine",
      "goldOlympicMedals": 38,
      "silverOlympicMedals": 31,
      "bronzeOlympicMedials": 60,
      "totalOlympicMedals": 129,
      "pop2021": "43466.8190"
    },
    {
      "country": "Brazil",
      "goldOlympicMedals": 30,
      "silverOlympicMedals": 36,
      "bronzeOlympicMedials": 63,
      "totalOlympicMedals": 129,
      "pop2021": "213993.4370"
    },
    {
      "country": "New Zealand",
      "goldOlympicMedals": 46,
      "silverOlympicMedals": 28,
      "bronzeOlympicMedials": 46,
      "totalOlympicMedals": 120,
      "pop2021": "4860.6430"
    },
    {
      "country": "Greece",
      "goldOlympicMedals": 33,
      "silverOlympicMedals": 43,
      "bronzeOlympicMedials": 40,
      "totalOlympicMedals": 116,
      "pop2021": "10370.7440"
    },
    {
      "country": "Kenya",
      "goldOlympicMedals": 31,
      "silverOlympicMedals": 38,
      "bronzeOlympicMedials": 34,
      "totalOlympicMedals": 103,
      "pop2021": "54985.6980"
    },
    {
      "country": "Belarus",
      "goldOlympicMedals": 20,
      "silverOlympicMedals": 32,
      "bronzeOlympicMedials": 44,
      "totalOlympicMedals": 96,
      "pop2021": "9442.8620"
    },
    {
      "country": "Turkey",
      "goldOlympicMedals": 39,
      "silverOlympicMedals": 24,
      "bronzeOlympicMedials": 28,
      "totalOlympicMedals": 91,
      "pop2021": "85042.7380"
    },
    {
      "country": "Czech Republic",
      "goldOlympicMedals": 24,
      "silverOlympicMedals": 28,
      "bronzeOlympicMedials": 35,
      "totalOlympicMedals": 87,
      "pop2021": "10724.5550"
    },
    {
      "country": "South Africa",
      "goldOlympicMedals": 26,
      "silverOlympicMedals": 31,
      "bronzeOlympicMedials": 29,
      "totalOlympicMedals": 86,
      "pop2021": "60041.9940"
    },
    {
      "country": "Jamaica",
      "goldOlympicMedals": 22,
      "silverOlympicMedals": 35,
      "bronzeOlympicMedials": 21,
      "totalOlympicMedals": 78,
      "pop2021": "2973.4630"
    },
    {
      "country": "Argentina",
      "goldOlympicMedals": 21,
      "silverOlympicMedals": 25,
      "bronzeOlympicMedials": 28,
      "totalOlympicMedals": 74,
      "pop2021": "45605.8260"
    },
    {
      "country": "Kazakhstan",
      "goldOlympicMedals": 16,
      "silverOlympicMedals": 24,
      "bronzeOlympicMedials": 31,
      "totalOlympicMedals": 71,
      "pop2021": "18994.9620"
    },
    {
      "country": "Iran",
      "goldOlympicMedals": 19,
      "silverOlympicMedals": 22,
      "bronzeOlympicMedials": 28,
      "totalOlympicMedals": 69,
      "pop2021": "85028.7590"
    },
    {
      "country": "Mexico",
      "goldOlympicMedals": 13,
      "silverOlympicMedals": 24,
      "bronzeOlympicMedials": 32,
      "totalOlympicMedals": 69,
      "pop2021": "130262.2160"
    },
    {
      "country": "North Korea",
      "goldOlympicMedals": 16,
      "silverOlympicMedals": 17,
      "bronzeOlympicMedials": 23,
      "totalOlympicMedals": 56,
      "pop2021": "25887.0410"
    },
    {
      "country": "Ethiopia",
      "goldOlympicMedals": 22,
      "silverOlympicMedals": 11,
      "bronzeOlympicMedials": 21,
      "totalOlympicMedals": 54,
      "pop2021": "117876.2270"
    },
    {
      "country": "Croatia",
      "goldOlympicMedals": 15,
      "silverOlympicMedals": 16,
      "bronzeOlympicMedials": 13,
      "totalOlympicMedals": 44,
      "pop2021": "4081.6510"
    },
    {
      "country": "Azerbaijan",
      "goldOlympicMedals": 7,
      "silverOlympicMedals": 11,
      "bronzeOlympicMedials": 24,
      "totalOlympicMedals": 42,
      "pop2021": "10223.3420"
    },
    {
      "country": "Estonia",
      "goldOlympicMedals": 13,
      "silverOlympicMedals": 11,
      "bronzeOlympicMedials": 17,
      "totalOlympicMedals": 41,
      "pop2021": "1325.1850"
    },
    {
      "country": "Slovenia",
      "goldOlympicMedals": 7,
      "silverOlympicMedals": 13,
      "bronzeOlympicMedials": 20,
      "totalOlympicMedals": 40,
      "pop2021": "2078.7240"
    },
    {
      "country": "Slovakia",
      "goldOlympicMedals": 12,
      "silverOlympicMedals": 16,
      "bronzeOlympicMedials": 8,
      "totalOlympicMedals": 36,
      "pop2021": "5460.7210"
    },
    {
      "country": "Thailand",
      "goldOlympicMedals": 9,
      "silverOlympicMedals": 8,
      "bronzeOlympicMedials": 16,
      "totalOlympicMedals": 33,
      "pop2021": "69950.8500"
    },
    {
      "country": "Georgia",
      "goldOlympicMedals": 8,
      "silverOlympicMedals": 7,
      "bronzeOlympicMedials": 17,
      "totalOlympicMedals": 32,
      "pop2021": "3979.7650"
    },
    {
      "country": "Uzbekistan",
      "goldOlympicMedals": 9,
      "silverOlympicMedals": 6,
      "bronzeOlympicMedials": 17,
      "totalOlympicMedals": 32,
      "pop2021": "33935.7630"
    },
    {
      "country": "Egypt",
      "goldOlympicMedals": 7,
      "silverOlympicMedals": 10,
      "bronzeOlympicMedials": 15,
      "totalOlympicMedals": 32,
      "pop2021": "104258.3270"
    },
    {
      "country": "Indonesia",
      "goldOlympicMedals": 7,
      "silverOlympicMedals": 13,
      "bronzeOlympicMedials": 12,
      "totalOlympicMedals": 32,
      "pop2021": "276361.7830"
    },
    {
      "country": "Ireland",
      "goldOlympicMedals": 9,
      "silverOlympicMedals": 10,
      "bronzeOlympicMedials": 12,
      "totalOlympicMedals": 31,
      "pop2021": "4982.9070"
    },
    {
      "country": "Latvia",
      "goldOlympicMedals": 4,
      "silverOlympicMedals": 14,
      "bronzeOlympicMedials": 10,
      "totalOlympicMedals": 28,
      "pop2021": "1866.9420"
    },
    {
      "country": "Colombia",
      "goldOlympicMedals": 5,
      "silverOlympicMedals": 9,
      "bronzeOlympicMedials": 14,
      "totalOlympicMedals": 28,
      "pop2021": "51265.8440"
    },
    {
      "country": "India",
      "goldOlympicMedals": 9,
      "silverOlympicMedals": 7,
      "bronzeOlympicMedials": 12,
      "totalOlympicMedals": 28,
      "pop2021": "1393409.0380"
    },
    {
      "country": "Mongolia",
      "goldOlympicMedals": 2,
      "silverOlympicMedals": 10,
      "bronzeOlympicMedials": 14,
      "totalOlympicMedals": 26,
      "pop2021": "3329.2890"
    },
    {
      "country": "Lithuania",
      "goldOlympicMedals": 6,
      "silverOlympicMedals": 6,
      "bronzeOlympicMedials": 13,
      "totalOlympicMedals": 25,
      "pop2021": "2689.8620"
    },
    {
      "country": "Nigeria",
      "goldOlympicMedals": 3,
      "silverOlympicMedals": 10,
      "bronzeOlympicMedials": 12,
      "totalOlympicMedals": 25,
      "pop2021": "211400.7080"
    },
    {
      "country": "Portugal",
      "goldOlympicMedals": 4,
      "silverOlympicMedals": 8,
      "bronzeOlympicMedials": 12,
      "totalOlympicMedals": 24,
      "pop2021": "10167.9250"
    },
    {
      "country": "Taiwan",
      "goldOlympicMedals": 5,
      "silverOlympicMedals": 7,
      "bronzeOlympicMedials": 12,
      "totalOlympicMedals": 24,
      "pop2021": "23855.0100"
    },
    {
      "country": "Morocco",
      "goldOlympicMedals": 6,
      "silverOlympicMedals": 5,
      "bronzeOlympicMedials": 12,
      "totalOlympicMedals": 23,
      "pop2021": "37344.7950"
    },
    {
      "country": "Trinidad and Tobago",
      "goldOlympicMedals": 3,
      "silverOlympicMedals": 5,
      "bronzeOlympicMedials": 11,
      "totalOlympicMedals": 19,
      "pop2021": "1403.3750"
    },
    {
      "country": "Algeria",
      "goldOlympicMedals": 5,
      "silverOlympicMedals": 4,
      "bronzeOlympicMedials": 8,
      "totalOlympicMedals": 17,
      "pop2021": "44616.6240"
    },
    {
      "country": "Serbia",
      "goldOlympicMedals": 3,
      "silverOlympicMedals": 6,
      "bronzeOlympicMedials": 6,
      "totalOlympicMedals": 15,
      "pop2021": "8697.5500"
    },
    {
      "country": "Venezuela",
      "goldOlympicMedals": 2,
      "silverOlympicMedals": 4,
      "bronzeOlympicMedials": 9,
      "totalOlympicMedals": 15,
      "pop2021": "28704.9540"
    },
    {
      "country": "Bahamas",
      "goldOlympicMedals": 6,
      "silverOlympicMedals": 2,
      "bronzeOlympicMedials": 6,
      "totalOlympicMedals": 14,
      "pop2021": "396.9130"
    },
    {
      "country": "Armenia",
      "goldOlympicMedals": 2,
      "silverOlympicMedals": 6,
      "bronzeOlympicMedials": 6,
      "totalOlympicMedals": 14,
      "pop2021": "2968.1270"
    },
    {
      "country": "Tunisia",
      "goldOlympicMedals": 4,
      "silverOlympicMedals": 2,
      "bronzeOlympicMedials": 7,
      "totalOlympicMedals": 13,
      "pop2021": "11935.7660"
    },
    {
      "country": "Chile",
      "goldOlympicMedals": 2,
      "silverOlympicMedals": 7,
      "bronzeOlympicMedials": 4,
      "totalOlympicMedals": 13,
      "pop2021": "19212.3610"
    },
    {
      "country": "Australia",
      "goldOlympicMedals": 3,
      "silverOlympicMedals": 4,
      "bronzeOlympicMedials": 5,
      "totalOlympicMedals": 12,
      "pop2021": "25788.2150"
    },
    {
      "country": "Malaysia",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 7,
      "bronzeOlympicMedials": 4,
      "totalOlympicMedals": 11,
      "pop2021": "32776.1940"
    },
    {
      "country": "Liechtenstein",
      "goldOlympicMedals": 2,
      "silverOlympicMedals": 2,
      "bronzeOlympicMedials": 6,
      "totalOlympicMedals": 10,
      "pop2021": "38.2500"
    },
    {
      "country": "Uruguay",
      "goldOlympicMedals": 2,
      "silverOlympicMedals": 2,
      "bronzeOlympicMedials": 6,
      "totalOlympicMedals": 10,
      "pop2021": "3485.1510"
    },
    {
      "country": "Philippines",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 3,
      "bronzeOlympicMedials": 7,
      "totalOlympicMedals": 10,
      "pop2021": "111046.9130"
    },
    {
      "country": "Pakistan",
      "goldOlympicMedals": 3,
      "silverOlympicMedals": 3,
      "bronzeOlympicMedials": 4,
      "totalOlympicMedals": 10,
      "pop2021": "225199.9370"
    },
    {
      "country": "Puerto Rico",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 2,
      "bronzeOlympicMedials": 6,
      "totalOlympicMedals": 9,
      "pop2021": "2828.2550"
    },
    {
      "country": "Israel",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 7,
      "totalOlympicMedals": 9,
      "pop2021": "8789.7740"
    },
    {
      "country": "Zimbabwe",
      "goldOlympicMedals": 3,
      "silverOlympicMedals": 4,
      "bronzeOlympicMedials": 1,
      "totalOlympicMedals": 8,
      "pop2021": "15092.1710"
    },
    {
      "country": "Dominican Republic",
      "goldOlympicMedals": 3,
      "silverOlympicMedals": 2,
      "bronzeOlympicMedials": 2,
      "totalOlympicMedals": 7,
      "pop2021": "10953.7030"
    },
    {
      "country": "Uganda",
      "goldOlympicMedals": 2,
      "silverOlympicMedals": 3,
      "bronzeOlympicMedials": 2,
      "totalOlympicMedals": 7,
      "pop2021": "47123.5310"
    },
    {
      "country": "Cameroon",
      "goldOlympicMedals": 3,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 2,
      "totalOlympicMedals": 6,
      "pop2021": "27224.2650"
    },
    {
      "country": "Qatar",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 4,
      "totalOlympicMedals": 5,
      "pop2021": "2930.5280"
    },
    {
      "country": "Moldova",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 2,
      "bronzeOlympicMedials": 3,
      "totalOlympicMedals": 5,
      "pop2021": "4024.0190"
    },
    {
      "country": "Singapore",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 2,
      "bronzeOlympicMedials": 2,
      "totalOlympicMedals": 5,
      "pop2021": "5896.6860"
    },
    {
      "country": "Iceland",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 2,
      "bronzeOlympicMedials": 2,
      "totalOlympicMedals": 4,
      "pop2021": "343.3530"
    },
    {
      "country": "Luxembourg",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 3,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 4,
      "pop2021": "634.8140"
    },
    {
      "country": "Namibia",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 4,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 4,
      "pop2021": "2587.3440"
    },
    {
      "country": "Costa Rica",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 2,
      "totalOlympicMedals": 4,
      "pop2021": "5139.0520"
    },
    {
      "country": "Kyrgyzstan",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 3,
      "totalOlympicMedals": 4,
      "pop2021": "6628.3560"
    },
    {
      "country": "Lebanon",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 2,
      "bronzeOlympicMedials": 2,
      "totalOlympicMedals": 4,
      "pop2021": "6769.1460"
    },
    {
      "country": "Tajikistan",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 2,
      "totalOlympicMedals": 4,
      "pop2021": "9749.6270"
    },
    {
      "country": "Ghana",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 3,
      "totalOlympicMedals": 4,
      "pop2021": "31732.1290"
    },
    {
      "country": "Peru",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 3,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 4,
      "pop2021": "33359.4180"
    },
    {
      "country": "Vietnam",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 3,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 4,
      "pop2021": "98168.8330"
    },
    {
      "country": "Bahrain",
      "goldOlympicMedals": 2,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 3,
      "pop2021": "1748.2960"
    },
    {
      "country": "Panama",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 0,
      "bronzeOlympicMedials": 2,
      "totalOlympicMedals": 3,
      "pop2021": "4381.5790"
    },
    {
      "country": "Hong Kong",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 1,
      "totalOlympicMedals": 3,
      "pop2021": "7552.8100"
    },
    {
      "country": "Syria",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 1,
      "totalOlympicMedals": 3,
      "pop2021": "18275.7020"
    },
    {
      "country": "Ivory Coast",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 1,
      "totalOlympicMedals": 3,
      "pop2021": "27053.6290"
    },
    {
      "country": "Saudi Arabia",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 2,
      "totalOlympicMedals": 3,
      "pop2021": "35340.6830"
    },
    {
      "country": "Grenada",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 2,
      "pop2021": "113.0210"
    },
    {
      "country": "Suriname",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 0,
      "bronzeOlympicMedials": 1,
      "totalOlympicMedals": 2,
      "pop2021": "591.8000"
    },
    {
      "country": "Kuwait",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 0,
      "bronzeOlympicMedials": 2,
      "totalOlympicMedals": 2,
      "pop2021": "4328.5500"
    },
    {
      "country": "United Arab Emirates",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 0,
      "bronzeOlympicMedials": 1,
      "totalOlympicMedals": 2,
      "pop2021": "9991.0890"
    },
    {
      "country": "Haiti",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 1,
      "totalOlympicMedals": 2,
      "pop2021": "11541.6850"
    },
    {
      "country": "Burundi",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 2,
      "pop2021": "12255.4330"
    },
    {
      "country": "Ecuador",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 2,
      "pop2021": "17888.4750"
    },
    {
      "country": "Zambia",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 1,
      "totalOlympicMedals": 2,
      "pop2021": "18920.6510"
    },
    {
      "country": "Sri Lanka",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 2,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 2,
      "pop2021": "21497.3100"
    },
    {
      "country": "Niger",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 1,
      "totalOlympicMedals": 2,
      "pop2021": "25130.8170"
    },
    {
      "country": "Mozambique",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 0,
      "bronzeOlympicMedials": 1,
      "totalOlympicMedals": 2,
      "pop2021": "32163.0470"
    },
    {
      "country": "Afghanistan",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 0,
      "bronzeOlympicMedials": 2,
      "totalOlympicMedals": 2,
      "pop2021": "39835.4280"
    },
    {
      "country": "Tanzania",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 2,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 2,
      "pop2021": "61498.4370"
    },
    {
      "country": "Bermuda",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 0,
      "bronzeOlympicMedials": 1,
      "totalOlympicMedals": 1,
      "pop2021": "62.0900"
    },
    {
      "country": "United States Virgin Islands",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 1,
      "pop2021": "104.2260"
    },
    {
      "country": "Tonga",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 1,
      "pop2021": "106.7600"
    },
    {
      "country": "Samoa",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 1,
      "pop2021": "200.1490"
    },
    {
      "country": "Barbados",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 0,
      "bronzeOlympicMedials": 1,
      "totalOlympicMedals": 1,
      "pop2021": "287.7110"
    },
    {
      "country": "Montenegro",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 1,
      "pop2021": "628.0530"
    },
    {
      "country": "Guyana",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 0,
      "bronzeOlympicMedials": 1,
      "totalOlympicMedals": 1,
      "pop2021": "790.3260"
    },
    {
      "country": "Fiji",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 0,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 1,
      "pop2021": "902.9060"
    },
    {
      "country": "Djibouti",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 0,
      "bronzeOlympicMedials": 1,
      "totalOlympicMedals": 1,
      "pop2021": "1002.1870"
    },
    {
      "country": "Cyprus",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 1,
      "pop2021": "1215.5840"
    },
    {
      "country": "Mauritius",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 0,
      "bronzeOlympicMedials": 1,
      "totalOlympicMedals": 1,
      "pop2021": "1273.4330"
    },
    {
      "country": "Gabon",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 1,
      "pop2021": "2278.8250"
    },
    {
      "country": "Botswana",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 1,
      "pop2021": "2397.2410"
    },
    {
      "country": "Eritrea",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 0,
      "bronzeOlympicMedials": 1,
      "totalOlympicMedals": 1,
      "pop2021": "3601.4670"
    },
    {
      "country": "Paraguay",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 1,
      "pop2021": "7219.6380"
    },
    {
      "country": "Togo",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 0,
      "bronzeOlympicMedials": 1,
      "totalOlympicMedals": 1,
      "pop2021": "8478.2500"
    },
    {
      "country": "Jordan",
      "goldOlympicMedals": 1,
      "silverOlympicMedals": 0,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 1,
      "pop2021": "10269.0210"
    },
    {
      "country": "Senegal",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 1,
      "pop2021": "17196.3010"
    },
    {
      "country": "Guatemala",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 1,
      "pop2021": "18249.8600"
    },
    {
      "country": "Iraq",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 0,
      "bronzeOlympicMedials": 1,
      "totalOlympicMedals": 1,
      "pop2021": "41179.3500"
    },
    {
      "country": "Sudan",
      "goldOlympicMedals": 0,
      "silverOlympicMedals": 1,
      "bronzeOlympicMedials": 0,
      "totalOlympicMedals": 1,
      "pop2021": "44909.3530"
    }
  ];