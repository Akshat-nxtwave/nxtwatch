import { GetJWT } from "../utils/GetJWT";
import App from "../components/App";
import StoreWrapper from "../components/StoreWrapper";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { StoreContext } from "../utils/ContextUtils";
import TitleBar from "../components/TitleBar";
import StoreClasses from "../store/mobx";
describe("test", () => {
  it("should test for jwt", () => {
    expect(GetJWT()).toBe("");
  });

  it("should check for button in TitleBar", () => {
    const store = new StoreClasses.ThemeClass();
    const savedVideosStore = new StoreClasses.VideosList();
    render(
      <StoreContext.Provider value={{ store, savedVideosStore }}>
        <TitleBar setIsOpen={() => {}} show={true} />
      </StoreContext.Provider>
    );
    const button = screen.getByTestId("titlebar-button");
    // console.log(button,'ppppp')
    expect(button).toBeInTheDocument();
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
