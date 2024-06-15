import React from "react";

import { MidCard, CardTextOnly, BigBannerAdvertisement } from "../../index";

function TenthSection() {
  const midCards = [
    {
      link: "/your-link-url",
      imageSrc: "images/EleventhSection/11.jpg",
      text: "This ‘American Gandhi’ never got the attention he deserved because he was gay. A new film may change that",
      tag: "ANALYSIS",
      color: "black",
    },

    // Add more cards as needed
  ];

  const textOnly = [
    {
      link: "/your-link-url",
      text: "Hundreds of thousands of galaxies fill a single image taken by new telescope",
      color: "black",
    },
    {
      link: "/your-link-url",
      text: "The water has turned a shocking shade of magenta in this Hawaii refuge",
      color: "black",
    },
    {
      link: "/your-link-url",
      text: "China blames Canada for ‘malicious, provocative’ moves after close midair intercepts over South China Sea",
      color: "black",
    },
    {
      link: "/your-link-url",
      text: "You can rent Martha’s Stewart’s farm guesthouse — for just $11.23",
      color: "black",
    },
    {
      link: "/your-link-url",
      text: "Caster Semenya says taking testosterone-reducing medication was ‘hell’",
      color: "black",
    },
    {
      link: "/your-link-url",
      text: "Inside Dolly Parton’s new resort lodge in the Tennessee mountains",
      color: "black",
    },
    {
      link: "/your-link-url",
      text: "CNN Exclusive Chinese jet fired flares close to submarine-hunting helicopter in South China Sea, Canadian Navy says",
      color: "black",
    },
    {
      link: "/your-link-url",
      text: "Mosquitoes are driving these birds to extinction. With only 5 left in the wild, scientists are racing to save the species",
      color: "black",
    },
  ];

  return (
    <div>
      <h2 className="pt-6 px-12 pb-2 text-4xl bg-black text-white font-bold">
        In Case You Missed It
      </h2>
      <div className="px-8 flex flex-wrap bg-black">
        <div className="w-full md:w-3/5 p-4">
          {midCards.map((card, index) => (
            <div key={index} className="mb-4">
              <MidCard {...card} />
            </div>
          ))}
        </div>

        <div className="w-full md:w-2/5 p-4">
          {textOnly.map((card, index) => (
            <CardTextOnly key={index} {...card} />
          ))}
        </div>
      </div>
      <BigBannerAdvertisement />
    </div>
  );
}

export default TenthSection;
