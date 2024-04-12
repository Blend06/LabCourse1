import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[30px]",
};
const variants = {
  gradient: {
    blue_100_6d_gray_100_6d: "bg-gradient shadow-md text-black-900_7f",
  },
  fill: {
    pink_600: "bg-pink-600 shadow-lg text-black-900",
  },
};
const sizes = {
  sm: "h-[67px] pr-[35px] text-3xl",
  xs: "h-[60px] px-[27px] text-3xl",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "gradient",
  size = "xs",
  color = "pink_600",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-3xl min-w-[213px] ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["gradient", "fill"]),
  color: PropTypes.oneOf(["blue_100_6d_gray_100_6d", "pink_600"]),
};

export { Button };
