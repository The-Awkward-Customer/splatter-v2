"use client";
import { useRouter } from "next/navigation";

import cssStyles from "./button.module.css";

type Sizes = "sm" | "md";
type Variants = "primary" | "secondary";

// Define the props for the button component
type ButtonProps = {
  variant: Variants; // Variant of the button
  type: "text-only" | "icon-and-text" | "icon-only"; // Type of the button
  text?: string | any; // Optional text for the button
  children?: React.ReactNode; // Optional icon as a React component
  size: Sizes; // Size of the button
  route?: string | null;
};

export default function Button({
  type,
  text,
  children,
  size,
  variant,
  route,
}: ButtonProps) {
  const router = useRouter();
  const typeSizeClass = cssStyles[`${type}-${size}`]; // Access the first class
  const variantClass = cssStyles[variant]; // Access the second class separately
  const buttonClass = `${typeSizeClass} ${variantClass}`; // Combine them

  function HandleClick() {
    if (route) {
      // If route is provided, use it to navigate
      router.push(route);
    } else {
      console.log("No route provided");
    }
    // If no route is provided, this function will do nothing
    // You can also implement other default actions here if needed
  }

  return (
    <button className={buttonClass} onClick={HandleClick}>
      {/* Conditionally render icon if type is not 'text-only' */}
      {type !== "text-only" && children}

      {/* Conditionally render text if type is not 'icon-only' */}
      {type !== "icon-only" && <p>{text}</p>}
    </button>
  );
}
