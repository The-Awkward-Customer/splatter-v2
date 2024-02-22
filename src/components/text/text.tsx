"use client";
import { ReactNode } from "react";
import cssStyles from "./text.module.css";

type Styles =
  | "body-xs-semiBold"
  | "body-sm-semiBold"
  | "body-md-semiBold"
  | "body-lg-semiBold"
  | "body-xs-reg"
  | "body-sm-reg"
  | "body-md-reg"
  | "body-lg-reg";

type TextProps = {
  textType: keyof React.ReactHTML; // This prop defines the type of text element to render (e.g., 'p', 'h1', 'h2')
  string: string; // This is the text or content you want to render within the text element
  style: Styles; // The style prop now maps directly to class names in the CSS module
};

export default function Text({ textType, style, string }: TextProps) {
  const TextTag = textType; // Dynamically set the tag type

  // Directly access the corresponding CSS module class using the style prop
  const className = cssStyles[style] || "";

  return <TextTag className={className}>{string}</TextTag>;
}
