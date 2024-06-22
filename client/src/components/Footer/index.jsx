import { NavLink } from "react-router-dom";

const Footer = ({ serachText }) => {
  const handleInputChange = (event) => {
    console.log(event.target.value);
  };

  const categoriesRow1 = [
    {
      title: "World",
      items: [
        "Africa",
        "Americas",
        "Asia",
        "Australia",
        "China",
        "Europe",
        "India",
        "Middle East",
        "United Kingdom",
      ],
    },
    {
      title: "US Politics",
      items: ["The Biden Presidency", "Facts First", "2024 Elections"],
    },
    {
      title: "Business",
      items: ["Markets", "Tech", "Media", "Calculators", "Videos"],
    },
    {
      title: "Health",
      items: [
        "Life, But Better",
        "Fitness",
        "Food",
        "Sleep",
        "Mindfulness",
        "Relationships",
      ],
    },
    {
      title: "Entertainment",
      items: ["Movies", "Television", "Celebrity"],
    },
    {
      title: "Tech",
      items: [
        "Innovate",
        "Gadget",
        "Foreseeable Future",
        "Mission: Ahead",
        "Upstarts",
        "Work Transformed",
        "Innovative Cities",
      ],
    },
    {
      title: "Style",
      items: [
        "Arts",
        "Design",
        "Fashion",
        "Architecture",
        "Luxury",
        "Beauty",
        "Video",
      ],
    },

    // Add other categories similarly
  ];
  const categoriesRow2 = [
    {
      title: "Travel",
      items: ["Destinations", "Food & Drink", "Stay", "News", "Videos"],
    },
    {
      title: "Sports",
      items: [
        "Football",
        "Tennis",
        "Golf",
        "Motorsport",
        "US Sports",
        "Olympics",
        "Climbing",
        "Esports",
        "Hockey",
      ],
    },
    {
      title: "Watch",
      items: [
        "Live TV",
        "Digital Studios",
        "CNN Films",
        "HLN",
        "TV Schedule",
        "TV Shows A-Z",
        "CNNVR",
      ],
    },
    {
      title: "Features",
      items: [
        "As Equals",
        "Call to Earth",
        "Freedom Project",
        "Impact Your World",
        "Inside Africa",
        "2 Degrees",
        "CNN Heroes",
        "All Features",
      ],
    },
    {
      title: "Weather",
      items: ["Climate", "Wildfire Tracker", "Video"],
    },
    {
      title: "More",
      items: [
        "Photos",
        "Longform",
        "Investigations",
        "CNN Profiles",
        "CNN Leadership",
        "CNN Newsletters",
        "Work for CNN",
      ],
    },
    // Add other categories similarly
  ];

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
      <div className="bg-black text-white p-4">
        <div className="grid grid-cols-7 pb-4">
          {categoriesRow1.map((category, index) => (
            <div key={index} className="border-b-3 border-white">
              <span className="font-bold text-lg">{category.title}</span>
              <div className="flex flex-col flex-wrap mt-2 ">
                {category.items.map((item, i) => (
                  <NavLink
                    key={i}
                    to={`/${category.title.toLowerCase()}/${item.toLowerCase()}`}
                    className={
                      "py-1 text-sm leading-none hover:underline hover:underline-offset-2"
                    }
                    exact
                  >
                    {item}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 pb-4">
          {categoriesRow2.map((category, index) => (
            <div key={index} className="border-b-3 border-white">
              <span className="font-bold text-lg">{category.title}</span>
              <div className="flex flex-col flex-wrap mt-2 ">
                {category.items.map((item, i) => (
                  <NavLink
                    key={i}
                    to={`/${category.title.toLowerCase()}/${item.toLowerCase()}`}
                    className={
                      "py-1 text-sm leading-none hover:underline hover:underline-offset-2"
                    }
                    exact
                  >
                    {item}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
