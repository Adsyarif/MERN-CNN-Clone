import { NavLink } from "react-router-dom";

const FooterFeatures = () => {
  const contentFooter = [
    { src: "to-watch", title: "Watch" },
    { src: "to-listen", title: "Listen" },
    { src: "to-live-tv", title: "Live TV" },
  ];

  const socials = [
    { src: "/images/Footer/Facebook.png", url: "to-facebook" },
    { src: "/images/Footer/Instagram.png", url: "to-instagram" },
    { src: "/images/Footer/LinkedIn.png", url: "to-linkedIn" },
    { src: "/images/Footer/Tiktok.png", url: "to-tiktok" },
    { src: "/images/Footer/X.png", url: "to-x" },
  ];

  return (
    <div className="bg-black w-full py-8 px-5 flex flex-col items-start text-white border-t border-b border-gray-700">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="images/Header/logo.png"
            alt=""
            className="w-auto h-8 mr-4"
          />
          <div className="font-bold text-2xl">ID</div>
        </div>
        <div className="flex items-center">
          {contentFooter.map((content, index) => (
            <NavLink
              key={index}
              to={content.src}
              className="text-white text-[0.937rem] font-bold ml-7"
            >
              {content.title}
            </NavLink>
          ))}
          <div className="border-r border-gray-500 w-1 h-6 mx-4"></div>
          <div className="text-white text-[0.937rem] font-bold">Follow CNN</div>
          {socials.map((social, index) => (
            <NavLink
              key={index}
              to={social.url}
              className="text-white text-[0.937rem] font-bold mx-4"
            >
              <img src={social.src} className="h-full w-full" alt="" />
            </NavLink>
          ))}
          <button className="border border-white rounded-xl ml-5 px-4 py-2 text-white hover:bg-gray-800">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterFeatures;
