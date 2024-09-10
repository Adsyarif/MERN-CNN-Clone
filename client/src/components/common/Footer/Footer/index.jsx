import { NavLink } from "react-router-dom";

const Footer = () => {
  const policies = [
    { url: "to-term-of-use", title: "Term of Use" },
    { url: "to-privacy-policy", title: "Privacy Policy" },
    { url: "to-cookie-setting", title: "Cookie Settings" },
    { url: "to-add-choices", title: "Ad Choices" },
    { url: "to-access-and-cc", title: "Accessibility & CC" },
    { url: "to-about", title: "About" },
    { url: "to-newsletters", title: "Newsletters" },
    { url: "to-transcripts", title: "Transcripts" },
  ];
  return (
    <>
      <div className="text-white text-sm flex flex-wrap items-center justify-start w-full mt-4 gap-4">
        {policies.map((policy, index) => (
          <NavLink key={index} to={policy.url} className="hover:text-gray-300">
            {policy.title}
          </NavLink>
        ))}
      </div>
      <p className="text-white text-sm mt-4">
        &copy; 2024 Cable News Network. A Warner Bros. Discovery Company. All
        Rights Reserved.
        <br /> CNN Sans &#8482; & &copy; 2016 Cable News Network.
      </p>
    </>
  );
};

export default Footer;
