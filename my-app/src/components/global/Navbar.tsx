import React from "react";

function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 py-4 px-4 bg-black/40 border-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">Fu</p>
        <img
          src=""
          width={15}
          height={15}
          alt="fuzzy logo"
          className="shadow-sm"
        />
        <p className="text-3xl font-bold">zie</p>
      </aside>
    </header>
  );
}

export default Navbar;
