import {  CallOutlined, Check } from "@mui/icons-material";

const Maincard = () => {
    return (
        <div className=" text-center lg:w-2/6 w-3/4 z-50 transition duration-500 hover:scale-105 lg:hover:scale-110 bg-white p-5 rounded-lg space-y-3 shadow-xl">
            <h2 className=" text-xl font-semibold">Organisation</h2>

                {/* 35% off div */}

            <div className=" flex justify-center items-center">
                <h2 className=" text-9xl font-bold">35</h2>
                <div className="flex flex-col gap-0 justify-center items-center">
                    <span className="p-0 text-xl font-bold">%</span>
                    <span className="p-0 text-xl font-bold  text-purple-500">off</span>
                </div>
            </div>

                {/* check div */}

            <div className="text-left text-lg px-5 lg:px-10 space-y-3">
                <span className=" flex justify-left  gap-2 text-base"><Check  className=" text-purple-500 text-lg "/> <span> First Premium advantage</span></span>
                <span className=" flex justify-left  gap-2 text-base"><Check  className=" text-purple-500 text-lg "/> <span> Second advantage weekly</span></span>
                <span className=" flex justify-left gap-2 text-base"><Check  className=" text-purple-500 text-lg"/> <span> Third advantage donate to project</span></span>
            </div>

            {/* Contact div */}

            <div>
                <p className=" text-xl flex justify-center items-center gap-2"> Call us at <span className=" text-purple-500 text-lg"> <CallOutlined className=" text-purple-500 text-lg"/> +1000 000 </span> or</p>
            </div>
            <div>
                <button className=" bg-purple-500 w-full p-2 rounded-lg text-white hover:text-purple-500 hover:bg-white hover:border  hover:border-purple-400">Send us an email</button>
            </div>
        </div>
    );
};

export default Maincard;