import React from "react";
import { LineProgress } from "../components/LineProgress/LineProgress";

export default {
  title: "Components/LineProgress",
  component: LineProgress,
};

const Template = (args) => <LineProgress {...args} />;

export const Default = Template.bind({});

Default.args = {
  loading: true,
  error: false,
};
