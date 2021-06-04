import React from "react";
import { Preloader } from "../components/Preloader";

export default {
  title: "Components/Preloader",
  component: Preloader,
};

const Template = (args) => <Preloader {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: true,
  loaderType: "bounce",
  message: "Logging In",
  // fontSize: 16,
};
