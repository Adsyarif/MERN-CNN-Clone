import {
  Header,
  NavFooter,
  SmallHorizontalCard,
  BannerAdvertisement,
  NinthSection,
  ColumnHead,
  SmallAdvertisement,
} from "../../components";
import { Link } from "react-router-dom";

const Article = () => {
  const smallHorizontalCard = [
    {
      link: "/your-link-url",
      imageSrc: "images/Article/21.jpg",
      text: "Sununu endorses Haley, hoping to slow Trump’s march to ...",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/Article/22.jpg",
      text: "Here’s Nikki Haley’s path to the Republican ...",
      tag: "",
    },

    {
      link: "/your-link-url",
      imageSrc: "images/Article/23.jpg",
      text: "Opinion: The best way to keep Trump off the ballot",
      tag: "",
    },
  ];

  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <div className="w-full p-4 md:w-3/4">
          <div className="title">
            <h1 className="text-4xl font-bold m-4 pb-4">
              Christie ramps up Halley criticism as he rejects calls to exit GOP
              primary
            </h1>
          </div>
          <div className="pl-4 author flex">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="/images/Article/1auth.jpg"
                alt="auth image"
                className="object cover w-full h-full"
              />
            </div>
            <div className="author-name-date">
              <div className="author-name text-base text-gray-600 pl-2">
                By <span className="underline">Omar Jimenez</span>, Alejandra
                Jaramillo and Alison Main, CNN
              </div>
              <div className="publish-date text-base text-gray-600 pl-2 flex items-centre justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span className="pr-2">
                  5 minute read Published 9:10 AM EST, Sat December 9, 2023
                </span>
              </div>
            </div>
          </div>
          <div className="content pt-6 pl-4">
            <div className="image-box bg-gray-100">
              <img src="images/Article/11.webp" className="w-full" alt="" />
              <div className="heading-tag text-xs text-gray-600 pt-5 drop-shadow-sm p-2 border-b border-gray-300">
                Former New Jersey Gov. Chris Christie speaks at an event in
                Nashua, New Hampshire, on October 13, 2023.
              </div>
            </div>
            <div className="article-text mt-4 mx-2 md:mx-16">
              <p className="font-bold">Durham, New Hampshire (CNN)</p>
              <p>
                <Link to="to-link" className="underline">
                  Chris Christie
                </Link>{" "}
                has a message for those calling for him to exit the Republican
                presidential primary to help consolidate the field against
                front-runner{" "}
                <Link to="to-link" className="underline">
                  Donald Trump
                </Link>
                : “I’m not going anywhere.”
              </p>
              <p>
                “If they were up here in New Hampshire and saw the crowds we
                were getting, the reaction we were getting, they wouldn’t
                honestly be able to say any of that,” the former New Jersey
                governor told CNN in an interview Friday.
              </p>
              <p>
                Christie, who is counting on a strong performance in the{" "}
                <Link to="to-link" className="underline">
                  first-in-the-nation primary
                </Link>{" "}
                on January 23 to buoy his campaign, has positioned himself as a
                “truth teller” in the race, drawing a contrast with Trump and
                often criticizing his onetime ally’s conduct.
              </p>
              <p>
                But he has struggled to register in the national polls and, a
                little over a month before voting begins in the GOP primary,
                several top party financiers looking to boost a Trump
                alternative are throwing their support behind former South
                Carolina Gov.{" "}
                <Link to="to-link" className="underline">
                  Nikki Haley
                </Link>
                .
              </p>
              <p>
                <Link to="to-link" className="underline">
                  Chris Christie
                </Link>{" "}
                has a message for those calling for him to exit the Republican
                presidential primary to help consolidate the field against
                front-runner{" "}
                <Link to="to-link" className="underline">
                  Donald Trump
                </Link>
                : “I’m not going anywhere.”
              </p>
              <p>
                “If they were up here in New Hampshire and saw the crowds we
                were getting, the reaction we were getting, they wouldn’t
                honestly be able to say any of that,” the former New Jersey
                governor told CNN in an interview Friday.
              </p>
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  src="videos/FirstSection/video.mp4"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  title="video (online-video-cutter.com)"
                ></iframe>
              </div>

              <p>
                Christie, who is counting on a strong performance in the{" "}
                <Link to="to-link" className="underline">
                  first-in-the-nation primary
                </Link>{" "}
                on January 23 to buoy his campaign, has positioned himself as a
                “truth teller” in the race, drawing a contrast with Trump and
                often criticizing his onetime ally’s conduct.
              </p>
              <p>
                But he has struggled to register in the national polls and, a
                little over a month before voting begins in the GOP primary,
                several top party financiers looking to boost a Trump
                alternative are throwing their support behind former South
                Carolina Gov.{" "}
                <Link to="to-link" className="underline">
                  Nikki Haley
                </Link>
                .
              </p>
              <p>
                <Link to="to-link" className="underline">
                  Chris Christie
                </Link>{" "}
                has a message for those calling for him to exit the Republican
                presidential primary to help consolidate the field against
                front-runner{" "}
                <Link to="to-link" className="underline">
                  Donald Trump
                </Link>
                : “I’m not going anywhere.”
              </p>
              <p>
                “If they were up here in New Hampshire and saw the crowds we
                were getting, the reaction we were getting, they wouldn’t
                honestly be able to say any of that,” the former New Jersey
                governor told CNN in an interview Friday.
              </p>
              <p>
                Christie, who is counting on a strong performance in the{" "}
                <Link to="to-link" className="underline">
                  first-in-the-nation primary
                </Link>{" "}
                on January 23 to buoy his campaign, has positioned himself as a
                “truth teller” in the race, drawing a contrast with Trump and
                often criticizing his onetime ally’s conduct.
              </p>
              <p>
                But he has struggled to register in the national polls and, a
                little over a month before voting begins in the GOP primary,
                several top party financiers looking to boost a Trump
                alternative are throwing their support behind former South
                Carolina Gov.{" "}
                <Link to="to-link" className="underline">
                  Nikki Haley
                </Link>
                .
              </p>
            </div>
            <BannerAdvertisement />
          </div>
          <NinthSection />
        </div>
        <div className="w-full p-4 md:w-1/4">
          <div className="mt-12 md:mt-p12.5rem">
            <div>
              <ColumnHead columnHeadTag={"MORE FROM CNN"} />
            </div>
            <div>
              {smallHorizontalCard.map((card, index) => (
                <SmallHorizontalCard key={index} {...card} />
              ))}
            </div>
            <div className="mt-5">
              <SmallAdvertisement
                imageSrc={"/images/Article/adv.png"}
                tag={"Advertisement"}
                link={"/adv-link"}
              />
            </div>
          </div>
        </div>
      </div>
      <NavFooter />
    </>
  );
};

export default Article;
