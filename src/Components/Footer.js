function Footer() {
  return (
    <div className="h-[100px] w-12/12 bg-gray-900 mt-10 text-white ">
      <div className="flex justify-between w-8/12 mx-auto ">
        <div>
          <p className="mt-4 font-bold text-xl cursor-default">Make-It </p>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3170/3170733.png"
            className="h-[40px] mx-auto mt-1"
          />
        </div>
        <div className="mt-4 cursor-default">
          <p className="font-semibold">Contact us</p>{" "}
          <p className="font-thin">022 1234 5678/ 7303070303</p>{" "}
          <p className="font-thin">makeit2103@gmail.com</p>
        </div>
        <div className="mt-4 cursor-default">
          <p className="font-semibold">We deliver to:</p>{" "}
          <p className="font-thin">India</p>{" "}
        </div>
      </div>
    </div>
  );
}
export default Footer;
