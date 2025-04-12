import { Login } from "../../../Login";
import "./Favorites.css";

const Favorites = () => {
  return (
    <section>
      <div class="p-4 text-center bg-[#eee]">
        <h2 class="text-sm sm:text-lg lg:text-2xl font-semibold text-left text-black leading-tight">
          FAVORITES
        </h2>
      </div>
      <section className="py-10  sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-45 lg:px-8">
          <div className="lg:flex flex-col lg:flex-row items-start justify-between gap-10">
            <div className="lg:w-1/2 text-left">
              <h1 className="mt-4 text-xl font-semibold text-black">
                Login or Sign up for a PUMA <br />
                Account to create a Favorites list
              </h1>
            </div>

            {/* Aligning the form to the right */}
            <div className="lg:w-1/2 lg:ml-auto">
              <div className="relative mt-8 lg:mt-0">
                <Login />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Favorites;
