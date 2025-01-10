import React,{useState,useEffect} from "react";
import { useSearchParams } from 'react-router-dom';

const initialDtcList = [
  {
    id: "P2227",
    description: 'Barometric Pressure Sensor "A" Circuit Range/Performance',
    status: "Active",
    troubleshootUrl: "https://pwadev.elisa.live/dtc/p2227",
  },
  {
    id: "P2138",
    description:
      'Throttle/Pedal Position Sensor/Switch "D"/"E" Voltage Correlation.',
    status: "Active",
    troubleshootUrl: "https://pwadev.elisa.live/dtc/p2138",
  },
  {
    id: "P2128",
    description: 'Throttle/Pedal Position Sensor/Switch "E" Circuit High',
    status: "Active",
    troubleshootUrl: "https://pwadev.elisa.live/dtc/p2128",
  },
  {
    id: "P1507",
    description: "Side Stand sensor short circuit to the ground.",
    status: "Active",
    troubleshootUrl: "https://pwadev.elisa.live/dtc/1507",
  },
];

const DtcList = () => {
  
    const [dtcList, setDtcList] = useState(initialDtcList);
  const handleTroubleshoot = (url) => {
   
    window.location.href = url;
  };

  const [searchParams] = useSearchParams();
  const query = searchParams.get('errorCode');
  useEffect(()=>{
    if (query) {
      setDtcList((prevList) =>
        prevList.filter((item) => item.id.toLowerCase() !== query.toLowerCase())
      );
      
    }
    },[])


  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="bg-grey-100 flex flex-col items-center   h-[100vh] w-full">
        <div className="border border-[#000000] h-full flex-grow flex flex-col items-center w-full ">
          <div className="flex-grow w-full">
            <div className="bg-blue-500 text-white w-full py-4 px-3 text-left text-xl font-bold shadow-md">
              DTC List
            </div>
            {dtcList.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-2 border relative mb-2 mx-2"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-lg font-semibold text-gray-800">
                    {item.id}
                  </span>
                  <span
                    className={`${
                      item.status === "Active"
                        ? "text-red-500"
                        : "text-gray-500"
                    } font-bold`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    {item.description}
                  </span>
                  <button
                    onClick={() => handleTroubleshoot(item.troubleshootUrl)}
                    className="bg-blue-500 text-white text-sm font-medium py-1 px-3 rounded hover:bg-blue-600"
                  >
                    Troubleshoot
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-between mt-4 mb-4 px-4 gap-2">
            <button className="bg-blue-500 text-white py-2 px-4 sm:px-20 shadow hover:bg-blue-600 flex-1">
              REFRESH
            </button>
            <button className="bg-red-500 text-white py-2 px-4 sm:px-20 shadow hover:bg-red-600 flex-1">
              CLEAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DtcList;
