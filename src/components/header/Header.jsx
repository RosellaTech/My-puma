import "./Header.css";

const Header = () => {
  return (
    <section>
      <div className="bg-black text-white border-none py-2">
        <div className="hero-content">
          <div className="text-center text-[11px] lg:text-[16px]">
            Dear Customer, thank you for visiting our website.
            <br />
            We would like to inform you that you can no longer purchase products
            on this website. For any queries regarding your purchases,please
            contact service-dfa@puma.com
          </div>

          <div className="flex items-center justify-center">
            {/*add a map location here*/}
            <a href="https://prod.storelocator.puma.com/index.html#/map?" target="_blank" className="flex items-center justify-center bg-none text-white border-b-1 border-gray-100 font-thin mb-2">
              FIND A PUMA STORE
            </a>
          </div>
        </div>

        <div className="relative w-full">
  {/* Background Image */}
  <img
    src="/images/png1.avif"
    alt=""
    className="w-full h-auto object-cover"
  />

  {/* Overlay Content */}
  <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white">
    <h2 className="text-3xl font-bold leading-tight">
      SPEEDCAT <br />
      <span className="text-lg font-light">WORN BY ROSE</span>
    </h2>

    {/* Add a map location here */}
    <a href="https://prod.storelocator.puma.com/index.html#/map?" target="_blank"  className="mt-4 text-white border-b border-gray-100 font-thin">
      FIND A PUMA STORE
    </a>
  </div>
</div>

      </div>
    </section>
  );
};

export default Header;
