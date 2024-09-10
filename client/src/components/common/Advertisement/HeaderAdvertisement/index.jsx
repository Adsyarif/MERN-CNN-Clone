const HeaderAdvertisement = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="h-64 bg-black flex items-center justify-center flex-col">
          <div className="cursor-pointer">
            <img src="/images/Header/adv.jpg" alt="Advertisement image" />
            <p className="text-zinc-600 text-xs self-start mt-1">
              Advertisement
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderAdvertisement;
