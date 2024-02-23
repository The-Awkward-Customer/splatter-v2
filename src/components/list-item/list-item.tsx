"use client";

import React from "react";
import cssStyles from "./list-item.module.css";
import Text from "../text/text";
import TagGroup from "../tag-group/tag-group";

type ComponentStructureProps = {
  header?: React.ReactNode;
  prefix?: React.ReactNode;
  slots: {
    SlotOne: React.ReactNode;
    SlotTwo?: React.ReactNode;
    SlotThree?: React.ReactNode;
  };
  suffix?: React.ReactNode;
  footer?: React.ReactNode;
};

export default function ListItemStructure({
  header,
  slots,
  prefix,
  suffix,
  footer,
}: ComponentStructureProps) {
  return (
    <div className={cssStyles["list-item-root"]}>
      {header}
      <div className={cssStyles["list-item-main"]}>
        {prefix}
        <div className={cssStyles["list-item-content-wrapper"]}>
          {slots.SlotOne}
          {slots.SlotTwo}
          {slots.SlotThree}
        </div>
        {suffix}
      </div>
      {footer}
    </div>
  );
}
