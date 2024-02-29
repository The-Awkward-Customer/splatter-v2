import cssStyles from "./tag-group.module.css";
import Tag from "../tag/tag";

type TagGroupProps = {
  tags: {
    label: string | any;
    color: "neutral";
    size: "sm" | "lg";
    icon?: React.ReactNode;
  }[];
};

export default function TagGroup({ tags }: TagGroupProps) {
  return (
    <div className={cssStyles["tag-group-root"]}>
      {tags.map((tag) => (
        <Tag
          key={tag.label}
          label={tag.label}
          color={tag.color}
          size={tag.size}
          icon={tag.icon}
        />
      ))}
    </div>
  );
}
