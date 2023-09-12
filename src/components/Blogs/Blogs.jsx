import { useEffect, useState } from "react"
import Blog from "../Blog/Blog"


const Blogs = () => {
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
    <div className="flex mt-8">
       <div className="w-2/3">
       {
            blogs.map(blog=><Blog key={blog.id} blog={blog}/>)
        }
       </div>
       <div className="1/3">
            <h1>bookmarks</h1>
       </div>
    </div>
  )
}

export default Blogs
