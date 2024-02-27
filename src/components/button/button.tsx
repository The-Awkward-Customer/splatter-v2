"use client";

import Text from "../text/text";
import cssStyles from "./button.module.css";

type Sizes = "sm" | "md";

// Define the props for the button component
type ButtonProps = {
  type: "text-only" | "icon-and-text" | "icon-only"; // Type of the button
  text?: string | any; // Optional text for the button
  icon?: React.ReactNode; // Optional icon as a React component
  size: Sizes; // Size of the button
};

export default function Button({ type, text, icon, size }: ButtonProps) {
  // Dynamically generate the class name based on type and size
  const className = `${type}-${size}`;
  // Use the dynamically generated class name to access the corresponding class from cssStyles
  const buttonClass = cssStyles[className];

  return (
    <button className={buttonClass}>
      {/* Conditionally render icon if type is not 'text-only' */}
      {type !== "text-only" && icon}

      {/* Conditionally render text if type is not 'icon-only' */}
      {type !== "icon-only" && (
        <Text
          textType="p"
          string={text}
          typeStyle="body-sm-semiBold"
          colorStyle="primary"
        />
      )}
    </button>
  );
}
