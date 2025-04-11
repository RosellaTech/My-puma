import './TrendingTwo.css'

const TrendingTwo = () => {


  return (

    <section>
     <div className="relative w-full h-[500px] mt-10 mb-10">
  {/* Image */}
  <img
    className="w-full h-full object-cover"
    src="/images/shoe.jpeg"
    alt="Puma Shoe"
  />

  {/* Left-aligned Text on Image */}
  <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white">
    <h1 className="text-4xl font-bold">UNLEASH UNLIMITED</h1>
    <p className="text-lg mt-2">WITH FUTURE, ULTRA & KING</p>

    <a href="https://prod.storelocator.puma.com/index.html#/map?" target='_blank' className="mt-4 text-white border-b border-gray-100 font-thin">
      FIND A PUMA STORE
    </a>
  </div>
</div>




    <div className="text-center ">
      <h2 className='mb-2'>HIGHLIGHTS</h2>
    </div>
    <div className="lg:flex flex-row tone-wrapper">

      <div className="text-center tone-content mb-10">
        <div className="tone-image">
          <img src="public/images/players.avif" alt="" />
        </div>

        <div>
          <h1 className="text-center">PORTUGAL HOME & AWAY KITS</h1>
        </div>
      </div>

      <div className="tone-content">
        <div className="tone-image">
          <img src="public/images/shoe2.avif" alt="" />
        </div>
        <div>
          <h1 className="text-center">FENTY x PUMA</h1>
        </div>
      </div>

      <div className="tone-content mt-6 lg:mt-0">
        <div className="tone-image">
          <img src="public/images/shoe3.avif" alt="" />
        </div>
        <div>
          <h1 className="text-center">MOSTRO</h1>
        </div>
      </div>
    </div>
  </section>



  )
}

export default TrendingTwo