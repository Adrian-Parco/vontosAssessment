import React from "react";
import salesPic from "../assets/categoryPic.jpg";

const Sale = () => {
  const sale = [
    { id: 1, brand: "LOREM IPSUM", info: "Lorem Ipsum", discount: "15% OFF" },
    { id: 2, brand: "LOREM IPSUM", info: "Lorem Ipsum", discount: "15% OFF" },
    { id: 3, brand: "LOREM IPSUM", info: "Lorem Ipsum", discount: "15% OFF" },
    { id: 4, brand: "LOREM IPSUM", info: "Lorem Ipsum", discount: "15% OFF" },
    { id: 5, brand: "LOREM IPSUM", info: "Lorem Ipsum", discount: "15% OFF" },
    { id: 6, brand: "LOREM IPSUM", info: "Lorem Ipsum", discount: "15% OFF" },
  ];
  return (
    <div className="py-5 flex flex-col items-center">
      <div className="shadow-xl w-screen flex justify-center ">
        <h1 className="text-[#CF4242] font-semibold text-[35px] md:hidden">
          SALE
        </h1>
        <div className="hidden md:flex gap-14 text-[#CF4242] text-[32px] uppercase">
          <p>Sale</p>
          <p>Sale</p>
          <p>Sale</p>
          <p>Sale</p>
          <p>Sale</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-[30px] justify-center py-10">
        {sale.map((item) => (
          <div className="mt-8">
            <div className="relative">
              <img
                src={salesPic}
                alt=""
                width={141}
                height={200}
                className="rounded-md shadow-md"
              />
              <h2 className="absolute -right-6 top-5 z-10 text-xs bg-[#E0CA9E] p-1">
                {item.discount}
              </h2>
            </div>
            <div className="mt-4">
              <h1 className="font-bold">{item.brand}</h1>
              <h2 className="">{item.info}</h2>
            </div>
          </div>
        ))}
      </div>
      <input
        type="button"
        value="MORE"
        className="rounded-full shadow-xl px-12 py-2"
      />
    </div>
  );
};

export default Sale;
