function PlaceCard({ placeInfo }) {
  return (
    <div className="rounded-xl border border-gray-950 max-w-md overflow-hidden cursor-pointer hover:scale-105 transition-all">
      <div className="flex p-2 gap-3">
        <div className="w-80 h-40">
          <img
            src="/placeholder.jpg"
            className="object-cover w-full h-full rounded-xl"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-2">
          {/* Place name */}
          <h2 className="font-bold text-lg">{placeInfo.placeName}</h2>
          {/* Place details */}
          <p className="font-normal text-gray-500">{placeInfo.placeDetails}</p>

          {/* Time */}
          <span className="font-medium">🕛 {placeInfo.timeToTravel}</span>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
