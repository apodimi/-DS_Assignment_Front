import Navbar from "./components/Navbar";
import { useState } from "react";
import { PaperClipIcon } from '@heroicons/react/solid'

function Application() {
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

  const [formCompleted , setFormCompleted] = useState(true)

  const changeHandler = (e) => {
    setVariables({ ...variables, [e.target.name]: e.target.value });
  };

  

  if (formCompleted) {
    return (
      <div>
        <Navbar />
        <section class="text-blueGray-700 text-left">
          <div class="container items-center px-5 py-12 lg:px-20">
            <div
              class="
            flex flex-col
            w-full
            max-w-md
            p-10
            mx-auto
            my-6
            transition
            duration-500
            ease-in-out
            transform
            bg-white
            rounded-lg
            md:mt-0
          "
            >
              <div class="mt-8">
                <div class="mt-6">
                  <form action="#" class="space-y-6">
                    <div>
                      <label
                        for="firstName"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Όνομα{" "}
                      </label>
                      <div class="mt-1">
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required=""
                          onChange={changeHandler}
                          class="
                        block
                        w-full
                        px-5
                        py-3
                        text-base text-neutral-600
                        placeholder-gray-300
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border border-transparent
                        rounded-lg
                        bg-gray-100
                        focus:outline-none
                        focus:border-transparent
                        focus:ring-2
                        focus:ring-white
                        focus:ring-offset-2
                        focus:ring-offset-gray-300
                      "
                        />
                      </div>
                    </div>
                    <div class="space-y-1">
                      <label
                        for="lastName"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Επώνυμο{" "}
                      </label>
                      <div class="mt-1">
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required=""
                          onChange={changeHandler}
                          class="
                        block
                        w-full
                        px-5
                        py-3
                        text-base text-neutral-600
                        placeholder-gray-300
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border border-transparent
                        rounded-lg
                        bg-gray-100
                        focus:outline-none
                        focus:border-transparent
                        focus:ring-2
                        focus:ring-white
                        focus:ring-offset-2
                        focus:ring-offset-gray-300
                      "
                        />
                      </div>
                    </div>
                    <div class="space-y-1">
                      <label
                        for="email"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Email{" "}
                      </label>
                      <div class="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required="@"
                          onChange={changeHandler}
                          class="
                        block
                        w-full
                        px-5
                        py-3
                        text-base text-neutral-600
                        placeholder-gray-300
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border border-transparent
                        rounded-lg
                        bg-gray-100
                        focus:outline-none
                        focus:border-transparent
                        focus:ring-2
                        focus:ring-white
                        focus:ring-offset-2
                        focus:ring-offset-gray-300
                      "
                        />
                      </div>
                    </div>
                    <div class="space-y-1">
                      <label
                        for="phoneNumber"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Τηλέφωνο Επικοινωνίας{" "}
                      </label>
                      <div class="mt-1">
                        <input
                          id="phoneNumber"
                          name="phoneNumber"
                          type="tel"
                          onChange={changeHandler}
                          class="
                        block
                        w-full
                        px-5
                        py-3
                        text-base text-neutral-600
                        placeholder-gray-300
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border border-transparent
                        rounded-lg
                        bg-gray-100
                        focus:outline-none
                        focus:border-transparent
                        focus:ring-2
                        focus:ring-white
                        focus:ring-offset-2
                        focus:ring-offset-gray-300
                      "
                        />
                      </div>
                    </div>
                    <div class="space-y-1">
                      <label
                        for="AFM"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        ΑΦΜ{" "}
                      </label>
                      <div class="mt-1">
                        <input
                          id="AFM"
                          name="AFM"
                          type="text"
                          onChange={changeHandler}
                          class="
                        block
                        w-full
                        px-5
                        py-3
                        text-base text-neutral-600
                        placeholder-gray-300
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border border-transparent
                        rounded-lg
                        bg-gray-100
                        focus:outline-none
                        focus:border-transparent
                        focus:ring-2
                        focus:ring-white
                        focus:ring-offset-2
                        focus:ring-offset-gray-300
                      "
                        />
                      </div>
                    </div>
                    <div class="space-y-1">
                      <label
                        for="placeOfBirth"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Πόλη Γέννησης{" "}
                      </label>
                      <div class="mt-1">
                        <input
                          id="placeOfBirth"
                          name="placeOfBirth"
                          type="text"
                          onChange={changeHandler}
                          class="
                        block
                        w-full
                        px-5
                        py-3
                        text-base text-neutral-600
                        placeholder-gray-300
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border border-transparent
                        rounded-lg
                        bg-gray-100
                        focus:outline-none
                        focus:border-transparent
                        focus:ring-2
                        focus:ring-white
                        focus:ring-offset-2
                        focus:ring-offset-gray-300
                      "
                        />
                      </div>
                    </div>
                    <div class="space-y-1">
                      <label
                        for="dateOfBirth"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Ημερομηνία Γέννησης{" "}
                      </label>
                      <div class="mt-1">
                        <input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          onChange={changeHandler}
                          class="
                        block
                        w-full
                        px-5
                        py-3
                        text-base text-neutral-600
                        placeholder-gray-300
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border border-transparent
                        rounded-lg
                        bg-gray-100
                        focus:outline-none
                        focus:border-transparent
                        focus:ring-2
                        focus:ring-white
                        focus:ring-offset-2
                        focus:ring-offset-gray-300
                      "
                        />
                      </div>
                    </div>
                    <div class="space-y-1">
                      <label
                        for="militaryNumber"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Στρατιωτικός Αριθμός{" "}
                      </label>
                      <div class="mt-1">
                        <input
                          id="militaryNumber"
                          name="militaryNumber"
                          type="text"
                          onChange={changeHandler}
                          class="
                        block
                        w-full
                        px-5
                        py-3
                        text-base text-neutral-600
                        placeholder-gray-300
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border border-transparent
                        rounded-lg
                        bg-gray-100
                        focus:outline-none
                        focus:border-transparent
                        focus:ring-2
                        focus:ring-white
                        focus:ring-offset-2
                        focus:ring-offset-gray-300
                      "
                        />
                      </div>
                    </div>
                    <div class="space-y-1">
                      <label
                        for="militaryNumber"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Αρχείο{" "}
                      </label>
                      <div class="mt-1">
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span>Ανέβασμα Αρχείου</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                />
                              </label>
                              <p className="pl-1">ή σύρετε το αρχείο</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        onClick={()=>setFormCompleted(false)}
                        class="
                      flex
                      items-center
                      justify-center
                      w-full
                      px-10
                      py-4
                      text-base
                      font-medium
                      text-center text-white
                      transition
                      duration-500
                      ease-in-out
                      transform
                      bg-blue-600
                      rounded-xl
                      hover:bg-blue-700
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-blue-500
                    "
                      >
                        {" "}
                        Επόμενο{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Στοιχεία Αίτησης</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Όνομα</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{variables.firstName}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Επώνυμο</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{variables.lastName}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{variables.email}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Τηλέφωνο</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{variables.phoneNumber}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">ΑΦΜ</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {variables.AFM}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Πόλη Γέννησης</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {variables.placeOfBirth}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Ημερομηνία Γέννησης</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {variables.dateOfBirth}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Στρατιωτικός Αριθμός</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {variables.militaryNumber}
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="mt-0 lg:mt-6 max-w-7xl sm:flex justify-end">
                    <div class="mt-3 rounded-lg sm:mt-0">
                    <button class="
                    items-center
                    block
                    px-10
                    py-3.5
                    text-base
                    font-medium
                    text-center text-blue-600
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-2 border-white
                    shadow-md
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-gray-500
                  "> Επιστροφή </button>
                    </div>
                    <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                    <button class="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600  rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> Οριστική Υποβολή </button>

                    </div>
                  </div>
      </div>
      
    );
  }
}

export default Application;
