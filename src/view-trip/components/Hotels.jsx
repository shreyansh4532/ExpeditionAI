
import HotelCard from "./HotelCard";

function Hotels({ trip }) {

   return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
        {trip?.tripData?.hotelsOptions.map((item, index) => (
          <HotelCard hotel={item} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
