const Slider = () => {
  return (
      <>
          <div className="carousel relative w-full">
              <div id="item1" className="carousel-item relative w-full">
                  <img src="https://i.ibb.co/wss2gj9/slider1.jpg" className="w-full h-96" alt="Slider 1" />
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                      <div className="text-white text-center">
                          <h1 className="text-3xl font-bold">Crafting Workshop</h1>
                          <p className="text-lg">Join our crafting workshop and unleash your creativity!</p>
                      </div>
                  </div>
              </div>
              <div id="item3" className="carousel-item relative w-full">
                  <img src="https://i.ibb.co/f9D1RZJ/slider2.png" className="w-full h-96" alt="Slider 2" />
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                      <div className="text-white text-center">
                          <h1 className="text-3xl font-bold">Handmade Jewelry</h1>
                          <p className="text-lg">Discover exquisite handmade jewelry pieces for every occasion.</p>
                      </div>
                  </div>
              </div>
              <div id="item4" className="carousel-item relative w-full">
                  <img src="https://i.ibb.co/Gx7y9Fg/slider3.jpg" className="w-full h-96" alt="Slider 3" />
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                      <div className="text-white text-center">
                          <h1 className="text-3xl font-bold">DIY Home Decor</h1>
                          <p className="text-lg">Get inspired to decorate your home with unique DIY projects.</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
              <a href="#item1" className="btn btn-xs">1</a>
              <a href="#item3" className="btn btn-xs">2</a>
              <a href="#item4" className="btn btn-xs">3</a>
          </div>
      </>
  )
};


export default Slider;
