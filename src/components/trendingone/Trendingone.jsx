import "./Trendingone.css";

const Trendingone = () => {
  return (
    <section>
      <div className="text-center mt-10 mb-2">
        <h2>REWRITE THE CLASSICS</h2>
      </div>
      <div className="lg:flex flex-row tone-wrapper">

        <div className="text-center tone-content">
          <div className="tone-image">
            <img src="/images/png2.avif" alt="" />
          </div>


          <div>
            <h1 className="text-center">EASY RIDER</h1>
          </div>
        </div>

        <div className="tone-content">
          <div className="tone-image">
            <img src="/images/png3.avif" alt="" />
          </div>
          <div>
            <h1 className="text-center">PALERMO</h1>
          </div>
        </div>

        <div className="tone-content">
          <div className="tone-image">
            <img src="/images/png4.avif" alt="" />
          </div>
          <div>
            <h1 className="text-center">SUEDE XL</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trendingone;
