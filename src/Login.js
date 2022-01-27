import Navbar from './components/Navbar'
import axios from 'axios'
import React ,{ useState} from 'react'

function Login(){

  
  

    return(
        <div>
            <Navbar />
<section class="overflow-hidden text-left">
            <div class="flex min-h-screen overflow-hidden">
              <div class="relative flex-1 hidden w-0 overflow-hidden lg:block login-background">
              </div>
              <div class="
            flex flex-col
            justify-center
            flex-1
            px-4
            py-12
            overflow-hidden
            sm:px-6
            lg:flex-none lg:px-20
            xl:px-24
          ">
                <div class="w-full max-w-xl mx-auto lg:w-96">
                  <div>
                    
                    <h2 class="mt-6 text-3xl font-extrabold text-neutral-600"> Σύνδεση</h2>
                  </div>
                  <div class="mt-8">
                    <div class="mt-6">
                      <form action="http://localhost:8080/citizens" method="POST" class="space-y-6">
                        <div>
                          <label for="email" class="block text-sm font-medium text-neutral-600"> Email </label>
                          <div class="mt-1">
                            <input id="email"  name="username" type="text" autocomplete="email" required="" placeholder="Email" class="
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
                        " />
                          </div>
                        </div>
                        <div class="space-y-1">
                          <label for="password" class="block text-sm font-medium text-neutral-600"> Κωδικός </label>
                          <div class="mt-1">
                            <input id="password"  name="password" type="password" autocomplete="current-password" required="" placeholder="Κωδικός" class="
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
                        " />
                          </div>
                        </div>
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" class="
                          w-4
                          h-4
                          text-blue-600
                          border-gray-200
                          rounded
                          focus:ring-blue-500
                        " />
                            <label for="remember-me" class="block ml-2 text-sm text-neutral-600"> Να με θυμάσαι </label>
                          </div>
                          <div class="text-sm">
                            <a href="#" class="font-medium text-blue-600 hover:text-blue-500"> Ξεχάσατε τον κωδικό? </a>
                          </div>
                        </div>
                        <div>
                          <button type="submit"  class="
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
                      "> Σύνδεση </button>
                        </div>
                      </form>
                      <div class="relative my-4">
                       
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}

export default Login;