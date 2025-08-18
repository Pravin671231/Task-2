import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ContactDetailTable = () => {
  const [contacts, setContacts] = useState([
    {
      name: "",
      designation: "",
      mobile: "",
      tel: "",
      email: "",
    },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...contacts];
    updated[index][field] = value;
    setContacts(updated);
  };

  const addRow = () => {
    setContacts([
      ...contacts,
      {
        name: "",
        designation: "",
        mobile: "",
        tel: "",
        email: "",
      },
    ]);
  };

  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm font-semibold">
            04
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Contact Details</h2>
        </div>

        <button
          onClick={addRow}
          className="text-violet-600 hover:text-violet-800 transition p-2 rounded-full"
          title="Add Row"
        >
          <FontAwesomeIcon icon={faUserPlus} className="h-10 w-10" />
          <span> ADD</span>
        </button>
      </div>
      <div className="max-w-7xl mx-auto bg-white p-6 rounded shadow">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200 text-sm text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left">S.No</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Designation</th>
                <th className="px-4 py-2 text-left">Mobile No</th>
                <th className="px-4 py-2 text-left">Tel No</th>
                <th className="px-4 py-2 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index} className="text-sm">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-2 py-1">
                    <input
                      type="text"
                      value={contact.name}
                      onChange={(e) =>
                        handleChange(index, "name", e.target.value)
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-500"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <input
                      type="text"
                      value={contact.designation}
                      onChange={(e) =>
                        handleChange(index, "designation", e.target.value)
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-500"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <input
                      type="tel"
                      value={contact.mobile}
                      onChange={(e) =>
                        handleChange(index, "mobile", e.target.value)
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-500"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <input
                      type="tel"
                      value={contact.tel}
                      onChange={(e) =>
                        handleChange(index, "tel", e.target.value)
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-500"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <input
                      type="email"
                      value={contact.email}
                      onChange={(e) =>
                        handleChange(index, "email", e.target.value)
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailTable;
