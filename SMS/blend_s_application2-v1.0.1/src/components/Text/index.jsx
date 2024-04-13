import React from "react";

const sizes = {
  xs: "text-[10px] font-normal",
  lg: "text-[29px] font-normal md:text-[27px] sm:text-[25px]",
  s: "text-sm font-normal",
  "2xl": "text-[50px] font-normal md:text-[46px] sm:text-[40px]",
  xl: "text-[40px] font-normal md:text-[38px] sm:text-4xl",
  md: "text-xl font-normal",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_02 font-itim ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
