"use client";

import styles from "./text.module.css";

type TextProps = {
  text: keyof React.ReactHTML; // This prop defines the type of text element to render (e.g., 'p', 'h1', 'h2')
  className?: string; // Optional className prop for applying styles
  string: string; // This is the text or content you want to render within the text element
};

export default function Text({ text, className, string }: TextProps) {
  const Text = text; // Dynamically set the tag type

  // Apply the className from props if provided, otherwise, use a default className
  const finalClassName = className ? className : "";

  return <Text className={`${styles[finalClassName]}`}>{string}</Text>;
}
