import videobg from "../../../assets/book.mp4"
const Hero = () => {
    return (
      <div className="w-[100%] h-[80vh] bg-[#000]">
        <video
          className="w-[100%] h-[100%] object-cover  opacity-20"
          src={videobg}
          autoPlay
          loop
          muted
        />
        <div className="absolute  w-[100%] h-[100%] top-0 flex flex-col justify-center text-center items-center text-white">
          <div className="grid grid-cols-2 w-[1140px] mx-auto">
            <div className="col-span-1 text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 ">
                Get Your{" "}
                <span className="bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2] inline-block text-transparent bg-clip-text">
                  New Book Collections
                </span>
              </h1>
              <p className="mb-8">
                There are many variations of passages of Lorem Ipsum available,
                but <br />
                the majority have suffered alteration in some formr.
              </p>
              <button className="btn bg-gradient-to-r from-[#3873b6] to-[#5d9ee2] border-none text-white font-bold ">
                Explore More
              </button>
            </div>
            <div className="text-right col-span-1 mx-auto">
              <img
                src="https://i.ibb.co/2SG2GWq/Typing-service-flying-book-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;