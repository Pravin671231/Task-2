const PaymentDetailForm = () => {
  return (
    <div>
      <div className="bg-gray-100 py-10 px-4">
          {/* Heading*/}
        <div className="max-w-7xl mx-auto flex items-center space-x-3 mb-4">

          <div className="w-5 h-5 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm font-semibold">
            02
          </div>

          <h2 className="text-2xl font-bold text-gray-800">Payment Details</h2>
        </div>
        <div className="max-w-7xl mx-auto bg-white p-6 rounded shadow space-y-6">
          <div className="flex justify-between items-center space-x-4">
            <span className="text-violet-900 font-semibold">CHOOSE ANY ONE</span>
            <div className="flex justify-between items-center space-x-4">
              <label className="flex items-center text-sm text-gray-700 space-x-1">
                <input
                  type="checkbox"
                  className="form-checkbox text-violet-600"
                />
                <span>Credit</span>
              </label>
              <label className="flex items-center text-sm text-gray-700 space-x-1">
                <input
                  type="checkbox"
                  className="form-checkbox text-violet-600"
                />
                <span>Cash</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col space-y-4">
              {/* Bank */}
              <label className="text-gray-500 text-sm" htmlFor="bank">
                Bank
              </label>
              <input
                type="text"
                id="bank"
                name="bank"
                placeholder="Enter Bank"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div className="flex flex-col space-y-4">
              {/* Account No */}
              <label className="text-gray-500 text-sm" htmlFor="accNo">
                Account No
              </label>
              <input
                type="text"
                id="bank"
                name="accNo"
                placeholder="Enter Account No"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailForm;
