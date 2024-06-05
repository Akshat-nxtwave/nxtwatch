import { GetJWT } from "../utils/GetJWT";
import { render, screen } from "@testing-library/react";
import React from "react";

import { StoreContext } from "../utils/ContextUtils";
import TitleBar from "../components/TitleBar";
import StoreClasses from "../store/mobx";
import Placeholder from "../components/Placeholder";
describe("test", () => {
  it("should test for jwt", () => {
    expect(GetJWT()).toBe("");
  });

  it("should check for button in TitleBar", () => {
    render(<Placeholder height="20px" width="20px" />);
    const div = screen.getByTestId("placeholder-div");
    expect(div).toBeInTheDocument();
  });
  // it('should check for login redirect', ()=>{

  //         render(<BrowserRouter>
  //             <StoreWrapper>
  //               <App />
  //             </StoreWrapper>
  //           </BrowserRouter>)
  //         // const root = screen.getByTestId("title-app");
  //         // console.log(root,'ppppp')
  //         // expect(root).toBeInTheDocument();
  //         // const { a } = render(<AppWrapper />);
  //         // console.log(a);
  //         expect("Hi").toEqual("Hi");
  // })
});
