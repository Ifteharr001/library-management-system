
const BorrowedBooksCard = ({borrow}) => {
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>category</th>
                <th>Return Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th></th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={borrow?.bookDetail?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {borrow?.bookDetail?.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{borrow?.bookDetail?.bookCategory}</td>
                <td>Return date</td>
                <th>
                  <button className="btn btn-ghost btn-xs">return</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default BorrowedBooksCard;