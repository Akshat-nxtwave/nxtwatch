import React from "react";
import { Container } from "./styles";
type Props = {
  height: string;
  width: string;
  rounding?: string;
};
const Placeholder = (props: Props) => {
  return <Container data-testid="placeholder-div" {...props} />;
};

export default Placeholder;
