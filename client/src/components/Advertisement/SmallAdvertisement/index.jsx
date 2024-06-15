import { Link } from "react-router-dom";

const SmallAdvertisement = ({ link, imageSrc, tag }) => {
  return (
    <Link to={link}>
      <div className="w-full h-64 group mb-4">
        <div className="w-full h-full group">
          <img
            className="w-full h-full object-cover"
            src={imageSrc}
            alt={tag}
          />
        </div>
        <div className="text-xs">{tag}</div>
      </div>
    </Link>
  );
};

export default SmallAdvertisement;
