import React from "react";
import { Spinner } from "../components/Loaders/Spinner";
import { PreloadMessage } from "../components/PreloadMessage";
import { Dots } from "../components/Loaders/Dots";

export default {
  title: "Components/PreloadMessage",
  component: PreloadMessage,
};

const Template = (args) => <PreloadMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: true,
  message: "Logging In",
  loaderType: Dots,
  // fontSize: "16",
};
