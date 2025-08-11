import Image from "next/image";

const Subscribe = () => {
    return (
      <div className="lg:mx-15 mx-5 my-14 flex flex-col md:flex-row items-center gap-10">
       
        <div className="w-full md:w-1/2 lg:p-20 pe-0">
          <h4 className="lg:text-4xl/11 text-2xl/8 font-bold text-dark mb-6">
          Subscribe for fresh insights, tips & stories — straight to your inbox!
          </h4>
          <form className="relative w-full">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-6 py-4 pr-32 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="absolute right-1 top-1 bottom-1 px-6 bg-red-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

             
        <div className="w-full md:w-1/2 flex justify-center">
  <Image 
    src="/my2.png" 
    width={200}
    height={200}
    alt="Subscribe Illustration" 
    style={{ width: '500px', height: 'auto' }}
    className="rounded-lg"
  />
</div>

  
        
      </div>
    );
  };
  
  export default Subscribe;
  