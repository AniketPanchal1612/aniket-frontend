import { useState } from "react";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import ProperyFilter from "./ProperyFilter";
import ProprtyList from "./ProprtyList";

const PropertyPage = () => {
  const [showPropertyFilter, setShowPropertyFilter] = useState(false);

  const togglePropertyFilter = () => {
    setShowPropertyFilter(!showPropertyFilter);
  };
  return (
    <div>
      <Navbar/>
      <hr className="w-full border-gray-400"/>
      <div>
        <div className="flex">
          {/* <div className="hidden lg:block lg:w-1/4 pr-4 border-r border-gray-500">
            <ProperyFilter />
          </div> */}

          
          <div className={`lg:block lg:w-1/4 pr-4 border-r border-gray-500 ${showPropertyFilter ? 'absolute bg-white' : 'hidden'}`}>
            <ProperyFilter />
          </div>
          {/* md:w-full */}


          {/* Lists Components */}
          <div className="w-full lg:w-3/4">
            <ProprtyList />
          </div>
        </div>
        <hr className="border-gray-500 borer-2" />
      </div>
      <div className="flex justify-center">
        <button
                  onClick={togglePropertyFilter}

        className="backdrop-blur-md bg-black text-white lg:hidden rounded-lg fixed bottom-4 w-1/3 py-2 text-center z-10">
          Filter
        </button>
      </div>
      <div className="hidden lg:block">

      <Footer />
      </div>
    </div>
  );
};

export default PropertyPage;
