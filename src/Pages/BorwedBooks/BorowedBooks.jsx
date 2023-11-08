import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BorrowedBooksCard from "./BorrowedBooksCard";

const BorowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowed, setBorrowed] = useState([]);

  const url = `https://library-management-system-server-steel.vercel.app/borrow?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBorrowed(data));
  }, [url]);
  return (
    <div>
      {borrowed?.map((borrow) => (
        <BorrowedBooksCard key={borrow._id} borrow={borrow}></BorrowedBooksCard>
      ))}
    </div>
  );
};

export default BorowedBooks;
// borrow{[0]?.bookDetail?.name}
