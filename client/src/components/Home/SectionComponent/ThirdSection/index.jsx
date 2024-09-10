import { BannerAdvertisement } from "../../../common/Advertisement";
import { BigCard, MidCard, SmallHorizontalCard } from "../../../index";

const ThirdSection = () => {
  const midCards = [
    {
      link: "/your-link-url",
      imageSrc: "images/ThridSection/opinion.jpg",
      text: "Madonna’s ‘Celebration Tour’ is her most radical LGBTQ statement in decades",
      tag: "OPINION",
    },

    // Add more cards as needed
  ];
  const smallHorizontalCard = [
    {
      link: "/your-link-url",
      imageSrc: "images/ThridSection/12.jpg",
      text: "More women of color in the US are choosing birth centers over hospitals",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/ThridSection/13.jpg",
      text: "First tyrannosaur fossil discovered with its last meal perfectly preserved in stomach",
      tag: "",
    },

    {
      link: "/your-link-url",
      imageSrc: "images/ThridSection/14.jpg",
      text: "Salah scores 200th Liverpool goal to spark comeback win over Crystal Palace",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/ThridSection/15.jpg",
      text: "Police officer borrows bike to chase drug dealer",
      tag: "",
    },

    // Add more cards as needed
  ];
  const bigCard = [
    {
      link: "/your-link-url",
      imageSrc: "images/ThridSection/21.jpg",
      text: "American teenage phenom Ilia Malinin makes more figure skating history",
      tag: "",
    },

    // Add more cards as needed
  ];

  const smallHorizontalCard2 = [
    {
      link: "/your-link-url",
      imageSrc: "images/ThridSection/22.jpg",
      text: "Retired NYPD cops visited Martin Luther King Jr.’s birth home to take a picture. They caught an alleged would-be arsonist",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/ThridSection/23.jpg",
      text: "The world’s most spectacular coastlines",
      tag: "",
    },

    // Add more cards as needed
  ];

  const midCards2 = [
    {
      link: "/your-link-url",
      imageSrc: "images/ThridSection/31.jpg",
      text: "li MacGraw remembers the ‘generosity’ of her late ‘Love Story’ costar Ryan O’Neal",
      tag: "",
    },

    // Add more cards as needed
  ];
  const smallHorizontalCard3 = [
    {
      link: "/your-link-url",
      imageSrc: "images/ThridSection/32.jpg",
      text: "‘Bone biographies’ reveal what life was like for everyday medieval people",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/ThridSection/33.jpg",
      text: "Could the most magical time of year be so full of loneliness, anger and stress?",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/ThridSection/34.jpg",
      text: "How to care for a Christmas cactus",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/ThridSection/35.jpg",
      text: "‘Sickest thing I’ve ever done’: Watch epic trick off skyscraper",
      tag: "",
    },

    // Add more cards as needed
  ];
  return (
    <>
      <BannerAdvertisement />
      <div className="flex flex-col mx-auto md:px-8 md:flex-row">
        <div className="w-full p-4 md:w-1/3">
          {midCards.map((card, index) => (
            <MidCard key={index} {...card} />
          ))}
          {smallHorizontalCard.map((card, index) => (
            <SmallHorizontalCard key={index} {...card} />
          ))}
        </div>
        <div className="w-full p-4 md:w-2/3">
          {bigCard.map((card, index) => (
            <BigCard key={index} {...card} />
          ))}
          {smallHorizontalCard2.map((card, index) => (
            <SmallHorizontalCard key={index} {...card} />
          ))}
        </div>
        <div className="w-full p-4 md:w-1/3">
          {midCards2.map((card, index) => (
            <MidCard key={index} {...card} />
          ))}
          {smallHorizontalCard3.map((card, index) => (
            <SmallHorizontalCard key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
