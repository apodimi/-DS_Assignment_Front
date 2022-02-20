import Navbar from './components/Navbar'
import axios from 'axios'
import React ,{ useState, Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/outline'

function Register(){
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [successMessage, setSuccessMessage] = useState(false)
  const cancelButtonRef = useRef(null)


  const changeHandler = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  function Register() {
    axios.get(`http://localhost:8080/users/new?firstName=${register.firstName}&lastName=${register.lastName}&email=${register.email}&password=${register.password}`)
    .then(res => {
      if(res.success){
        console.log("succes")
        setTimeout(() => {
          setSuccessMessage(true)
        }, 10000)
      }
    });
  }
  

    return (
      <div>
        <Navbar />
        <section className="overflow-hidden text-left">
          <div className="flex min-h-screen overflow-hidden">
            <div className="relative flex-1 hidden w-0 overflow-hidden lg:block login-background"></div>
            <div className=" flex flex-col justify-center flex-1 px-4 py-12 overflow-hidden sm:px-6 lg:flex-none lg:px-20 xl:px-24 ">
              <div className="w-full max-w-xl mx-auto lg:w-96">
                <div>
                  <h2 className="mt-6 text-3xl font-extrabold text-neutral-600"> Εγγραφή</h2>
                </div>
                <div className="mt-8">
                  <div className="mt-6">
                    <form className="space-y-6">
                      <div>
                        <label for="email" className="block text-sm font-medium text-neutral-600">
                          {" "}
                          Όνομα{" "}
                        </label>
                        <div className="mt-1">
                          <input
                            id="firstName"
                            name="firstName"
                            onChange={changeHandler}
                            type="text"
                            required=""
                            className=" block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 "
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label for="password" className="block text-sm font-medium text-neutral-600">
                          {" "}
                          Επώνυμο{" "}
                        </label>
                        <div className="mt-1">
                          <input
                            id="lastName"
                            name="lastName"
                            onChange={changeHandler}
                            type="text"
                            required=""
                            className=" block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 "
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label for="password" className="block text-sm font-medium text-neutral-600">
                          {" "}
                          Email{" "}
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            onChange={changeHandler}
                            type="email"
                            required=""
                            className=" block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 "
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label for="password" className="block text-sm font-medium text-neutral-600">
                          {" "}
                          Κωδικός{" "}
                        </label>
                        <div className="mt-1">
                          <input
                            id="password"
                            name="password"
                            onChange={changeHandler}
                            type="password"
                            required=""
                            className=" block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 "
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          
                          onClick={Register}
                          className=" flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
                        >
                          {" "}
                          Εγγραφή{" "}
                        </button>
                      </div>
                    </form>
                    <div className="relative my-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Transition.Root show={successMessage} as={Fragment}>
          <Dialog
            as="div"
            classNameName="fixed z-10 inset-0 overflow-y-auto"
            initialFocus={cancelButtonRef}
            onClose={setSuccessMessage}
          >
            <div classNameName="flex-col items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay classNameName="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                classNameName="hidden sm:inline-block sm:align-middle sm:h-screen"
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
                <div classNameName="inline-block align-bottom bg-white rounded-lg  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div classNameName="bg-white py-10 px-4  sm:py-10 flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      classNameName="h-14 w-14 text-green-600 block m-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>

                    <div classNameName="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center">
                      <Dialog.Title as="h3" classNameName="text-lg leading-6 font-medium text-gray-900">
                        Επιτυχής δημιουργεία λογαριασμού
                      </Dialog.Title>
                      <div classNameName="mt-2"></div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    );
}

export default Register;