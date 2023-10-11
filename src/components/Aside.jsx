import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AsideMenuItem from "./AsideMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const Aside = () => {
    const { selectedCategory, setSelectedCategory, mobileMenu } =
        useContext(Context);

    const navigate = useNavigate();

    const clickHandler = (name, type) => {
        switch (type) {
            case "category":
                return setSelectedCategory(name);
            case "home":
                return setSelectedCategory(name);
            case "menu":
                return false;
            default:
                break;
        }
    };

    return (
      <div
        className={`md:block w-[240px] bg-white overflow-y-auto h-full py-4 white absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
          mobileMenu ? "translate-x-0" : ""
        }`}
      >
        <div className="flex px-5 flex-col">
          {categories.map((item) => {
            return (
              <React.Fragment key={item.name}>
                <AsideMenuItem
                  text={item.type === "home" ? "Home" : item.name}
                  icon={item.icon}
                  action={() => {
                    clickHandler(item.name, item.type);
                    navigate("/");
                  }}
                  className={`${
                    selectedCategory === item.name ? "bg-black/[0.15]" : ""
                  }`}
                />
                {item.divider && <hr className="my-5 border-black/[0.2]" />}  
              </React.Fragment>
            );
          })}
          <hr className="my-5 border-black/[0.2]" />
          <div className="text-black/[0.5] text-[12px]">© 2023 Google LLC</div>
        </div>
      </div>
    );
};

export default Aside;
