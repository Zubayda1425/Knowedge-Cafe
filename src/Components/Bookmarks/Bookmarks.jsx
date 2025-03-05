import Bookmark from "../../Bookmark/Bookmark";


const Bookmarks = ({ bookmark, readingTime }) => {
    return (
        <div className="w-1/3 ">
            <div className="bg-[#6047EC1A] text-[#6047EC] text-center md:text-xl sm:text-2xl text-3xl font-bold py-5  border border-[#6047EC] rounded-md mb-5">
                <h1>Spent time on read : {readingTime}</h1>
            </div>
            <div className="bg-[#1111110D] rounded-md py-7 px-6">
                <h1 className="md:text-xl sm:text-2xl text-3xl font-bold mb-6">Bookmarked Blogs: {bookmark.length}</h1>
                {bookmark.map(blog => <Bookmark
                    bookmark={blog}
                ></Bookmark>)}


            </div>
        </div>
    );
};

export default Bookmarks;