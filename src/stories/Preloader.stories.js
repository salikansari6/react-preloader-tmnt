import React from "react";
import { Dots } from "../components/Loaders/Dots";
import { Spinner } from "../components/Loaders/Spinner";
import { Preloader } from "../components/Preloader";

export default {
  title: "Components/Preloader",
  component: Preloader,
};

const Template = (args) => <Preloader {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: true,
  loaderType: Dots,
};
