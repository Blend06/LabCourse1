import React from "react";

const sizes = {
  s: "text-[39px] font-black md:text-[37px] sm:text-[35px]",
  md: "text-[40px] font-black md:text-[38px] sm:text-4xl",
  xs: "text-4xl font-black md:text-[34px] sm:text-[32px]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_02 font-iowanoldstyle ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
