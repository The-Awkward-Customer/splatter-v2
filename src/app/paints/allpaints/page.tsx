import ListItem from "@/components/list-item/list-item";
import Text from "@/components/text/text";
import { UserDetails } from "@/lib/getUser";

export default async function AllPaints() {
  const { userSpecificData } = await UserDetails();

  console.log(userSpecificData);

  return (
    <main>
      <Text textType="p" string="Hello There!" style="body-sm-reg" />
      <h2>All paints</h2>
      {userSpecificData.map((paintObj) => (
        <div key={paintObj.id}>
          <Text textType="p" string={paintObj.id} style="body-sm-reg" />
          <Text textType="p" string={paintObj.name} style="body-sm-reg" />
          <Text
            textType="p"
            string={paintObj.category_id}
            style="body-sm-reg"
          />
          <Text textType="p" string={paintObj.brand_id} style="body-sm-reg" />
        </div>
      ))}
      <ListItem
        slots={{
          SlotOne: (
            <Text textType="p" string="Slot One" style="body-sm-semiBold" />
          ),

          SlotTwo: <Text textType="p" string="Slot Two" style="body-sm-reg" />,
          SlotThree: (
            <Text textType="p" string="Slot Three" style="body-sm-reg" />
          ),
        }}
      />
    </main>
  );
}
