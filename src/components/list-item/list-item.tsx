"use client";

import React from "react";
import "./list-item.module.css";

// type ComponentProps={
//    TextSlotOne: React.ReactNode
//    TextSlotTwo: React.ReactNode
//    TextSlotThree: React.ReactNode
// }

type ComponentProps = {
  prefix: React.ReactNode;
  slots: {
    SlotOne: React.ReactNode;
    SlotTwo: React.ReactNode;
    SlotThree: React.ReactNode;
  };
  suffix: React.ReactNode;
};

export default function ListItem({ slots, prefix, suffix }: ComponentProps) {
  return (
    <div className="list-item-root">
      {prefix}
      <div className="list-item-text-container">
        {slots.SlotOne}
        {slots.SlotTwo}
        {slots.SlotThree}
      </div>
      {suffix}
    </div>
  );
}
