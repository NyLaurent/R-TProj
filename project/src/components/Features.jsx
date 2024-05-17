import featuredImg from '../assets/elee.png';

const Features = () => {
  return (
    <div className="my-24 md:px-14 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start  gap-10">
            
            <div className="lg:w-1/4">
                <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">Why are we better than others</h3>
                <p className="text-base text-tartiary"> The system streamlines the assignment process, saving time for
              both teachers and students by allowing assignments to be given and
              submitted online without the need for manual efforts.</p>
            </div>
            <div className="w-full lg:w-3/4">
              <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px]">
                <div>
                  <img src={featuredImg} alt="" />
                  <h5 className="text-2xl font-semibold text-primary px-5 text-center">Efficiency</h5>

                </div>
              </div>
            </div>
        </div>
        
        </div>
  )
}

export default Features