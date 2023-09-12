import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = blog=>{
    const updatedBookmarks = [...bookmarks, blog];
    setBookmarks(updatedBookmarks);
  }
  const handleMarkRead = blog=>{
      const updatedReadingTime = readingTime + blog.read_time
      setReadingTime(updatedReadingTime)
      // remove bookmarks from bookmark list
      const remainingBookmark = bookmarks.filter(bookmark=>blog.id !== bookmark.id)
      setBookmarks(remainingBookmark)
  }
  return (
    <div className="max-w-screen-lg mx-auto">
      <Header />
      <div className="flex gap-8 mt-8">
        <div className="w-2/3">
          <Blogs handleBookmark={handleBookmark} handleMarkRead={handleMarkRead} />
        </div>
        <div className="1/3">
          <Bookmarks readingTime={readingTime} bookmarks={bookmarks}/>
        </div>
      </div>
    </div>
  );
}

export default App;
