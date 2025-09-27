import Card from "@/components/card/card";

export default {
  title: "Components/Card",
  component: Card,
};

export const Default = {
  args: {
    image: "https://picsum.photos/100",
    children: (
      <div>
        <strong>Card title</strong>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          qui nobis, ut reiciendis iusto quasi pariatur rem facilis velit fuga.
        </p>
      </div>
    ),
  },
};
