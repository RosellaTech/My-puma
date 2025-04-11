import './Favorites.css'

const Favorites = () => {
  return (

    <section>

      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-45 lg:px-8">
        
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          
            <div className="lg:w-1/2 text-left">
              <h2 className="text-3xl font-thin leading-tight text-black sm:text-2xl lg:text-5xl">
                FAVORITES
              </h2>

              <h1 className="mt-4 text-xl font-semibold text-black">
                Login or Sign up for a PUMA <br />
                Account to create a Favorites list
              </h1>
            </div>

            {/* Aligning the form to the right */}
            <div className="lg:w-1/2 ml-auto">
              <div className="relative max-w-md mt-8 lg:mt-0">
                <div className="overflow-hidden bg-white rounded-md shadow-md">
                  <div className="px-4 py-6 sm:px-8 sm:py-7">

                    <p className="mt-4 text-base text-gray-600">
                      Login
                    </p>
                    
                    <form action="submit" method="POST">
                      <div className="space-y-5">
                        <div>
                          <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                            <input
                              type="email"
                              placeholder="EMAIL*"
                              className="block w-full py-4 pl-6 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                            <input
                              type="password"
                              placeholder="PASSWORD*"
                              className="block w-full py-4 pl-6 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                            />
                            <div className="flex items-center mt-4">
                              <input className="size-4" type="checkbox" />
                              <label className="text-black ml-2" htmlFor="">
                                Remember me
                              </label>
                            </div>
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#cccccc] border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                          >
                            Log in
                          </button>
                        </div>

                        <div className="text-center">
                          <p className="text-base text-gray-600 underline">
                            FORGOTTEN YOUR PASSWORD?
                            <a
                              href="#"
                              title=""
                              className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                            ></a>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Aligning the second form to the right */}
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-1 mx-auto max-w-7xl sm:px-10 lg:px-8">
          <div className="max-w-2xl mx-auto text-left mb-6">
            <p className="text-lg font-medium text-gray-700 text-right">Create Account</p>
          </div>

          <div className="relative max-w-md ml-auto">
            <div className="overflow-hidden bg-white rounded-md shadow-md">
              <div className="px-6 py-8">
                <form action="#" method="POST" className="space-y-5">
                  {/* FIRST NAME */}
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="block w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />

                  {/* LAST NAME */}
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="block w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />

                  {/* EMAIL */}
                  <input
                    type="email"
                    placeholder="Email*"
                    className="block w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />

                  {/* PASSWORD */}
                  <input
                    type="password"
                    placeholder="Password*"
                    className="block w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />

                  {/* CHECKBOX */}
                  <div className="flex items-start">
                    <input
                      className="mt-1 mr-2 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      type="checkbox"
                    />
                    <label className="text-sm text-gray-700">
                      Yes, I want to be the first to hear about the latest special offers, product drops and more straight to my inbox.
                    </label>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="w-full py-3 text-sm font-semibold text-white bg-[#cccccc] rounded-md hover:bg-blue-700 transition duration-200"
                  >
                    Create Account
                  </button>

                  {/* DISCLAIMER */}
                  <p className="text-xs text-gray-500 leading-relaxed">
                    By signing up, you agree to receive marketing emails from Austria PUMA Dassler GmbH and confirm you’re at least 16 years old. You can unsubscribe at any time free of charge. To improve your experience, we’ll process your data to better personalise the emails we send you.{" "}
                    <a
                      href="https://ng.puma.com/ng/en/privacy-policy/PRIVACY_POLICY.html"
                      className="text-blue-600 underline hover:text-orange-600"
                    >
                      See our privacy policy.
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </section>

  )
}

export default Favorites
