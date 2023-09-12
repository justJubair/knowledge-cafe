import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks,setBookmarks] = useState([])

  const handleBookmark = (blog)=>{
    const updatedBookmarks = [...bookmarks, blog];
    setBookmarks(updatedBookmarks);
  }
  return (
    <div className="max-w-screen-lg mx-auto">
      <Header />
      <div className="flex gap-8 mt-8">
        <div className="w-2/3">
          <Blogs handleBookmark={handleBookmark} />
        </div>
        <div className="1/3">
          <Bookmarks bookmarks={bookmarks}/>
        </div>
      </div>
    </div>
  );
}

export default App;
