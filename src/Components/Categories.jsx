import React from "react";
import categoryPic from "../assets/categoryPic.jpg";

const Categories = () => {
  const categories = [
    { id: 1, cat: "Sweatshirt" },
    { id: 2, cat: "Hoodies" },
    { id: 3, cat: "Pair" },
  ];
  return (
    <div className='bg-[#EBEAE8] py-20'>
      <div className="flex flex-col items-center justify-center  gap-8  md:flex-row">
        {categories.map((category) => (
          <div className="categories w-52 h-80 relative">
            <img src={categoryPic} alt="" className="rounded-md absolute" />
            <input
              type="button"
              value={category.cat}
              className="absolute  left-1/2 bottom-10 transform -translate-x-1/2 bg-white  px-10 rounded-full shadow-xl text-md "
            />
          </div>
        ))}
      </div>
      <div>
        <h2 className="hidden px-14 indent-4 text-justify mt-8 md:block lg:px-48">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
          alias quasi mollitia voluptates voluptatem possimus. Dolorem itaque
          laborum maiores! Quos maiores fugiat architecto consectetur suscipit
          dolore, eveniet ad alias a. Explicabo, nam fuga in sed nostrum tenetur
          nesciunt ut doloremque vel asperiores ad esse veniam tempore ducimus
          reiciendis iste consectetur debitis labore officiis quia soluta,
          voluptatum corporis commodi quidem. Ea?
        </h2>
      </div>
    </div>
  );
};

export default Categories;
