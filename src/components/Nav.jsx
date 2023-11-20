import { useState } from "react";

const Nav = () => {
  //logic
  const [isDropDown, setisDropDown] = useState(false);
  const toggleDropDown = () => {
    setisDropDown(!isDropDown);
  };
  //logic ends
  return (
    <header className=" bg-blue-300">
      <nav
        className=" w-full h-16  flex justify-between  items-center px-10  md:px-4 sm:gap-8"
      >
        <h1 className=" whitespace-nowrap text-2xl text-indigo-700 font-bold ">
          Md Faizanuddin.
        </h1>
        <div className={`${isDropDown ? 'block top-16 ' : 'hidden'} absolute   max-sm:bg-blue-300 w-full left-0 flex flex-col items-center text-lg font-semibold text-indigo-600 sm:flex sm:static sm:flex-row sm:justify-end `}>
          <ul className=" flex flex-col gap-6 sm:flex-row sm:gap-8 ">
            <li className=" hover:text-blue-100 cursor-pointer ">
              <a href="#">Education</a>
            </li>
            <li className=" hover:text-blue-100 cursor-pointer">
              <a href="#">Contact</a>
            </li>
            <li className=" hover:text-blue-100 cursor-pointer">
              <a href="src\assets\resume.pdf">Resume</a>
            </li>
            <li className=" hover:text-blue-100 cursor-pointer">
              <a href="#">Personal</a>
            </li>
          </ul>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleDropDown} className="focus:outline-none">
            <span className="hover:text-blue-100 text-3xl text-blue-600" href="#">
              &#8801;
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
