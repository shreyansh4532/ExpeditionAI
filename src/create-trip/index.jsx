import logo from "../../public/logo.svg";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";
import {
  AI_PROMPT,
  SelectTravelBudget,
  SelectTravelList,
} from "@/constants/options";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { chatSession } from "@/service/AImodel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useGoogleLogin } from "@react-oauth/google";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { useNavigate } from "react-router-dom";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function CreateTrip() {
  // const [address, setAddress] = useState("");
  const [place, setPlace] = useState();
  // const [inputPlace, setInputPlace] = useState("");
  // const [selectedPlace, setSelectedPlace] = useState({});
  // const [placeSuggestion, setPlaceSuggestion] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // https://api.locationiq.com/v1/autocomplete?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING
  // useEffect(() => {
  //   const handleInput = async () => {
  //     try {
  //       const res = await axios.get(
  //         `https://api.locationiq.com/v1/autocomplete?key=${
  //           import.meta.env.VITE_LOCIQ_API_KEY
  //         }&q=${inputPlace}`
  //       );
  //       console.log(res);
  //       if (res.status === 200) {
  //         setPlaceSuggestion(res.data);
  //       } else {
  //         setPlaceSuggestion([]);
  //       }
  //       console.log("New array", placeSuggestion);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   if (inputPlace !== selectedPlace.display_name) handleInput();
  // }, [inputPlace]);

  // const handleSuggestionClick = (place) => {
  //   setSelectedPlace(place);
  //   setInputPlace(place.display_name);
  //   setPlaceSuggestion([]);

  //   handleInputChange("location", place.display_name);
  // };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(formData);
  };

  const login = useGoogleLogin({
    onSuccess: (res) => getUserProfile(res),
    onError: (err) => console.log(err),
  });

  const getUserProfile = async (tokenInfo) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      );
      // console.log(res);

      if (res.status === 200 && res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
        setOpenDialog(false);
        handleGenerateTrip();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGenerateTrip = async () => {
    const user = localStorage.getItem("user");

    // check if user is present
    if (!user) {
      setOpenDialog(true);
      return;
    }

    // Check if user has filled all the input fields if not display a toast msg
    if (
      (formData?.noOfDays > 10 && !formData?.location) ||
      !formData?.budget ||
      !formData?.travelerCount
    ) {
      toast.error("Please enter all the fields.");
      return;
    }

    console.log(formData);
    setLoading(true);
    // Replace prompt with appropriate values
    const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData?.location)
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{budget}", formData?.budget)
      .replace("{traveler}", formData?.travelerCount)
      .replace("{totalDays}", formData?.noOfDays);

    // check if prompt is correct
    console.log(FINAL_PROMPT);

    // Pass the prompt to the AI model
    const result = await chatSession.sendMessage(FINAL_PROMPT);

    // console.log(result);

    console.log(result?.response?.text());
    setLoading(false);
    // Stringifying it 'cause gemini generated data does not terminate string in some place.
    saveTripData(JSON.stringify(result?.response?.text()));
  };

  const saveTripData = async (TripData) => {
    setLoading(true);
    const docID = Date.now().toString();
    const user = JSON.parse(localStorage.getItem("user"));

    await setDoc(doc(db, "AItrips", docID), {
      userSelection: formData,
      tripData: JSON.parse(JSON.parse(TripData)), // parse this twice.
      userEmail: user?.email,
      id: docID,
    });
    setLoading(false);

    navigate(`/view-trip/${docID}`);
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 mt-10 px-5">
      <h2 className="font-bold text-3xl">
        Tell up your travel preference 🌴🏖️
      </h2>
      <p className="text-gray-500 text-xl mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        hendrerit ipsum quis rhoncus
      </p>

      <div className="mt-14 flex flex-col gap-10">
        <div>
          <h2 className="text-xl font-medium my-3">Enter destination</h2>

          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_CLOUD_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {setPlace(v); console.log(v.label); handleInputChange('location', v.label);}
            }}
          />

          {/* <Input
            className="border-gray-700"
            type="text"
            name="address-1"
            value={inputPlace}
            onChange={(e) => setInputPlace(e.target.value)}
            placeholder="Search Place..."
          />
          {placeSuggestion.length > 0 && (
            <ul className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md mx-auto mt-4">
              {placeSuggestion.map((place) => {
                return (
                  <li
                    key={place.place_id}
                    onClick={() => handleSuggestionClick(place)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-none"
                  >
                    <span className="font-semibold text-gray-700">
                      {place.display_name}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}*/}
        </div> 

        <div>
          <h2 className="text-xl font-medium my-3">
            How many days are you planning your trip for?
          </h2>
          <Input
            type="number"
            placeholder="Ex.3"
            className="border-gray-700"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-xl font-medium my-3">{"What's"} your budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelBudget.map((item, index) => (
              <div
                key={index}
                className={`p-4 cursor-pointer hover:shadow-lg rounded-lg border ${
                  formData?.budget === item.title && "shadow-lg border-black"
                }`}
                onClick={() => handleInputChange("budget", item.title)}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-medium my-3">
            Who do you plan to travel with?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelList.map((item, index) => (
              <div
                key={index}
                className={`p-4 cursor-pointer hover:shadow-lg rounded-lg border ${
                  formData?.travelerCount === item.people &&
                  "shadow-lg border-black"
                }`}
                onClick={() => handleInputChange("travelerCount", item.people)}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="justify-end my-5 flex">
        <Button onClick={handleGenerateTrip} disable={loading}>
          {loading ? (
            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
          ) : (
            "Generate Trip"
          )}{" "}
        </Button>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src={logo} alt="" />
              <h2 className="font-bold text-lg mt-7">Sign In with Google</h2>
              <p>Sign In to the App securely with Google Authentication</p>
              <Button
                className="w-full mt-5 flex gap-4 items-center"
                onClick={login}
              >
                <FcGoogle className="h-7 w-7" /> Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;
