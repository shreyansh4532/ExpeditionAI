import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import InfoSection from "../components/InfoSection";

function ViewTrip() {

    const {tripID} = useParams();

    const [trip, setTrip] = useState([]);

    useEffect(() => {
        getTripData();
    }, [tripID])

    const getTripData = async () => {
        const docRef = doc(db, "AItrips", tripID);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setTrip(docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
          toast.error("No Trip Found.")
        }
    }

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5">
        {/* Info section */}
        <InfoSection trip={trip}/>

        {/* Recom. hotels */}

        {/* Itinerary / Daily plan */}

        {/* Footer */}
    </div>
  )
}

export default ViewTrip