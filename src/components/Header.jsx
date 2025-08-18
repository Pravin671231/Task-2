import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div>
      <header className="bg-violet-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <button className="ml-4 bg-white text-violet-600 px-4 py-2 rounded hover:bg-gray-100 transition flex items-center space-x-3">
            <div className="bg-violet-600 rounded-full p-2 flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-white" />
            </div>

            <div className="flex flex-col items-start leading-tight text-left">
              <span className="font-semibold">BUYER</span>
              <span className="text-sm text-gray-500">
                I want to buy a product
              </span>
            </div>
          </button>
          <button className="ml-4 bg-white text-violet-600 px-4 py-2 rounded hover:bg-gray-100 transition flex items-center space-x-3">
            <div className="bg-violet-600 rounded-full p-2 flex items-center justify-center">
              <FontAwesomeIcon icon={faHouse} className="h-5 w-5 text-white" />
            </div>

            <div className="flex flex-col items-start leading-tight text-left">
              <span className="font-semibold">VENDOR</span>
              <span className="text-sm text-gray-500">
                I want to sell a products
              </span>
            </div>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
