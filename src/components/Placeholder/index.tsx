import React from "react";
import { Container } from "./styles";
type Props = {
  height: string;
  width: string;
  rounding?: string;
};
const Placeholder = (props: Props) => {
  return <Container {...props} />;
};

export default Placeholder;
