import { MidCard } from "../../Cards";

const SeventhSection = () => {
  const midCards = [
    {
      link: "/your-link-url",
      imageSrc: "images/EighthSection/11.webp",
      text: "'She wasn't too interested in talking': Cop pulls over 2-year-old",
      tag: "Watch",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/EighthSection/12.webp",
      text: "Sheep rescued after spending years at bottom of sea cliff",
      tag: "Watch",
    },

    // Add more cards as needed
  ];
  const midCards2 = [
    {
      link: "/your-link-url",
      imageSrc: "images/EighthSection/21.webp",
      text: "Watch Australian woman break world record for surfing giant wave",
      tag: "Watch",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/EighthSection/22.webp",
      text: "New footage shows Alec Baldwin firing prop gun on 'Rust' set",
      tag: "Watch",
    },

    // Add more cards as needed
  ];

  return (
    <div className="px-8">
      <h2 className="pl-3.5 pb-2 pt-6 font-bold text-4xl">Watch It</h2>
      <div className="flex flex-col flex-wrap md:flex-row">
        <div className="p-4 w-full md:w-1/2">
          {midCards.map((card, index) => (
            <MidCard key={index} {...card} />
          ))}
        </div>
        <div className="p-4 w-full md:w-1/2">
          {midCards2.map((card, index) => (
            <MidCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
