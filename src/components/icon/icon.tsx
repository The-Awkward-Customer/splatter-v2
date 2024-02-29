import cssStyles from "./icon.module.css";
import { icons } from "@/components/icons/icons";

type Colors = "primary" | "on-primary" | "green-success";

type IconProps = {
  name: string;
  size: "sm" | "md" | "lg" | "xl" | "xxl";
  color: string | Colors;
};

export default function Icon({ name, size, color }: IconProps) {
  const wrapperSize = cssStyles[`${size}`];

  // @ts-ignore
  const Icon = icons[name];
  if (!Icon) return null; // Return null or a default icon if not found

  return (
    <div className={wrapperSize}>
      <Icon color={color} />
    </div>
  );
}
