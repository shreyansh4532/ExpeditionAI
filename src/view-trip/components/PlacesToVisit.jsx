import PlaceCard from "./PlaceCard";

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Places To Visit</h2>

      <div className="flex flex-col gap-5 mt-5">
        {trip?.tripData?.itinerary.map((item, index) => (
          <div className="" key={index}>
            <h2 className="font-bold text-lg">Day {item.day}</h2>

            <div className="grid grid-cols-2 mt-2 gap-5">
              {item?.plan.map((p, i) => (
                <PlaceCard key={i} placeInfo={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
