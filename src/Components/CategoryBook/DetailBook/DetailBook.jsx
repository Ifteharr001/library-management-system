import { useLoaderData } from "react-router-dom";

const DetailBook = () => {
    const bookDetail = useLoaderData();
    return (
        <div>
            {bookDetail.name}
        </div>
    );
};

export default DetailBook;