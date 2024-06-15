import { Link } from "react-router-dom";

const VerticalBanner = ({ link, tag, imageSrc }) => {
  return (
    <Link to={link}>
      <div className="relative w-full h-full group">
        <img
          className="w-full h-full object-cover transition-transform transform group-hover:scale"
          src={imageSrc}
          alt={tag}
        />
        <div className="absolute inset-0 bg-gray-400 opacity-10"></div>
        {tag ? <div className="text-xs">{tag}</div> : ""}
      </div>
    </Link>
  );
};

export default VerticalBanner;
