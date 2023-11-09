

// eslint-disable-next-line react/prop-types
const BorrowedBooksCard = ({ borrow, handleBookReturn }) => {
  // eslint-disable-next-line react/prop-types

  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}

          <tbody>
            {/* row 1 */}
            <tr>
              <th></th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        className="rounded-none"
                        // eslint-disable-next-line react/prop-types
                        src={borrow?.bookDetail?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{borrow?.bookDetail?.name}</div>
                  </div>
                </div>
              </td>
              <td>{borrow?.bookDetail?.bookCategory}</td>
              <td>Return date</td>
              <th>
                <button
                  onClick={() => handleBookReturn(borrow?._id)}
                  className="btn btn-xs bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2] text-white font-bold border-none"
                >
                  return
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowedBooksCard;