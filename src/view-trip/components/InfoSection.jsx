import { Button } from "@/components/ui/button";
import { getPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalAPI";
import { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";

function InfoSection({ trip }) {
  const [imageURL, setImageURL] = useState();

  useEffect(() => {
    getPlacePhotos();
  }, [trip]);

  const getPlacePhotos = async () => {
    const data = {
      textQuery: trip?.userSelection?.location,
    };
    const result = await getPlaceDetails(data).then((res) => {
      console.log(res.data);

      const photoURL = PHOTO_REF_URL.replace('{NAME}', res.data.places[0].photos[3].name);
      console.log(photoURL);
      setImageURL(photoURL);
    });
  };
 

  return (
    <div>
      {/* placeholder img */}
      <img
        className="object-cover mt-10 rounded-3xl  h-[400px] w-full"
        src={imageURL ? imageURL : '/placeholder.jpg'}
        alt=""
      />

      {/* place info. */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 my-5">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 text-gray-500 bg-gray-200 rounded-full text-xs md:text-lg">
              🗓️ {trip?.userSelection?.noOfDays} Day
            </h2>
            <h2 className="p-1 px-3 text-gray-500 bg-gray-200 rounded-full text-xs md:text-lg">
              💰 {trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 text-gray-500 bg-gray-200 rounded-full text-xs md:text-lg">
              🥂 No. Of Travelers: {trip?.userSelection?.travelerCount}
            </h2>
          </div>
        </div>
        <Button>
          <IoIosSend className="text-xl" />
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
