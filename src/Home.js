import Navbar from './components/Navbar'


function Home(){
    return(
        <div>
        <Navbar />
      <section class="w-full bg-white header-background">
            <div class="
          relative
          items-center
          w-full
          px-5
          mx-auto
          md:px-12
          lg:px-16
          max-w-7xl
          lg:pt-48
          lg:pb-48
        ">
              <div class="flex w-full mx-auto text-left">
                <div >
                  <div class="text-left">
                    <h1 class="
                  max-w-5xl
                  text-2xl
                  font-bold
                  leading-none
                  tracking-tighter
                  text-neutral-600
                  md:text-5xl
                  lg:text-6xl lg:max-w-7xl
                  text-white
                "> Long headline to turn <br class="hidden lg:block" /> your visitors into users </h1>
                    <div class="flex w-full max-w-2xl gap-2 mx-auto mt-6">
                      <div class="mt-3 rounded-lg sm:mt-0">
                        <button class="
                      items-center
                      block
                      px-5
                      py-4
                      text-base
                      font-medium
                      text-center text-white
                      transition
                      duration-500
                      ease-in-out
                      transform
                      bg-blue-600
                      lg:px-10
                      rounded-xl
                      hover:bg-blue-700
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-blue-500
                    "> Get bundle </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
            </div>
          </section>
          </div>
    );
}

export default Home;