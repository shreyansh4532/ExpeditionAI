import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#f56551]">
          Disover your next adventure with AI:
        </span>{" "}
        Personalized Itineraries at your Fingertips
      </h1>
      <p className="text-center text-xl text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        hendrerit ipsum quis rhoncus
      </p>
      <Button onClick={() => navigate("/create-trip")}>
        Get Started, It's free
      </Button>
    </div>
  );
}

export default Hero;
