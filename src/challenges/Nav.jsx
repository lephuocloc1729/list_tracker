import React from "react";

const Nav = ({ children, onClick }) => {
  return (
    <button
      className="py-2 px-10 bg-slate-500 flex-1 border-[1px] border-black text-white flex items-center justify-center hover:bg-slate-400 focus:bg-slate-400 text-xl transition-all duration-200 font-bold"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Nav;
