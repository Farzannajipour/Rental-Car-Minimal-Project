import * as axios from "axios";

jest.mock( "axios" );


test( "good response", () => {
    axios.get.mockImplementation( () => Promise.resolve(
        {
            data:
                {
                    "isGooglePowered": false,
                    "docs": [
                        {
                            "country": "Korea, South",
                            "lng": 127.888,
                            "searchType": "G",
                            "alternative": [
                                "KR"
                            ],
                            "index": 1,
                            "bookingId": "city-1416234",
                            "placeType": "C",
                            "placeKey": "677861",
                            "countryIso": "kr",
                            "locationId": "-1",
                            "name": "Ssukpyŏngi",
                            "ufi": 128449,
                            "isPopular": false,
                            "lang": "en",
                            "lat": 35.9672
                        },
                        {
                            "country": "Taiwan",
                            "lng": 121.333,
                            "searchType": "G",
                            "alternative": [
                                "TW"
                            ],
                            "index": 2,
                            "bookingId": "city-2592264",
                            "placeType": "C",
                            "placeKey": "1273580",
                            "countryIso": "tw",
                            "locationId": "-1",
                            "name": "Ssu-ma-k'u-ssu",
                            "ufi": -2637450,
                            "isPopular": false,
                            "lang": "en",
                            "lat": 24.5833
                        },
                        {
                            "country": "Taiwan",
                            "lng": 120.567,
                            "searchType": "G",
                            "alternative": [
                                "TW"
                            ],
                            "index": 3,
                            "bookingId": "city-2592191",
                            "placeType": "C",
                            "placeKey": "1273543",
                            "countryIso": "tw",
                            "locationId": "-1",
                            "name": "Ssu-ch'un",
                            "ufi": -2637397,
                            "isPopular": false,
                            "lang": "en",
                            "lat": 22.55
                        },
                        {
                            "country": "Taiwan",
                            "lng": 121.75,
                            "searchType": "G",
                            "alternative": [
                                "TW"
                            ],
                            "index": 4,
                            "bookingId": "city-2592189",
                            "placeType": "C",
                            "placeKey": "1273542",
                            "countryIso": "tw",
                            "locationId": "-1",
                            "name": "Ssu-ch'ü",
                            "ufi": -2637396,
                            "isPopular": false,
                            "lang": "en",
                            "lat": 24.5
                        },
                        {
                            "country": "Taiwan",
                            "lng": 121.733,
                            "searchType": "G",
                            "alternative": [
                                "TW"
                            ],
                            "index": 5,
                            "bookingId": "city-2592186",
                            "placeType": "C",
                            "placeKey": "1273554",
                            "countryIso": "tw",
                            "locationId": "-1",
                            "name": "Ssu-chiu-i",
                            "ufi": -2637393,
                            "isPopular": false,
                            "lang": "en",
                            "lat": 24.7333
                        },
                        {
                            "country": "Taiwan",
                            "lng": 121.75,
                            "searchType": "G",
                            "alternative": [
                                "TW"
                            ],
                            "index": 6,
                            "bookingId": "city-2592181",
                            "placeType": "C",
                            "placeKey": "992269203",
                            "countryIso": "tw",
                            "locationId": "-1",
                            "name": "Ssu-chieh",
                            "ufi": -2637389,
                            "isPopular": false,
                            "lang": "en",
                            "lat": 24.7833
                        }
                    ],
                    "numFound": 104
                }
        }
    ) );
} );

