import { Link } from "react-router-dom";
import { MidCard, CardTextOnly } from "../../../common/Cards";

const FirstSection = () => {
  const MidCards = [
    {
      link: "/live/Israel-hamas-war",
      imageSrc: "images/FirstSection/analysis.jpg",
      text: "Rishi Sunak is picking a fight on the migration issue that he probably cannot win",
      tag: "Analysis",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/FirstSection/news3.jpg",
      text: "Harvard president apologizes for her disastrous testimony at antisemitism hearing",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/FirstSection/news2.jpg",
      text: "Harvard president apologizes for her disastrous testimony at antisemitism hearing",
      tag: "",
    },
    // Add more cards as needed
  ];

  const textOnly = [
    {
      link: "/your-link-url",
      text: "iMichigan school shooter sentenced to life in prison without parole",
    },
    {
      link: "/your-link-url",
      text: "Six French teenagers convicted in connection with 2020 beheading of teacher Paty",
    },
    {
      link: "/your-link-url",
      text: "Appeals court maintains most of Trump gag order in federal election subversion case",
    },
    {
      link: "/your-link-url",
      text: "Ryan O’Neal, star of ‘Love Story’ and ‘Peyton Place,’ dead",
    },
    {
      link: "/your-link-url",
      text: "Wartime spread of drug-resistant infections in Ukraine is an ‘urgent crisis,’ CDC report says",
    },
    {
      link: "/your-link-url",
      text: "European Union agrees to regulate potentially harmful effects of artificial intelligence",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:px-8 md:flex-row">
        <div className="w-full p-4 md:w-2/3">
          <Link to="/new-link" className="">
            <div className="max-w-screen-md mx-auto">
              <h1 className="text-3xl font-bold mb-4 text-black text-center decoration-1 hover:underline hover:underline-offset-8 hover:text-gray-500">
                Japan-South Korea Relations StrengthenSecurity Cooperation
              </h1>
              <div className="max-w-screen-md mx-auto mb-3">
                <div className="aspect-w-16 aspect-h-9">
                  <video
                    className="w-full h-full rounded-sm hover:grayscale-50"
                    autoPlay={true}
                    muted
                    playsInline
                    loop
                  >
                    <source
                      src="videos/FirstSection/breaking.mp4"
                      type="video/mp4"
                    />
                    Your browser doesn't support the video tag.
                  </video>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 decoration-1 hover:underline hover:underline-offset-4">
                Japan and South Korea are enhancing their military cooperation
                in response regional security concerns
              </h4>
              <ul className="px-5">
                <li className="list-disc">
                  South Korea proposes a compensation plan for wartime forced
                  labor, backed by South Korean companies.
                </li>
                <li className="list-disc">
                  Japan and South Korea agree to improve intelligence sharing on
                  North Korean missile threats. Ut enim ad minim veniam.
                </li>
                <li className="list-disc">
                  Resuming talks on trade issues, especially semiconductor
                  export controls imposed by Japan in 2019​.
                </li>
                <li className="list-disc">
                  Camp David Principles institutionalize ongoing trilateral
                  cooperation on regional security.
                </li>
                <li className="list-disc">
                  Mixed reactions in South Korea to historical resolutions;
                  President Yoon faces domestic opposition.
                </li>
                <li className="list-disc">
                  Enhanced Japan-South Korea relations address regional security
                  threats, including from China and North Korea.
                </li>
              </ul>
            </div>
          </Link>
        </div>
        <div className="w-full p-4 md:w-1/3">
          {MidCards.map((card, index) => (
            <MidCard key={index} {...card} />
          ))}
        </div>
        <div className="w-full p-4 md:w-1/3">
          <Link to={"/news-link"} className="relaitve w-305 h-171 group mb-4">
            <div>
              <video
                className="w-full h-full rounded-sm"
                autoPlay={true}
                muted
                playsInline
                loop
                controls
              >
                <source src="videos/FirstSection/video.mp4" type="video/mp4" />
              </video>
            </div>
          </Link>
          <div>
            <div className="mb-2 mt-2 font-bold text-xl decoration-1 hover:underline hover:underline-offset-4">
              Catch up on today global news
            </div>
            <div>
              {textOnly.map((cardText, index) => (
                <CardTextOnly key={index} {...cardText} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
