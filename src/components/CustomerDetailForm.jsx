import { useState } from "react";

const CustomerDetailForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    country: "",
    salesStatus: "",
    address: "",
    telNo: "",
    website: "",
    location: "",
    trnNo: "",
    businessType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="bg-gray-100 py-10 px-4">
          {/* Heading */}
        <div className="max-w-7xl mx-auto flex items-center space-x-3 mb-4">
          <div className="w-5 h-5 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm font-semibold">
            01
          </div>

          <h2 className="text-2xl font-bold text-gray-800">Customer Details</h2>
        </div>
        <div className="max-w-7xl mx-auto bg-white p-6 rounded shadow space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="flex flex-col space-y-4">
              {/* Business Name */}
              <label className="text-gray-500 text-sm" htmlFor="businessName">
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Business Name"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              {/* Country */}
              <label className="text-gray-500 text-sm" htmlFor="country">
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <option value="">chennai</option>
              </select>
              {/* sales executive */}
              <label className="text-gray-500 text-sm" htmlFor="salesExecutive">
                Sales Executive
              </label>
              <select
                name="salesExecutive"
                // value={formData.salesStatus}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <option value=""></option>
              </select>
              {/* Status */}
              <label className="text-gray-500 text-sm" htmlFor="salesStatus">
                Status
              </label>
              <select
                id="salesStatus"
                name="salesStatus"
                value={formData.salesStatus}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <option value="">active</option>
              </select>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-4">
              {/* address */}
              <label className="text-gray-500 text-sm" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              {/* Tel no */}
              <label className="text-gray-500 text-sm" htmlFor="telNo">
                Tel No
              </label>
              <input
                type="tel"
                id="telNo"
                name="telNo"
                value={formData.telNo}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              {/* website */}
              <label className="text-gray-500 text-sm" htmlFor="website">
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col space-y-4">
              {/* location */}
              <label className="text-gray-500 text-sm" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              {/* TRN no */}
              <label className="text-gray-500 text-sm" htmlFor="trnNo">
                TRN No
              </label>
              <input
                id="trnNo"
                type="text"
                name="trnNo"
                value={formData.trnNo}
                onChange={handleChange}
                placeholder="TRN No"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />

              <label className="text-gray-500 text-sm" htmlFor="businessType">
                Business Type
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <option value="">Exporter,Importer</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerDetailForm;
