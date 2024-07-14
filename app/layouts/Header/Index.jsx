import React from "react";

function Header() {
  return (
    // <div className=" bg-white w-full text-blue-500 border-b border-outline fixed top-0 z-50 ">
    //   <div className="flex  flex-wrap px-4 py-3 items-center">
    //     <nav className="flex items-center justify-between w-full mx-auto">
    //       <div className="flex">
    //         <div>burger menu</div>
    //         <div>project name</div>
    //       </div>
    //       <div className="flex justify-center items-center">
    //         <div>Country</div>
    //         <div>User icon</div>
    //         <div>Username</div>
    //       </div>
    //     </nav>
    //   </div>
    // </div>
    /////
    // <div className="flex justify-between">
    //   <div className="flex">
    //     <div>burger</div>
    //     <div>Project name</div>
    //   </div>
    //   <div className="flex">
    //     <div>flag</div>
    //     <div>user</div>
    //   </div>
    // </div>

    <header className="border-b border-outline fixed top-0 z-50 bg-white w-full">
      <div className="flex flex-wrap px-4 py-3 items-center">
        <nav className="w-full mx-auto flex items-center justify-between">
          <div className="flex justify-center items-center">
            <div>image</div>
            <div>Branding</div>
          </div>
          <div className="flex justify-center items-center">
            <div>Country</div>
            <div>dropdown</div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
