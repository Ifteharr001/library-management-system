import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold mb-8">404 ERROR</h1>
              <div>
                <Link to="/">
                  <button className="btn bg-[#ff4605] hover:bg-[#81391e] text-white font-bold border-none w-[200px]">
                    Go Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;