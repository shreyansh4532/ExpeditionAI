export const SelectTravelList = [
    {
        id: 1,
        title: 'Just Me',
        desc: `A solo traveler's exploration`,
        icon: '✈️',
        people: '1',
    },
    {
        id: 2,
        title: 'Couple',
        desc: `Two travelers in tandem`,
        icon: '🥂',
        people: '2 people',
    },
    {
        id: 3,
        title: 'Family',
        desc: `A group of fun loving adventurers`,
        icon: '👨‍👩‍👧‍👦',
        people: '3 to 5 people',
    },
    {
        id: 4,
        title: 'Friends',
        desc: `A bunch of thrill seekers`,
        icon: '🫂',
        people: '5 to 10 people',
    },
];

export const SelectTravelBudget = [
    {
        id: 1,
        title: 'Cheap',
        desc: `Stay conscious about costs`,
        icon: '🪙',
    },
    {
        id: 2,
        title: 'Moderate',
        desc: `Keep cost on the average side`,
        icon: '💰',
    },
    {
        id: 3,
        title: 'Luxury',
        desc: `Cost is not an issue`,
        icon: '💸',
    },
];

export const AI_PROMPT = `Generate travel Plan for Location: {location}, for {totalDays} days for {traveler} people with a {budget} budget, give me "hotelsOptions" list with "hotelName", "hotelAddress", "hotelPrice", "hotelImageUrl" , "geoCoordinates", "rating", "description" and suggest itinerary with "placeName", "placeDetails", placeImageUrl, "geoCoordinates", "ticketPricing", "timeToTravel" each of the location for {totalDays} days with each day plan with "bestTimeToVisit" in JSON format close all the quotation marks, there shouldn\'t be any error regarding JSON and remember to keep the key names same as provided inside double quotes. The template should look something like below - 
{
  "hotelsOptions": [
    {
      "hotelName": "{hotelName}",
      "hotelAddress": "{hotelAddress}",
      "hotelPrice": "{hotelPrice}",
      "hotelImageUrl": "{hotelImageUrl}",
      "geoCoordinates": "{latitude},{longitude}",
      "rating": "{rating}",
      "description": "{hotelDescription}"
    },
    // Add more hotel options here
  ],
  "itinerary": [
    {
      "day": 1,
      "bestTimeToVisit": "{bestTimeToVisitDay1}",
      "plan": [
        {
          "placeName": "{placeName1}",
          "placeDetails": "{placeDetails1}",
          "placeImageUrl": "{placeImageUrl1}",
          "geoCoordinates": "{latitude1},{longitude1}",
          "ticketPricing": "{ticketPricing1}",
          "timeToTravel": "{timeToTravel1}"
        },
        // Add more places to visit on day 1 here
      ]
    },
    // Add more days to the itinerary here
  ]
}
`