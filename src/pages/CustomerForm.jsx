import CustomerDetailForm from "../components/CustomerDetailForm";

const CustomerForm = () => {
  return (
    <div>
      <form className="max-w-7xl mx-auto bg-white p-6 rounded shadow space-y-6">
        <CustomerDetailForm />
      </form>
    </div>
  );
};

export default CustomerForm;
