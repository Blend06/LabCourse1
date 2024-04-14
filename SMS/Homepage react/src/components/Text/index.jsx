import React from "react";

const sizes = {
  xs: "text-[28px] font-normal md:text-[26px] sm:text-2xl",
  s: "text-[40px] font-normal md:text-[38px] sm:text-4xl",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-iowanoldstyle ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
