import featuredImg from '../assets/elee.png';

const Features = () => {
  return (
    <div className="my-24 md:px-14 max-w-screen-2xl mx-auto px-4 ">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/4">
          <h3 className="text-3xl text-primary font-bold mb-3 lg:w-full">
            Why are we better than others
          </h3>
          <p className="text-base text-tartiary">
            The system streamlines the assignment process, saving time for both teachers and students by allowing assignments to be given and submitted online without the need for manual efforts.
          </p>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img src={featuredImg} alt="Feature" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center">Efficiency</h5>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
              <div>
                <img src={featuredImg} alt="Feature" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center">Efficiency</h5>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img src={featuredImg} alt="Feature" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center">Efficiency</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
