import cssStyles from "./icon.module.css";
import Image from "next/image";

type IconProps = {
  name: string;
  size: "sm" | "md" | "lg";
  color: "primary" | "secondary";
};

export default function icon({ name, size, color }: IconProps) {
  const iconSize = cssStyles[`${size}`];
  const iconColor = cssStyles[`${color}`];

  return (
    <div className={`${cssStyles["icon-root"]} ${iconSize} ${iconColor}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d={icons[name]} />
      </svg>
    </div>
  );
}
