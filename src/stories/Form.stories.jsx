import Form, { PasswordInput, TextInput } from "@/components/Form";

export default {
  title: "Components/Form",
  component: Form,
  subcomponents: { TextInput, PasswordInput },
};

export const Default = {
  args: {
    children: (
      <>
        <TextInput id="input1" label="Input 1" placeholder="Input 1" />
        <TextInput id="input2" label="Input 2" placeholder="Input 2" />
        <PasswordInput id="password" />
      </>
    ),
    actionLabel: "Submit",
  },
};

export const LoginForm = {
  args: {
    children: (
      <>
        <TextInput id="input1" label="Input 1" placeholder="Input 1" />
        <TextInput id="input2" label="Input 2" placeholder="Input 2" />
        <PasswordInput id="password" />
      </>
    ),
    actionLabel: "Sign up",
    isLogin: true,
  },
};
