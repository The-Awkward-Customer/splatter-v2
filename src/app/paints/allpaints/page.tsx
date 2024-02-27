import Button from "@/components/button/button";
import Icon from "@/components/icon/icon";
import ListItemStructure from "@/components/list-item/list-item";
import Text from "@/components/text/text";
import { UserDetails } from "@/lib/getUser";

export default async function AllPaints() {
  const { userSpecificData } = await UserDetails();

  console.log(userSpecificData);

  return (
    <div>
      <h2>All paints</h2>
      <Button type="text-only" size="sm" text="text-only-sm" />
      <Button type="icon-and-text" size="sm" text="icon-and-text-sm" />
      <Button type="icon-only" size="sm" text="icon-only-md" />
      <Button type="text-only" size="md" text="text-only-md" />
      <Button type="icon-and-text" size="md" text="icon-and-text-md" />
      <Button type="icon-only" size="md" text="icon-only-md" />

      <Icon name="clock" size="lg" color="success" />
      <Icon name="user" size="md" color="primary" />
      <Icon name="plus" size="xxl" color="success" />

      {userSpecificData.map((paintObj) => (
        <ListItemStructure
          key={paintObj.id}
          slots={{
            SlotOne: (
              <Text
                textType="p"
                string={paintObj.name}
                typeStyle="body-sm-semiBold"
                colorStyle="primary"
              />
            ),
            SlotTwo: (
              <Text
                textType="p"
                string={paintObj.brand_name}
                typeStyle="body-sm-reg"
                colorStyle="secondary"
              />
            ),
          }}
        />
      ))}
    </div>
  );
}
