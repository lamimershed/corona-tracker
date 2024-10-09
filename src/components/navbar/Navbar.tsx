const Navbar = () => {
  return (
    <nav className="h-[7vh] w-full bg-blue-600 px-[20px]">
      <div className="flex h-full w-full items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-[20px] max-xl:text-[16px] font-semibold text-white">
            Corona Tracker
          </h1>
        </div>
        <div className="flex items-center gap-[20px] text-white">
          Get latest update
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
