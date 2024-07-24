import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For getting the active route
import sidebarMenu from "@/app/data/sidebarMenu.js";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isExpanded }) => {
  const sidebarClass = isExpanded ? "w-60 p-2" : "w-24";
  const pathname = usePathname();

  const ListMenu = sidebarMenu.map((menu, index) => (
    <Fragment key={menu.id}>
      {menu.name === "home" ? (
        <button
          className={`${
            isExpanded
              ? "w-[220px] h-[45px] px-3 m-2 transition-width duration-200 ease-in-out"
              : "w-[76px] h-[65px] mx-2 transition-width duration-200 ease-in-out"
          } group border-0 hover:bg-[#B7DAFC]
                        ${pathname === "/" ? "bg-[#0077D4] rounded" : ""}`}
        >
          <ul>
            <li>
              <Link href={menu.route} className={`${isExpanded ? "flex" : ""}`}>
                <div>
                  <Image
                    id={menu.id}
                    className={`m-auto ${
                      pathname === "/"
                        ? "brightness-0 saturate-[100%] invert group-hover:brightness-100"
                        : ""
                    }`}
                    src={menu.icon}
                    alt="menu-icon"
                  />
                </div>
                <div
                  className={`${
                    isExpanded
                      ? "ml-3 text-[12px] flex items-center"
                      : "text-[10px]"
                  }  text-center capitalize
                                    ${
                                      pathname === "/"
                                        ? "text-white group-hover:text-[#1D364E]"
                                        : "text-[#73777F] group-hover:text-[#1D364E]"
                                    }`}
                >
                  {menu.name}
                </div>
              </Link>
            </li>
          </ul>
        </button>
      ) : (
        <button
          className={`${
            isExpanded
              ? "w-[220px] h-[45px] px-3 m-2"
              : "w-[76px] h-[65px] mx-2"
          } group border-0 hover:bg-[#B7DAFC] capitalize
                        ${
                          pathname.includes(menu.name)
                            ? "bg-[#0077D4] rounded"
                            : ""
                        }`}
        >
          <ul>
            <li>
              <Link href={menu.route} className={`${isExpanded ? "flex" : ""}`}>
                <div>
                  <Image
                    id={menu.id}
                    className={`m-auto ${
                      pathname.includes(menu.name)
                        ? "brightness-0 saturate-[100%] invert group-hover:brightness-100"
                        : ""
                    }`}
                    src={menu.icon}
                    alt="menu-icon"
                  />
                </div>
                <div
                  className={`${
                    isExpanded
                      ? "ml-3 text-[12px] flex items-center"
                      : "text-[10px]"
                  }  text-center
                                    ${
                                      pathname.includes(menu.name)
                                        ? "text-white group-hover:text-[#1D364E]"
                                        : "text-[#73777F] group-hover:text-[#1D364E]"
                                    }
                                    `}
                >
                  {menu.name}
                </div>
              </Link>
            </li>
          </ul>
        </button>
      )}
    </Fragment>
  ));

  return (
    <aside
      id="sidebar"
      className={`${sidebarClass}  space-y-6 pt-20 px-0 inset-y-0 left-0 transform relative  transition duration-200 ease-in-out border-r border-outline`}
    >
      {ListMenu}
    </aside>
  );
};

export default Sidebar;
