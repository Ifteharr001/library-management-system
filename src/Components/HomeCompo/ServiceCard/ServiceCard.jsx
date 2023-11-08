const ServiceCard = () => {
  return (
    <div className="mt-16 w-[1140px] mx-auto">
      <div className="card grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  text-white font-bold border-none shadow-xl">
        <div className="card-body grid grid-cols-2 rounded-xl justify-center bg-gradient-to-r from-[#3873b6] to-[#5d9ee2] border-none text-white font-bold items-center">
          <div>
            <img
              className="w-[50px] h-[50px]"
              src="//noraure-5.myshopify.com/cdn/shop/files/free-delivery_small.png?v=1645701204"
              alt=""
            />
          </div>
          <div>
            <h2 className="card-title">Free Shipping</h2>
            <p className="text-sm">Order over $100</p>
          </div>
        </div>
        <div className="card-body grid rounded-xl grid-cols-2 bg-gradient-to-r from-[#3873b6] to-[#5d9ee2] border-none text-white font-bold justify-center items-center">
          <div>
            <img
              className="w-[50px] h-[50px]"
              src="//noraure-5.myshopify.com/cdn/shop/files/shield_small.png?v=1645701325"
              alt=""
            />
          </div>
          <div>
            <h2 className="card-title">Secure Payment</h2>
            <p className="text-sm">100% Secure Payment</p>
          </div>
        </div>
        <div className="card-body rounded-xl grid grid-cols-2 bg-gradient-to-r from-[#3873b6] to-[#5d9ee2] border-none text-white font-bold justify-center items-center">
          <div>
            <img
              className="w-[50px] h-[50px]"
              src="//noraure-5.myshopify.com/cdn/shop/files/best-price_small.png?v=1645701387"
              alt=""
            />
          </div>
          <div>
            <h2 className="card-title">Best Price</h2>
            <p className="text-sm">Guaranteed Low Cost</p>
          </div>
        </div>
        <div className="card-body rounded-xl grid grid-cols-2 bg-gradient-to-r from-[#3873b6] to-[#5d9ee2] border-none text-white font-bold justify-center items-center">
          <div>
            <img
              className="w-[50px] h-[50px]"
              src="//noraure-5.myshopify.com/cdn/shop/files/return_small.png?v=1645701443"
              alt=""
            />
          </div>
          <div>
            <h2 className="card-title">Easy Return</h2>
            <p className="text-sm">Within 30 Days returns</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
