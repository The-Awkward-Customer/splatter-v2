import Button from "@/components/button/button";
import ListItemStructure from "@/components/list-item/list-item";
import Text from "@/components/text/text";
import { UserDetails } from "@/lib/getUser";

export default async function AllPaints() {
  const { userSpecificData } = await UserDetails();

  console.log(userSpecificData);

  return (
    <div>
      <h2>All paints</h2>
      <Button type="text-only" size="sm" text="hello" />

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
