import React from "react";
import { DeleteUser, useFetch } from "../../utils/functions";

const Table = ({ editUser }) => {
  const { isLoading, contactList } = useFetch();
  console.log(contactList);
  return (
    <div>
      <div className="flex flex-col  shadow-lg">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <h1 className="text-2xl font-normal bg-white ">CONTACTS</h1>
              <table className="min-w-full  ">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium  text-gray-900 px-6 py-4 "
                    >
                      User Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 "
                    >
                      Phone Number
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 "
                    >
                      Gender
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 "
                    >
                      Delete
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 "
                    >
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr className="bg-gray-100 border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Loading
                      </td>
                    </tr>
                  ) : contactList?.lenght === 0 ? (
                    <tr className="bg-gray-100 border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        No Result Found
                      </td>
                    </tr>
                  ) : (
                    contactList.map((item, i) => (
                      <tr key={i} className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.userName}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.phoneNumber}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.gender}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <lord-icon
                            onClick={() => DeleteUser(item.id)}
                            src="https://cdn.lordicon.com/exkbusmy.json"
                            trigger="hover"
                            style={{ width: 30, height: 30 }}
                            colors="outline:#121331,primary:#646e78,secondary:#c71f16,tertiary:#ebe6ef"
                          />
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <lord-icon
                            onClick={() =>
                              editUser(
                                item.id,
                                item.userName,
                                item.phoneNumber,
                                item.gender
                              )
                            }
                            src="https://cdn.lordicon.com/qtqvorle.json"
                            trigger="hover"
                            colors="outline:#121331,primary:#646e78,secondary:#ebe6ef,tertiary:#c71f16"
                            style={{ width: 30, height: 30 }}
                          />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
