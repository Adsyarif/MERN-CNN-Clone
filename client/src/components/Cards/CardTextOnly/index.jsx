import { Link } from "react-router-dom";

const CardTextOnly = ({ link, text, color }) => {
  return (
    <Link to={link}>
      <div className="flex flex-col justify-start mb-4">
        <hr className="flex-grow border-t-1 border-gray-300 mb-4" />
        <p
          className={`self-start decoration-1 hover:underline hover:underline-offset-4 text-base ${
            color ? "text-white" : ""
          }`}
        >
          {text}
        </p>
      </div>
    </Link>
  );
};

export default CardTextOnly;
