import { useState } from "react";

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec",
];

const BusinessLaneTable = () => {
  const [values, setValues] = useState(Array(12).fill(""));

  const handleChange = (index, value) => {
    const updated = [...values];
    updated[index] = value;
    setValues(updated);
  };

  return (
    <div className="bg-gray-100 py-10 px-4">
      {/* Header with step and title + selects aligned right */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-6">
        {/* Step and Title */}
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm font-semibold">
            05
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Business Lane</h2>
        </div>

        {/* Sector & Mode Selects */}
        <div className="flex items-end space-x-6">
          <div className="flex items-center space-x-2">
            <label className="block text-sm text-gray-600 mb-1">Sector</label>
            <select className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm">
              <option value="">India</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label className="block text-sm text-gray-600 mb-1">Mode</label>
            <select className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm">
              <option value="">Air</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto bg-white p-6 rounded shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="text-left text-sm text-gray-700">
              <tr>
                {months.map((month, index) => (
                  <th key={index} className="px-2 py-2">{month}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {months.map((_, index) => (
                  <td key={index} className="px-2 py-2">
                    <input
                      type="text"
                      value={values[index]}
                      onChange={(e) => handleChange(index, e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-500"
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BusinessLaneTable;
