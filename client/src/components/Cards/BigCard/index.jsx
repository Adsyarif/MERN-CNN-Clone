import { Link } from "react-router-dom";

const BigCard = ({ imageSrc, link, text, tag }) => {
  // const { imageSrc, link, text, tag } = props;
  return (
    <Link to={link}>
      <div className="max-w-screen mx-auto mb-3">
        <div className="relative group">
          <img
            className="w-full h-full object-cover transition-transform transform group-hover:scale-100 hover:grayscale-50"
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
          <h4 className="text-xl font-bold mb-2 mt-2 decoration-1 hover:underline hover:underline-offset-4">
            {text}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default BigCard;
