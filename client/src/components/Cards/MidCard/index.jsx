import { Link } from "react-router-dom";

const MidCard = ({ imageSrc, link, text, tag }) => {
  // const { imageSrc, link, text, tag } = props;
  return (
    <Link to={link}>
      <div className="pb-2">
        <div className="relative w-305 h-171 group">
          <img
            className="w-full h-full object-cover transition-transform transform group-hover:scale-100"
            src={imageSrc}
            alt={tag}
          />
          {tag ? (
            <div className="absolute bottom-0 left-0 bg-white text-red-600 text-xs bold px-2 py-1 font-bold">
              {tag}
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2 mt-2 hover:underline hover:text-gray-700">
            {text}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default MidCard;
