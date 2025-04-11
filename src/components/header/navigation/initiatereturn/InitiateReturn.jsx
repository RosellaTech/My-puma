import "./InitiateReturn.css";

const InitiateReturn = () => {
  return (
    <section className="h-full w-full my-4 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-3xl p-8 bg-white shadow-xl rounded-2xl">
        {/* Logo aligned to the left */}
        <div className="flex justify-start mb-4">
          <img
            src="public/images/pumalogo2-removebg-preview (1).png"
            alt="Puma Logo"
            className="h-20 object-contain"
          />
        </div>

        {/* Title and Language Selector */}
        <div className="flex justify-between items-center mb-10">
          {/* Title aligned to the left */}
          <h1 className="text-3xl font-semibold text-[#b39871]">
            Returns Portal
          </h1>

            <br />
            <br />

          {/* Language selector aligned to the right */}
          <label className="text-sm ml-2 text-gray-700">
            Select Language:
            <select className="ml-2 border border-gray-300 rounded px-2 py-1 text-sm">
              <option value="Czech">Cestina</option>
              <option value="Danish">Dansk</option>
              <option value="German">Deutsch</option>
              <option value="Spanish">Espanol</option>
              <option value="Finish">Finish</option>
              <option value="French">Francais</option>
              <option value="Hebrew">Hebrew</option>
              <option value="Italian">Italiano</option>
              <option value="Japanese">Japanese</option>
              <option value="Norwegian">Norsk</option>
              <option value="English-United Kingdom">English-United Kingdom</option>
              <option value="English-United State">English-United State</option>
              <option value="Romanian">Romanian</option>
              <option value="Turkish">Turkish</option>
              <option value="Swedish">Svenska</option>
              <option value="Thai">Thai</option>
              <option value="Vietnamese">Tieng Viet</option>
              <option value="Hindi">Hindi</option>
            </select>
          </label>
        </div>

        {/* Order Section */}
        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-800 mb-2">1. Find an order</h2>
          <hr />
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Order ID</label> 
            <input
              type="text" placeholder="
 Order ID is required"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#b39871]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="text" placeholder="Shipping Email is required"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#b39871]"
            /> 
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800 transition"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InitiateReturn;
