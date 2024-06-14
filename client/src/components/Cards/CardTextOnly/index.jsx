import { Link } from "react-router-dom";

const CardTextOnly = ({ link, text }) => {
  return (
    <Link to={link}>
      <div className="flex flex-col justify-start mb-4">
        <hr className="flex-grow border-t-1 border-gray-300 mb-4" />
        <p className="self-start hover:text-gray-700 hover:underline text-base">
          {text}
        </p>
      </div>
    </Link>
  );
};

export default CardTextOnly;
