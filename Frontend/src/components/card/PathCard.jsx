import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PathCard = ({ post }) => {
  return (
    <div className="bg-gray-50 flex flex-col h-full border border-gray-200 rounded-2xl ">
      {/* Content Section */}
      <div className="flex flex-col flex-grow p-5 space-y-3 ">
        <h5 className="text-xl font-semibold text-primary">{post.title}</h5>
        <p className="text-sm text-gray-500">{post.description}</p>
      </div>

      <div className="px-5 pb-3">
        <h1 className="text-sm text-gray-600">
          <span className="font-medium">Offered by:</span> {post.offeredBy}
        </h1>
      </div>

      {/* Footer Section */}
      <div className="flex justify-end items-center p-4 px-6 gap-5 border-t-1 border-gray-200 ">
        <Link
          to={`/account/path/${post.id}`}
          className="text-primary text-sm font-semibold hover:text-primary-dark transition hover:underline"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

// **PropTypes validation**
PathCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    offeredBy: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default PathCard;
