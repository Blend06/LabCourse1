import React from "react";

const sizes = {
  s: "text-3xl font-black md:text-[28px] sm:text-[26px]",
  md: "text-4xl font-black md:text-[34px] sm:text-[32px]",
  xs: "text-[27px] font-black md:text-[25px] sm:text-[23px]",
  lg: "text-[44px] font-black md:text-[40px] sm:text-[34px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-iowanoldstyle ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
