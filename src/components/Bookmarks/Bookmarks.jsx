import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div>
      <div className="bg-slate-200 p-6 rounded-lg">
        <h1 className="font-bold text-xl">
          Bookmarked Blogs: {bookmarks.length}
        </h1>
        <div className="space-y-4 my-4">
          {bookmarks.map((bookmark, idx) => (
            <Bookmark key={idx} bookmark={bookmark} />
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.object,
};

export default Bookmarks;
