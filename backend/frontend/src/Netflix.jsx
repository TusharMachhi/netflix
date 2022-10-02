import cover from "./netlog.jpg";
import netflix from "./netflix.png";
import Button from './Button';
const Netflix = () => {
  return (
    <>
      <div
        className="w-[100%] h-[100vh] bg-cover "
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="w-[100%] h-[100vh]  bg-[rgba(0,0,0,0.5)]">
          <nav className="flex justify-between items-center   mx-[50px]">
            <img src={netflix} alt="" className=" w-32 h-20" />
            <button className="text-white px-4 rounded-md py-1 bg-[#e50914]">
              Sign In
            </button>
          </nav>
          <div className=" h-screen  text-white flex flex-col items-center justify-center tracking-wide">
          <p className="text-5xl text-bold">Unlimited movies, TV</p> <p className="text-5xl">shows and more.</p>  
            <p className="text-xl">Watch anywhere. Cancel anytime.</p>
            <Button className={"w-40 bg-[#e50914] h-12 rounded-md text-white font-bold mt-3"}>Get Started</Button>

          </div>
           
            
          
        </div>
      </div>
    </>
  );
};

export default Netflix;
