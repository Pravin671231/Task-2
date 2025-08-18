import CustomerDetailForm from "./components/CustomerDetailForm";
import Header from "./components/Header";
import PaymentDetailForm from "./components/PaymentDetailForm";
import Remark from "./components/Remark";
import ContactDetailTable from "./components/ContactDetailTable";
import BusinessLaneTable from "./components/BusinessLaneTable";
function App() {
  return (
    <>
      <Header />
      <CustomerDetailForm />
      <PaymentDetailForm />
      <Remark />
      <ContactDetailTable />
      <BusinessLaneTable />

      <div className="max-w-7xl mx-auto my-6">
        <div className=" inline-flex space-x-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Buyer
          </button>
          <button
            type="reset"
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
