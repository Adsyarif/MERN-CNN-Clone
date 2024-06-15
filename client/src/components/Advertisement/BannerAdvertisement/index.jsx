const BannerAdvertisement = () => {
  return (
    <>
      <div className="h-64 bg-white flex items-center justify-center flex-col">
        <div className="cursor-pointer">
          <img src="images/ThirdAdv/thirdadv.jpg" alt="Advertisement image" />
          <p className="text-zinc-600 text-xs self-start mt-1">Advertisement</p>
        </div>
      </div>
    </>
  );
};

export default BannerAdvertisement;
