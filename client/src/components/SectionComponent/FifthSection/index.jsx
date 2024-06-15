import { CardTextOnly, ColumnHead, MidCard } from "../../index";

const FifthSection = () => {
  const midCards = [
    {
      link: "/your-link-url",
      imageSrc: "images/SixthSection/11.jpg",
      text: "He consumed more than 40,000 calories running four and half days while barely sleeping",
      tag: "",
    },

    // Add more cards as needed
  ];
  const midCards2 = [
    {
      link: "/your-link-url",
      imageSrc: "images/SixthSection/21.jpg",
      text: "Painting valued at $15K turns out to be by Rembrandt. Now it has sold for almost $14M",
      tag: "",
    },

    // Add more cards as needed
  ];
  const midCards3 = [
    {
      link: "/your-link-url",
      imageSrc: "images/SixthSection/31.jpg",
      text: "How a Biden move to drop terrorist designation on Iran-backed militia backfired",
      tag: "",
    },

    // Add more cards as needed
  ];

  const textOnly = [
    {
      link: "/your-link-url",
      text: "UK government signs Hillsborough Charter, acknowledges ‘multiple injustices’ suffered by soccer stadium disaster victims",
    },
    {
      link: "/your-link-url",
      text: "The Hughes brothers had a historic night on the ice, playing in the same game for the first time as New Jersey Devils win",
    },
    {
      link: "/your-link-url",
      text: "Messi effect? US to host 2024 Copa América across 14 cities",
    },
    {
      link: "/your-link-url",
      text: "Aaron Rodgers criticizes ‘character assassination’ of Jets teammate Zach Wilson",
    },
  ];
  const textOnly2 = [
    {
      link: "/your-link-url",
      text: "Meet the South Korean artist using her own body as a canvas",
    },
    {
      link: "/your-link-url",
      text: "The photographer capturing unexpected moments of peace in busy cities",
    },
    {
      link: "/your-link-url",
      text: "‘Final’ photos of nursing pioneer Florence Nightingale up for auction",
    },
    {
      link: "/your-link-url",
      text: "How ‘The Crown’ recreated Kate Middleton’s 2000s style",
    },
    {
      link: "/your-link-url",
      text: "British poet and author Benjamin Zephaniah dies aged 65",
    },
  ];
  const textOnly3 = [
    {
      link: "/your-link-url",
      text: "Why COP28 is so infuriating",
    },
    {
      link: "/your-link-url",
      text: "Celebrities speaking out on the war in Gaza should consider this",
    },
    {
      link: "/your-link-url",
      text: "Beneath the rubble, the unreachable bodies of my Palestinian family",
    },
    {
      link: "/your-link-url",
      text: "No one does capitalism like Taylor Swift",
    },
  ];
  return (
    <div>
      <div className="flex flex-col flex-wrap md:px-8 md:flex-row">
        <div className="w-full p-4 sm:w-1/2 md:w-1/3">
          <ColumnHead columnHeadTag={"SPORT"} />
          {midCards.map((card, index) => (
            <MidCard key={index} {...card} />
          ))}
          {textOnly.map((text, index) => (
            <CardTextOnly key={index} {...text} />
          ))}
        </div>
        <div className="w-full p-4 sm:w-1/2 md:w-1/3">
          <ColumnHead columnHeadTag={"STYLE"} />
          {midCards2.map((card, index) => (
            <MidCard key={index} {...card} />
          ))}
          {textOnly2.map((text, index) => (
            <CardTextOnly key={index} {...text} />
          ))}
        </div>
        <div className="w-full p-4 sm:w-1/2 md:w-1/3">
          <ColumnHead columnHeadTag={"OPINION"} />
          {midCards3.map((card, index) => (
            <MidCard key={index} {...card} />
          ))}
          {textOnly3.map((text, index) => (
            <CardTextOnly key={index} {...text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
