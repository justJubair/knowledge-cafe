import { useEffect, useState } from "react"
import Blog from "../Blog/Blog"
import PropTypes from 'prop-types'


const Blogs = ({handleBookmark}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        const loadBlogs = async ()=>{
            const res = await fetch('blogs.json');
            const data = await res.json();
            setBlogs(data)
        }
        loadBlogs();
    },[])
   
  return (
    <div>
       <div>
       {
            blogs.map(blog=><Blog key={blog.id} handleBookmark={handleBookmark} blog={blog}/>)
        }
       </div>
       
    </div>
  )
}

Blogs.propTypes = {
  handleBookmark: PropTypes.func,
};
export default Blogs
