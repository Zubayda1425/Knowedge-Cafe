
import { useState } from 'react'
import './App.css'
import Blog from './Components/Blog/Blog'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  // bookmark
  const [bookmarks, setBookmark] = useState([]);
  const handleBookmarks = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmark(newBookmark);
  }


  // adding time 
  const [readingTime, setReadingTime] = useState(0);
  const handleReadingTime = blog => {
    const newReadingTime = readingTime + blog.reading_time;
    setReadingTime(newReadingTime);

    const remainigBookmark = bookmarks.filter(bookmark => blog.id !== bookmark.id);
    setBookmark(remainigBookmark);
  }


  return (
    <div>
      <header className='md:w-[70vw] w-[80vw] mx-auto'>
        <Header></Header>
      </header>
      <hr className='border-gray-400 my-8' />

      <main className='flex md:w-[70vw] w-[80vw] mx-auto'>
        <Blogs
          handleBookmarks={handleBookmarks}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        
        <Bookmarks
          bookmark={bookmarks}
          readingTime={readingTime}
        ></Bookmarks>
      </main>
    </div>
  )
}

export default App
