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

export const AI_PROMPT = 'Generate travel Plan for Location: {location}, for {totalDays} days for {traveler} with a {budget} budget, give me hotels option list with HotelName, Hotel address, Hotel price, hotel image url, geo coordinates, rating, description and suggest itinerary with place name,place details, place image url, Geo Coordinates, ticket pricing, time to travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format'