import PropTypes from "prop-types";
import { useState } from "react";

import { BsBookmarkCheck } from "react-icons/bs";

const Blog = ({ blog, handleBookmark, handleMarkRead }) => {
  const [bookmarkClick, setBookmarkClick] = useState(false);
  const {
    title,
    cover_img,
    author,
    author_img,
    publish_date,
    read_time,
    hashtags,
  } = blog;
  const handleChangeBookmarkColor=()=>{
    setBookmarkClick(!bookmarkClick)
  }
  const fatherHandleBookmark =()=>{
    handleBookmark(blog)
    handleChangeBookmarkColor()
  }
  return (
    <div className="space-y-3 mb-14 border-b-2 pb-4">
      <img className="mb-6" src={cover_img} alt="" />
      {/* authors prifile */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img className="w-16 rounded-full" src={author_img} alt="" />
          <div>
            <h4 className="text-lg font-semibold">{author}</h4>
            <p className="text-slate-600">
              <small>{publish_date}</small>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <small className="text-slate-600">{read_time} min read</small>
          {/* bookmark button */}
          <button onClick={fatherHandleBookmark} className="text-xl" style={{color: bookmarkClick ? 'green' : 'red'}}>
            <BsBookmarkCheck />
          </button>
        </div>
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      {/* hashtags */}
      <div>
        {hashtags.map((hashtag, idx) => (
          <span className="mr-2 text-slate-600" key={idx}>
            #{hashtag}
          </span>
        ))}
      </div>
      {/* mark as read button */}
      <button onClick={()=> handleMarkRead(blog)} className="text-violet-600 font-semibold underline">
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func,
  handleMarkRead: PropTypes.func
};

export default Blog;
