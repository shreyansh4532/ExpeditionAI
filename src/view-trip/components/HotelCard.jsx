import { getPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalAPI";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HotelCard({hotel}) {

    const [imageURL, setImageURL] = useState();

    useEffect(() => {
      getPlacePhotos();
    }, [hotel]);
  
    const getPlacePhotos = async () => {
      const data = {
        textQuery: hotel?.hotelName,
      };
      const result = await getPlaceDetails(data).then((res) => {
        // console.log(res.data);
  
        const photoURL = PHOTO_REF_URL.replace('{NAME}', res.data.places[0].photos[3].name);
        // console.log(photoURL);
        setImageURL(photoURL);
      });
    };

  return (
    <Link
      to={`https://www.google.com/maps/search/?api=1&query=${hotel?.hotelName},${hotel?.hotelAddress}`}
      target="_blank"
    >
      <div className="hover:scale-105 transition-all cursor-pointer">
        <img src={imageURL ? imageURL : '/placeholder.jpg'} alt="" className="rounded-xl object-cover h-[200px] w-full" />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium">{hotel?.hotelName}</h2>
          <h2 className="text-xs text-gray-500">📍 {hotel?.hotelAddress}</h2>
          <h2 className="text-sm">💰 {hotel?.hotelPrice}</h2>
          <h2 className="text-sm">⭐ {hotel?.rating}</h2>
        </div>
      </div>
    </Link>
  );
}

export default HotelCard;
