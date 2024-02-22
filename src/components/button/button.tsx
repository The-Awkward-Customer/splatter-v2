"use client";

import styles from "./button.module.css";

// Define the props for the button component
type ButtonProps = {
  type: "text-only" | "text-and-icon" | "icon-only"; // Type of the button
  text?: string; // Optional text for the button
  icon?: JSX.Element; // Optional icon as a React component
};

export function Button({ type, text, icon }: ButtonProps) {
  return <button></button>;
}
