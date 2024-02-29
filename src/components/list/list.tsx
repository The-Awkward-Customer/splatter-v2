"use client";
import Button from "../button/button";
import ListItemStructure from "../list-item/list-item";
import Text from "../text/text";

type FilterableListProps = {
  dataObj: {
    key: string;
    SlotOne: string;
    SlotTwo: string;
  };
};

export default function FilterableList({ dataObj }: FilterableListProps) {
  return (
    <div>
      <h2>All paints</h2>
      <ListItemStructure
        key={dataObj.key}
        slots={{
          SlotOne: (
            <Text
              textType="p"
              string={dataObj.SlotOne}
              typeStyle="body-sm-semiBold"
              colorStyle="primary"
            />
          ),
          SlotTwo: (
            <Text
              textType="p"
              string={dataObj.SlotTwo}
              typeStyle="body-sm-reg"
              colorStyle="secondary"
            />
          ),
        }}
        suffix={<Button variant="primary" type="icon-only" size="sm" />}
      />
    </div>
  );
}
