import { Link } from "react-router-dom";

const SmallHorizontalCard = ({ imageSrc, link, text, tag }) => {
  return (
    <Link to={link}>
      <div className="flex mt-2 border-t pt-4">
        <div className="relative group w-1/4">
          <img
            className="w-full h-full object-cover transition-transform transform group-hover:scale-100 hover:grayscale-50"
            src={imageSrc}
            alt={tag}
          />
        </div>
        <h4 className="text-base self-start ml-2 decoration-1 hover:underline hover:underline-offset-4 w-3/4">
          {text}
        </h4>
      </div>
    </Link>
  );
};

export default SmallHorizontalCard;
