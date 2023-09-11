import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  console.log(blog);
  const {
    title,
    cover_img,
    author,
    author_img,
    publish_date,
    read_time,
    hashtags,
  } = blog;
  return (
    <div>
      <img src={cover_img} alt="" />
      <div>
        <div>
          <img className="w-16 rounded-full" src={author_img} alt="" />
          <div>
            <h4>{author}</h4>
            <p><small>{publish_date}</small></p>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
