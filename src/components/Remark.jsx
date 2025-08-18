const Remark = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      {/* heading */}
      <div className=" max-w-7xl mx-auto flex items-center space-x-3 mb-4">
        <div className="w-6 h-6 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm font-semibold">
          03
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Remark</h2>
      </div>
      <form className="max-w-7xl mx-auto bg-white p-6 rounded shadow space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col space-y-4 md:col-span-3">
            <label className="text-gray-500 text-sm" htmlFor="remarks">
              Remarks
            </label>
            <textarea
              id="remarks"
              name="remarks"
              placeholder="Enter remarks here..."
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              rows={5}
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Remark;
