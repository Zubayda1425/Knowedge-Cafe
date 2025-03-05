

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark
    return (
        <div>
            <h1 className="bg-white px-3 py-5 rounded-md md:text-sm sm:text-lg text-xl font-semibold mb-3">{title}</h1>
        </div>
    );
};

export default Bookmark;