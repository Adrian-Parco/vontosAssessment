import React from "react";

const Navbar = () => {
  return (
    <div className="sticky bg-white flex justify-between items-center px-8 py-2 z-50 top-5 shadow-lg w-screen md:fixed md:top-8">
      <div class=" space-y-2 lg:hidden">
        <div class="w-8 h-0.5 bg-gray-600"></div>
        <div class="w-8 h-0.5 bg-gray-600"></div>
        <div class="w-8 h-0.5 bg-gray-600"></div>
      </div>
      <div>
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="22.5" cy="22.5" r="22.5" fill="#D9D9D9" />
        </svg>
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-8 uppercase">
          <li className="cursor-pointer p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-[#D9D9D9] duration-300 rounded-full text-sm">
            Home
          </li>
          <li className="cursor-pointer p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-[#D9D9D9] duration-300 rounded-full text-sm">
            New Arrival
          </li>
          <li className="cursor-pointer p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-[#D9D9D9] duration-300 rounded-full text-sm">
            Shop
          </li>
          <li className="cursor-pointer p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-[#D9D9D9] duration-30  rounded-full text-sm">
            Last Collection
          </li>
          <li className="cursor-pointer p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-[#D9D9D9] duration-300 rounded-full text-sm">
            Men
          </li>
          <li className="cursor-pointer p-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 hover:bg-[#D9D9D9] duration-300 hover:rounded-full rounded-full text-sm">
            Women
          </li>
        </ul>
      </div>
      <div className="flex gap-2 md:gap-4">
        <form className="hidden lg:block">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
        <div className="flex items-center gap-2 lg:gap-5">
          <div className="relative cursor-pointer">
            <svg
              width="21"
              height="25"
              viewBox="0 0 21 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="7"
                width="19"
                height="17"
                rx="4"
                stroke="black"
                stroke-width="2"
              />
              <rect
                x="4"
                y="1"
                width="13"
                height="6"
                rx="2"
                stroke="black"
                stroke-width="2"
              />
            </svg>
            <svg
              className="absolute top-5 left-3"
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5.5" cy="5.5" r="5.5" fill="#D9D9D9" />
            </svg>
          </div>
          <svg
            className="cursor-pointer"
            cursor-pointer
            width="28"
            height="26"
            viewBox="0 0 28 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 3.23607L16.1921 9.98278L16.4167 10.6738H17.1432H24.2371L18.498 14.8435L17.9102 15.2705L18.1347 15.9615L20.3269 22.7082L14.5878 18.5385L14 18.1115L13.4122 18.5385L7.67312 22.7082L9.86526 15.9615L10.0898 15.2705L9.50199 14.8435L3.76289 10.6738H10.8568H11.5833L11.8079 9.98278L14 3.23607Z"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
