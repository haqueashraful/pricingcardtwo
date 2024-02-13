import { Check } from "@mui/icons-material";
import airbnb from "../assets/images/airbnb.svg"
import bissel from "../assets/images/bissell.svg"
import ge from "../assets/images/ge.svg"
import micros from "../assets/images/microsoft.svg"

const Sidecard = () => {
  return (
    <div className=" bg-white lg:w-3/6 -mt-3 lg:-ml-3 p-14 transition duration-500 hover:scale-105  lg:hover:scale-110 rounded-lg space-y-3 z-10 shadow-xl m-0">

        {/* Check section */}
      <div>
        <span className=" flex justify-left  gap-2 text-base">
          <Check className=" text-purple-500 text-lg " />{" "}
          <span> First Premium advantage</span>
        </span>
        <span className=" flex justify-left  gap-2 text-base">
          <Check className=" text-purple-500 text-lg " />{" "}
          <span> Second advantage weekly</span>
        </span>
        <span className=" flex justify-left gap-2 text-base">
          <Check className=" text-purple-500 text-lg" />{" "}
          <span> Third advantage donate to project</span>
        </span>
        <span className=" flex justify-left gap-2 text-base">
          <Check className=" text-purple-500 text-lg" />{" "}
          <span> Fourth, access to all components weekly</span>
        </span>
      </div>

      <div>
        <p> Team can be any size, and you can add or switch members as needed Companies using our platform include:</p>

        {/* icon div */}

        <div className=" lg:flex lg:flex-row flex flex-col justify-between items-center w-full mx-auto mt-3">
            <img src={airbnb} alt="" />
            <img src={bissel} alt="" />
            <img src={ge} alt="" />
            <img src={micros} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidecard;
