import Netflix from "./netflix.png";
const Footer = () => {
  return (
    <>
      <div className="text-white w-screen bg-black p-2 relative bottom-0">
        <div className="flex justify-center items-center">
          <img src={Netflix} alt="logo" className="h-8 w-32 object-cover" />
          <p>@Copyright by Tushar Machhi 2022 </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
