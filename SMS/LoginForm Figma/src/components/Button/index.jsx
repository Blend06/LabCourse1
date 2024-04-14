import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[30px]",
  square: "rounded-[0px]",
};
const variants = {
  gradient: {
    blue_100_6d_gray_100_6d: "bg-gradient shadow-md text-black-900_7f",
  },
  fill: {
    light_blue_400: "bg-light_blue-400 shadow-md text-white-A700",
  },
};
const sizes = {
  sm: "h-[60px] px-[27px] text-3xl",
  md: "h-[67px] pl-2.5 pr-[35px] text-[28px]",
  xs: "h-[32px] px-[25px] text-sm",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "gradient",
  size = "sm",
  color = "light_blue_400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["sm", "md", "xs"]),
  variant: PropTypes.oneOf(["gradient", "fill"]),
  color: PropTypes.oneOf(["blue_100_6d_gray_100_6d", "light_blue_400"]),
};

export { Button };
