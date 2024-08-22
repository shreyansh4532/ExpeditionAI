import { Link } from "react-router-dom";

function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
        {trip?.tripData?.hotel_options.map((item, index) => (
          <Link key={index} to={`https://www.google.com/maps/search/?api=1&query=${item?.HotelName},${item?.["Hotel address"]}`} target="_blank">
            <div className="hover:scale-105 transition-all cursor-pointer">
              <img src="/placeholder.jpg" alt="" className="rounded-xl" />
              <div className="my-2 flex flex-col gap-2">
                <h2 className="font-medium">{item?.HotelName}</h2>
                <h2 className="text-xs text-gray-500">
                  📍 {item?.["Hotel address"]}
                </h2>
                <h2 className="text-sm">💰 {item?.["Hotel price"]}</h2>
                <h2 className="text-sm">⭐ {item?.rating}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
