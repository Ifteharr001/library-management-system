import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Swal from "sweetalert2";

const AddBook = () => {
  const [rating, setRating] = useState(3);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const authorName = form.authorName.value;
    const image = form.image.value;
    const bookCategory = form.bookCategory.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const newBook = {
      name,
      authorName,
      image,
      bookCategory,
      quantity,
      description,
      rating,
    };
    console.log(newBook);

    fetch("https://library-management-system-server-steel.vercel.app/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
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
    <div className="py-6">
      <h2 className="text-4xl font-bold  text-center ">
        Add{" "}
        <span className="bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2]  text-transparent bg-clip-text">
          New Book
        </span>
      </h2>

      <div className="hero">
        <div className="hero-content ">
          <div className="card flex-shrink-0 lg:w-[800px] shadow-2xl bg-gradient-to-r from-[#3873b6] to-[#5d9ee2] border-none">
            <form onSubmit={handleAddBook} className="card-body ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-white font-bold">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered text-white bg-transparent border-2 border-white rounded-[100px]"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-white font-bold">
                      Author Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="authorName"
                    placeholder=" Author Name"
                    className="input input-bordered text-white  bg-transparent border-2 border-white rounded-[100px]"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-white font-bold">
                      Image URL
                    </span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    className="input input-bordered text-white  bg-transparent border-2 border-white rounded-[100px]"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-white font-bold">
                      Select Book Category
                    </span>
                  </label>
                  <select
                    className="rounded-[100px] text-white bg-transparent border-2  h-[46px] border-white"
                    id="book-category"
                    name="bookCategory"
                  >
                    <option className="text-black" value="drama">
                      Drama
                    </option>
                    <option className="text-black" value="thriler">
                      Thriller
                    </option>
                    <option className="text-black" value="history">
                      History
                    </option>
                    <option className="text-black" value="novel">
                      Novel
                    </option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-white font-bold">
                      Quantity
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder=" Quantity of the book"
                    name="quantity"
                    className="input input-bordered text-white  bg-transparent border-2 border-white rounded-[100px]"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-white font-bold">
                      Short Description
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Short Description"
                    name="description"
                    className="input input-bordered  text-white bg-transparent border-2 border-white rounded-[100px]"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-white font-bold">
                    Rating
                  </span>
                </label>
                <ReactStars
                  count={5} // Number of stars
                  size={40}
                  value={3} // Set the initial value
                  onChange={ratingChanged}
                  name="rating"
                  required
                />
                {/* <input
                
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  className="input input-bordered text-white  bg-transparent border-2 border-white rounded-[100px]"
                  required
                /> */}
              </div>
              <input
                className="btn btn-block rounded-[100px] bg-[#192e44] border-none text-white mt-8"
                type="submit"
                value="Add Book"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
