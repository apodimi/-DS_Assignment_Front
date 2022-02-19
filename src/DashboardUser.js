import React, { useState, Fragment, useRef } from "react";
import axios from "axios";
import DashboardNavbar from "./components/DashboardNavbar";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

function DashboardUser() {
  const [citizen, setCitizen] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [variables, setVariables] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    AFM: "",
    placeOfBirth: "",
    dateOfBirth: "",
    militaryNumber: "",
  });
  const [disability, setDisability] = useState(true);
  const [editButton, setEditButton] = useState("Επεξεργασία");
  const [updateData, setUpdateData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    AFM: "",
    placeOfBirth: "",
    dateOfBirth: "",
    militaryNumber: "",
    reasonOfPostpone: "",
  });

  const changeHandler = (e) => {
    setUpdateData({ ...variables, [e.target.name]: e.target.value });
  };

 

  function OpenModal(index) {
    setOpen(true);
    setVariables({
      firstName: citizen[index].firstName,
      lastName: citizen[index].lastName,
      email: citizen[index].email,
      phoneNumber: citizen[index].phoneNumber,
      AFM: citizen[index].afm,
      placeOfBirth: citizen[index].placeOfBirth,
      dateOfBirth: citizen[index].dateOfBirth,
      militaryNumber: citizen[index].militaryNumber,
      reasonOfPostpone: citizen[index].reasonOfPostpone,
      id: citizen[index].id
    });
  } 
  
  function UpdateData(id){
    axios.get(`http://localhost:8080/citizen/update?id=${id}&firstName=${updateData.firstName}&lastName=${updateData.lastName}&email=${updateData.email}&phoneNumber=${updateData.phoneNumber}&afm=${updateData.AFM}&placeOfBirth=${updateData.placeOfBirth}&dateOfBirth=${updateData.dateOfBirth}&militaryNumber=${updateData.militaryNumber}&file=name.txt&reasonOfPostpone=${updateData.reasonOfPostpone}
    `);
    window.location.reload(false);
  }

  function Delete(id) {
    axios.get(`http://localhost:8080/citizen/delete?id=${id}`, {
      headers: { Authorization: "***" },
    });
    window.location.reload(false);
  }

  function Accept(id) {
    axios.get(`http://localhost:8080/citizen/accept?id=${id}`, {
      headers: { Authorization: "***" },
    });
    window.location.reload(false);
  }

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
                            Ενέργειες
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {citizen.map((citizen, index) => (
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
                              <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                  type="button"
                                  onClick={() => Accept(citizen.id)}
                                  className="py-2 mx-2 px-4 flex justify-center items-center rounded-md bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  "
                                >
                                  Αποδοχή
                                </button>
                                <button
                                  type="button"
                                  onClick={() => Delete(citizen.id)}
                                  className="mt-3 w-full inline-flex justify-center border-2 rounded-md border-red-600  px-4 py-2 bg-white text-base font-medium text-red-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                  Κατάργηση
                                </button>
                                <button
                                  type="button"
                                  onClick={function (event) {
                                    OpenModal(index);
                                    if (editButton === "Αποθήκευση") {
                                      setEditButton("Επεξεργασία");
                                      setDisability(true);
                                    }
                                  }}
                                  className="mt-3 w-full inline-flex justify-center rounded-md px-4 py-2 bg-white text-base font-medium text-blue-500	 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                  Λεπτομέρειες/Επεξεργασία
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

            <Transition.Root show={open} as={Fragment}>
              <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
              >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </Transition.Child>

                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <Dialog.Title
                              as="h1"
                              className="text-2xl leading-6 font-bold text-gray-900 pb-4"
                            >
                              {" "}
                              Πληροφορίες Αίτησης{" "}
                            </Dialog.Title>
                            <h2 className="text-xl font-semibold py-2">Όνομα</h2>
                            <input
                              disabled={disability}
                              onChange={changeHandler}
                              id="firstName"
                              name="firstName"
                              type="text"
                              required=""
                              class=" block w-full px-5 py-3 text-base text-neutral-600 placeholder-black transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 "
                              placeholder={variables.firstName}
                            />
                            <h2 className="text-xl font-semibold py-2">Επώνυμο</h2>
                            <input
                              disabled={disability}
                              onChange={changeHandler}
                              id="lastName"
                              name="lastName"
                              type="text"
                              required=""
                              class=" block w-full px-5 py-3 text-base text-neutral-600 placeholder-black transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 "
                              placeholder={variables.lastName}
                            />
                            <h2 className="text-xl font-semibold py-2">Email</h2>
                            <input
                              disabled={disability}
                              onChange={changeHandler}
                              id="email"
                              name="email"
                              type="text"
                              required=""
                              class=" block w-full px-5 py-3 text-base text-neutral-600 placeholder-black transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 "
                              placeholder={variables.email}
                            />
                            <h2 className="text-xl font-semibold py-2">Τηλέφωνο</h2>
                            <input
                              disabled={disability}
                              onChange={changeHandler}
                              id="phoneNumber"
                              name="phoneNumber"
                              type="text"
                              required=""
                              class=" block w-full px-5 py-3 text-base text-neutral-600 placeholder-black transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 "
                              placeholder={variables.phoneNumber}
                            />
                            <h2 className="text-xl font-semibold py-2">ΑΦΜ</h2>
                            <input
                              disabled={disability}
                              onChange={changeHandler}
                              id="AFM"
                              name="AFM"
                              type="text"
                              required=""
                              class=" block w-full px-5 py-3 text-base text-neutral-600 placeholder-black transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 "
                              placeholder={variables.AFM}
                            />
                            <h2 className="text-xl font-semibold py-2">Τόπος Γένησσης</h2>
                            <input
                              disabled={disability}
                              onChange={changeHandler}
                              id="placeOfbirth"
                              name="placeOfBirth"
                              type="text"
                              required=""
                              class=" block w-full px-5 py-3 text-base text-neutral-600 placeholder-black transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 "
                              placeholder={variables.placeOfBirth}
                            />
                            <h2 className="text-xl font-semibold py-2">Ημερομηνία Γέννησης</h2>
                            <input
                              disabled={disability}
                              onChange={changeHandler}
                              id="dateOfBirth"
                              name="dateOfBirth"
                              type="text"
                              required=""
                              class=" block w-full px-5 py-3 text-base text-neutral-600 placeholder-black transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 "
                              placeholder={variables.dateOfBirth}
                            />
                            <h2 className="text-xl font-semibold py-2">Στρατιωτικός Αριθμός</h2>
                            <input
                              disabled={disability}
                              onChange={changeHandler}
                              id="militaryNumber"
                              name="militaryNumber"
                              type="text"
                              required=""
                              class=" block w-full px-5 py-3 text-base text-neutral-600 placeholder-black transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 "
                              placeholder={variables.militaryNumber}
                            />
                            <h2 className="text-xl font-semibold py-2">Λόγος Αναβολής</h2>
                            <input
                              disabled={disability}
                              onChange={changeHandler}
                              id="reasonOfPostpone"
                              name="firstName"
                              type="text"
                              required=""
                              class=" block w-full px-5 py-3 text-base text-neutral-600 placeholder-black transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 "
                              placeholder={variables.reasonOfPostpone}
                            />
                            <h2 className="text-xl font-semibold py-2">Αρχεία</h2>
                            <input
                              disabled={disability}
                              id="firstName"
                              name="firstName"
                              type="text"
                              required=""
                              class=" block w-full px-5 py-3 text-base text-neutral-600 placeholder-black transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 "
                              placeholder={variables.reasonOfPostpone}
                            />
                            <div className="mt-2"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                          type="button"
                          onClick={function (event) {
                            setOpen(false);
                          }}
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          {" "}
                          Κλείσιμο Καρτέλας{" "}
                        </button>
                        <button
                          type="button"
                          onClick={function (event) {
                            disability ? setDisability(false) : setDisability(true);
                            if (editButton === "Επεξεργασία") {
                              setEditButton("Αποθήκευση")
                            }
                            if (editButton === "Αποθήκευση") {
                              UpdateData(variables.id);
                            }
                            
                          }}
                          className="py-2 mx-2 px-4 flex justify-center items-center rounded-md bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                        >
                          {" "}
                          {editButton}{" "}
                        </button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>

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
