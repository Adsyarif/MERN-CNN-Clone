import {
  CardTextOnly,
  MidCard,
  BigCard,
  SmallHorizontalCard,
  ColumnHead,
  SmallAdvertisement,
} from "../../index";

const SecondSection = () => {
  const midCards = [
    {
      link: "/your-link-url",
      imageSrc: "images/FirstSection/news2.jpg",
      text: "Bear attacks in Japan are at a record high. Climate change and an aging population worsening the problem",
      tag: "",
    },

    // Add more cards as needed
  ];
  const textOnly = [
    {
      link: "/your-link-url",
      text: "Texas Supreme Court blocks pregnant woman from emergency abortion",
    },
    {
      link: "/your-link-url",
      text: "HIV vaccine trial dubbed ‘last roll of the dice’ halted over poor results",
    },
    {
      link: "/your-link-url",
      text: "Bill Nye explains how climate change is affecting our pocket books",
    },
    {
      link: "/your-link-url",
      text: "Tesla failed at battery swapping. Stellantis says it may have the secret",
    },
    {
      link: "/your-link-url",
      text: "‘Not done yet.’ Cristiano Ronaldo scores on his 1,200th game",
    },
  ];
  const bigCard = [
    {
      link: "/your-link-url",
      imageSrc: "images/SecondSection/Feature1.jpg",
      text: "Extinction Rebellion climate activists dye Venice’s Grand Canal green in COP 28 protest",
      tag: "",
    },

    // Add more cards as needed
  ];
  const smallHorizontalCard = [
    {
      link: "/your-link-url",
      imageSrc: "images/SecondSection/Feature2.jpg",
      text: "Her mother vanished when she was 1. Some 40 years later, a phone call from a stranger helped her understand why",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/SecondSection/Feature3.jpg",
      text: "The grove robbers flooding the market with fake extra virgin olive oil",
      tag: "",
    },

    // Add more cards as needed
  ];
  const smallHorizontalCard3 = [
    {
      link: "/your-link-url",
      imageSrc: "images/SecondSection/n1.jpg",
      text: "Texas Supreme Court blocks pregnant woman from emergency abortion",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/SecondSection/n2.jpg",
      text: "Analysis: Rishi Sunak is picking a fight on an issue that he probably cannot win",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/SecondSection/n3.jpg",
      text: "Tesla failed at battery swapping. Stellantis says it may have the secret",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/SecondSection/n4.jpg",
      text: "‘Massive coup’: Top golfer who once criticized LIV golf joins for $300M",
      tag: "",
    },

    // Add more cards as needed
  ];
  return (
    <div className="flex flex-col md:px-8 md:flex-row">
      <div className="w-full md:w-1/3 p-4">
        <ColumnHead columnHeadTag="MORE TOP STORIES" />
        {midCards.map((card, index) => (
          <MidCard key={index} {...card} />
        ))}
        {textOnly.map((card, index) => (
          <CardTextOnly key={index} {...card} />
        ))}
      </div>
      <div className="w-full md:w-1/3 p-4">
        <ColumnHead columnHeadTag="FEATURED" />
        {bigCard.map((card, index) => (
          <BigCard key={index} {...card} />
        ))}
        {smallHorizontalCard.map((card, index) => (
          <SmallHorizontalCard key={index} {...card} />
        ))}
      </div>
      <div className="w-full md:w-1/3 p-4">
        <SmallAdvertisement
          link={"/adv-link"}
          imageSrc={"images/SecondSection/adv.jpg"}
          tag={"Advertisment"}
        />
        <div>
          {smallHorizontalCard3.map((card, index) => (
            <SmallHorizontalCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
