const Footer = ({ serachText }) => {
  const handleInputChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="bg-black p-8">
      <hr className="pb-5" />
      <div className="flex">
        <input
          type="text"
          value={serachText}
          className="h-8 px-2 w-full bg-white border-none rounded-1 outline-none"
          onChange={handleInputChange}
        />
        <button className="h-8 bg-white text-black px-2 rounded-r flex item-center font-bold">
          Search{" "}
          <span className="ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </button>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Footer;
