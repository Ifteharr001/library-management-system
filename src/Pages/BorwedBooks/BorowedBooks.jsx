import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BorrowedBooksCard from "./BorrowedBooksCard";
import Swal from "sweetalert2";

const BorowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowed, setBorrowed] = useState([]);



  const url = `https://library-management-system-server-steel.vercel.app/borrow?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBorrowed(data));
  }, [url]);

  const handleBookReturn = (id) => {
   
      fetch(
        `https://library-management-system-server-steel.vercel.app/borrow/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            // eslint-disable-next-line react/prop-types
            const remaining = borrowed?.filter(
              (borrows) => borrows?._id !== id
            );
            setBorrowed(remaining)
            
          }
        });
    }
 
  return (
    <div className="mt-16">
      {borrowed?.map((borrow) => (
        <BorrowedBooksCard
          key={borrow._id}
          borrow={borrow}
          handleBookReturn={handleBookReturn}
        ></BorrowedBooksCard>
      ))}
    </div>
  );
};

export default BorowedBooks;
// borrow{[0]?.bookDetail?.name}
