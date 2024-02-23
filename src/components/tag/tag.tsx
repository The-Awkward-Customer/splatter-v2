import Text from "../text/text";
import cssStyles from "./tag.module.css";

type Colors = "neutral";
type Sizes = "sm" | "lg";

type TagProps = {
  label: string;
  color: Colors;
  size: Sizes;
  icon?: React.ReactNode;
};

export default function tag({ label, color, size, icon }: TagProps) {
  const tagColor = cssStyles[`${color}`];
  const tagSize = cssStyles[`${size}`];

  const textStyle = size === "sm" ? "body-sm-reg" : "body-lg-reg";

  return (
    <div className={`${cssStyles["tag-root"]} ${tagColor} ${tagSize}`}>
      {icon}
      <Text
        textType="p"
        string={label}
        typeStyle={textStyle}
        colorStyle="primary"
      />
    </div>
  );
}
