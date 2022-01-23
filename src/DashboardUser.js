import React, { useState } from "react";
import axios from "axios";
import DashboardNavbar from './components/DashboardNavbar'

function DashboardUser() {
  const [citizen, setCitizen] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    axios.get("http://localhost:8080/citizens").then((response) => {
      setCitizen(response.data);
    });
  }, []);

  if (citizen) {
    console.log(citizen);

    return (
      <div>
        <DashboardNavbar />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <h1 className="text-3xl text-left my-10 font-bold text-gray-900">
              Αιτήματα προς έγκριση
            </h1>

            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                          >
                            Όνομα
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                          >
                            Επώνυμο
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                          >
                            Τηλέφωνο
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                          >
                            ΑΦΜ
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                          >
                            Τόπος Γέννησης
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                          >
                            Ημερομηνία Γέννησης
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                          >
                            Σταρτιωτικός Αριθμός
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                          >
                            Αιτιολόγηση Αναβολής
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                          >
                            Ενέργειες
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {citizen.map((citizen) => (
                          
                          <tr key={citizen.email}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <h2>{citizen.firstName}</h2>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <h2>{citizen.lastName}</h2>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <h2>{citizen.email}</h2>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <h2>{citizen.phoneNumber}</h2>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                              <h2>{citizen.afm}</h2>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <h2>{citizen.placeOfBirth}</h2>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <h2>{citizen.dateOfBirth}</h2>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <h2>{citizen.militaryNumber}</h2>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <h2>{citizen.reasonOfPostpone}</h2>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                  type="button"
                                  className="py-2 mx-2 px-4 flex justify-center items-center  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                                >
                                  Αποδοχή
                                </button>
                                <button
                                  type="button"
                                  className="mt-3 w-full inline-flex justify-center rounded-md  px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                  Κατάργηση
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            

            {/* /End replace */}
          </div>
        </main>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default DashboardUser;
