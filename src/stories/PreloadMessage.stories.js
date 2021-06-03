import React from "react";
import { PreloadMessage } from "../components/PreloadMessage";

export default {
  title: "Components/PreloadMessage",
  component: PreloadMessage,
};

const Template = (args) => <PreloadMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: true,
  loaderType: "spinner",
  message: "Logging In",
};
