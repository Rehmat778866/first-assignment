import Link from "next/link";
import React from "react";

const Navbar = () => {
return(
    <nav className="h-20 w-full bg-black flex items-center justify-between px-10 text-white">
      <div className="text-2xl font-bold uppercase">Rehmat Khalid (RK)</div>
      <ul className="h-full flex">
        {["home", "about", "contact", "programming", "services"].map(
          (val, ind) => (
            <Link href={val !== "programming" ? `/${val !== "home" ? val : ""}` : "/job/programming"}>
              <li
                key={ind}
                className="h-full px-4 cursor-pointer hover:bg-slate-600 duration-200 flex items-center justify-center capitalize"
              >
                {val}
              </li>
            </Link>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
