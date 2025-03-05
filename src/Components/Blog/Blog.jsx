import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarks, handleReadingTime }) => {
    const { cover, author_img, author, posted_date, reading_time, title, hashtags } = blog;

    return (
        <div className='mb-30'>
            <img src={cover} alt="" />

            {/* profile info */}
            <div className='flex justify-between items-center my-7'>
                {/* profile */}
                <div className='flex gap-5'>
                    <img className='md:w-[3.5vw] sm:w-20 w-25' src={author_img} alt="" />
                    <div className='space-y-1'>
                        <h3 className='font-bold md:text-xl sm:text-3xl text-[2.5rem] '>{author}</h3>
                        <p className='md:text-sm sm:text-xl text-[1.8rem] text-[#11111199]'>{posted_date}</p>
                    </div>
                </div>

                {/* bookmarks */}
                <div className='text-[#11111199] md:text-xl sm:text-3xl text-[2.3rem] flex items-center gap-2'>
                    <p><span>{reading_time}</span> min read</p>
                    <button onClick={() => handleBookmarks(blog)}><FaRegBookmark /></button>
                </div>
            </div>

            {/* title */}
            <h1 className='md:text-3xl sm:text-4xl text-5xl font-bold md:w-[35vw] w-[45vw] md:my-0 my-10'>{title}</h1>

            {/* hashtag */}
            <div className='flex gap-3 my-6 text-[#11111199] md:text-md sm:text-lg text-2xl'>
                {
                    hashtags.map((hashtag, idx) => <a key={idx}>#{hashtag}</a>)
                }
            </div>

            <button onClick={() => handleReadingTime(blog)} className='text-[#6047EC] border-b font-semibold md:text-sm sm:text-base text-[2rem]'>Mark as read</button>

        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.number.isRequired
}

export default Blog;