import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
const DetailBook = () => {
   const initialBookDetail = useLoaderData();
   const [bookDetail, setBookDetail] = useState(initialBookDetail);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    setBookDetail(initialBookDetail);
  }, [initialBookDetail]);

  const handleBook = () => {

    console.log('clicked')
    const email = user.email;
    const order = {
      bookDetail,
      email,
    };

    fetch("https://library-management-system-server-steel.vercel.app/borrow", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          fetch(
            `https://library-management-system-server-steel.vercel.app/updateQuantity/${bookDetail._id}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ $inc: { quantity: -1 } }),
            }
          )
            .then((res) => res.json())
            .then((updateData) => {
              console.log("Book quantity updated:", updateData);
             
                  setBookDetail((prevBookDetail) => ({
                    ...prevBookDetail,
                    quantity: prevBookDetail.quantity - 1,
                  }));
            });
          Swal.fire({
            title: "Success",
            text: "Book Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });

  };

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:w-[1140px] mx-auto pt-16">
        <div className=" lg:col-span-2 border-8 rounded-2xl border-[#3873b6]">
          <div className="card card-compact rounded-none w-full bg-[#7474742f] shadow-xl">
            <figure>
              <img
                className="h-[400px] mt-8"
                src={bookDetail.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-3xl bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2] inline-block text-transparent bg-clip-text">
                {name}
              </h2>
              <p className="text-xl ">{bookDetail.description}</p>
              <Link
                to="/read-more"
                className="bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2] inline-block text-transparent bg-clip-text text-xl font-bold underline border-b-2"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="border-8 border-[#3873b6] rounded-2xl bg-[#7474742f]  lg:col-span-1">
          <div className="card card-compact rounded-none w-full  h-full">
            <div className="card-body">
              <div className="">
                <h2 className="card-title font-bold pb-8 text-3xl bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2] inline-block text-transparent bg-clip-text">
                  Author: {bookDetail.authorName}
                </h2>
                <p className="text-xl pt-4 font-bold border-b-2 pb-4 border-[#709cce]">
                  Category: {bookDetail.bookCategory}
                </p>
                <p className="text-xl pt-4 font-bold border-b-2 pb-4 border-[#709cce]">
                  Available Quantity: {bookDetail.quantity}
                </p>
                <p className="pt-4">
                  {" "}
                  <ReactStars
                    count={5}
                    size={30}
                    value={bookDetail.rating}
                    name="rating"
                  />
                </p>
              </div>
            </div>
            <Link onClick={handleBook}>
              <button className="btn bg-gradient-to-r from-[#3873b6] to-[#5d9ee2] border-none text-white font-bold justify-items-end my-8 mx-4">
                Borrow
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
