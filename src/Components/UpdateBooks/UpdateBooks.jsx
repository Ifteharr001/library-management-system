import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBooks = () => {
  const data = useLoaderData();
  const {_id, image, authorName, quantity, description, name, bookCategory, rating } = data;

  const handleUpdateBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const authorName = form.authorName.value;
    const image = form.image.value;
    const bookCategory = form.bookCategory.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const updateBook = {
      name,
      authorName,
      image,
      bookCategory,
      quantity,
      description,
      rating,
    };
    fetch(` http://localhost:5000/books/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Book Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="py-6">
      <h2 className="text-4xl font-bold  text-center ">
        Update{" "}
        <span className="bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2]  text-transparent bg-clip-text">
          Book
        </span>
      </h2>

      <div className="hero">
        <div className="hero-content ">
          <div className="card flex-shrink-0 lg:w-[800px] shadow-2xl bg-gradient-to-r from-[#3873b6] to-[#5d9ee2] border-none">
            <form onSubmit={handleUpdateBook} className="card-body ">
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
                    defaultValue={name}
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
                    defaultValue={authorName}
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
                    defaultValue={image}
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
                    defaultValue={bookCategory}
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
                    defaultValue={quantity}
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
                    defaultValue={description}
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
                <input
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  defaultValue={rating}
                  className="input input-bordered text-white  bg-transparent border-2 border-white rounded-[100px]"
                  required
                />
              </div>
              <input
                className="btn btn-block rounded-[100px] bg-[#192e44] border-none text-white mt-8"
                type="submit"
                value="Update Book"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBooks;
