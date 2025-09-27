import Card from "../components/card/card";

export default {
  component: Card,
};

export const Primary = {
  args: {
    image: "https://picsum.photos/500",
    children: (
      <>
        <p>Little Book of Semaphores</p>
        <p>R$ 999999999.99</p>
      </>
    ),
  },
};
