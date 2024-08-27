import { getPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalAPI";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function UserTripCard({trip}) {

    const [imageURL, setImageURL] = useState();

    useEffect(() => {
      getPlacePhotos();
    }, [trip]);
  
    const getPlacePhotos = async () => {
      const data = {
        textQuery: trip?.userSelection?.location,
      };
      const result = await getPlaceDetails(data).then((res) => {
        // console.log(res.data);
  
        const photoURL = PHOTO_REF_URL.replace('{NAME}', res.data.places[0].photos[3].name);
        // console.log(photoURL);
        setImageURL(photoURL);
      });
    };

  return (
    <Link to={`/view-trip/${trip.id}`}>
    <div className="hover:scale-105 transition-all">
        <img src={imageURL ? imageURL : '/placeholder.jpg'} alt="" className="object-cover rounded-xl h-[220px]"/>

        <div>
            <h2 className="font-bold txt-lg">{trip?.userSelection?.location}</h2>
            <h3 className="text-sm text-gray-500">{trip?.userSelection?.noOfDays} days trip with {trip?.userSelection?.budget} budget</h3>
        </div>
    </div>
    </Link> 
  )
}

export default UserTripCard