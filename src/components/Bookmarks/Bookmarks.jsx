import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
import ReadingTime from "../ReadingTime/ReadingTime";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div>
        {/*totla reading time */}
        <div className="border-2 text-center border-violet-400 p-4 bg-violet-100 mb-4">
            <ReadingTime readingTime={readingTime}/>
        </div>
        {/* bookmarks */}
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
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired
};

export default Bookmarks;
