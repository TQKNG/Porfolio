import React from "react";
import OrderTrackingScreen from '../assets/OrderTrackingScreen.jpg'
import WarehouseUtlizationTool from '../assets/WarehouseUtilizationTool.jpg'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f] ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Card Item */}
          <div
            style={{ backgroundImage: `url(${OrderTrackingScreen})` }}
            className="shadow-lg shadow-[#060c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Order Tracking App
              </span>
              <div className="pt-8 text-center">
                <a href="https://ordertracking-app.vercel.app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/TQKNG/OrderTracking-Front"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WarehouseUtlizationTool})` }}
            className="shadow-lg shadow-[#060c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Warehouse Utilization
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://warehouse-utilization-tool.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/TQKNG/Warehouse-Utilization-Tool"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
