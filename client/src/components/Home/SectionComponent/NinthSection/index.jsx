import { MidCard } from "../../../common/Cards";

const NinthSection = () => {
  const midCards = [
    {
      link: "/your-link-url",
      imageSrc: "images/TenthSection/11.webp",
      text: "Windows Users Didn't Know This Simple Trick To Block All Ads (Do It Now)",
      horizontal: true,
    },
    {
      link: "/your-link-url",
      imageSrc: "images/TenthSection/21.webp",
      text: "Castle-Sized Cabin on Lake Tahoe Asks Nearly $50 Million—Glass Funiculars Included",
      tag: "",
      horizontal: true,
    },
  ];

  const midCards2 = [
    {
      link: "/your-link-url",
      imageSrc: "images/TenthSection/31.webp",
      text: "What Happens When Kamala Harris Lives in Your Condo Complex",
      tag: "",
      horizontal: true,
    },
    {
      link: "/your-link-url",
      imageSrc: "images/TenthSection/41.webp",
      text: "Incredible News: The Pain-Relieving Product that Changes Lives!",
      tag: "",
      horizontal: true,
    },

    // Add more cards as needed
  ];

  return (
    <div className="px-8">
      <h2 className="pl-3.5 pb-2 pt-6 font-bold text-4xl">Paid Content</h2>
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

export default NinthSection;
