/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable react/jsx-pascal-case */
import { GetJWT } from "../utils/GetJWT";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import { AppWrapper } from "../index";
import * as SubmitUtils from "../utils/SubmitUtils";
import Placeholder from "../components/Placeholder";
import { BrowserRouter } from "react-router-dom";
import { DimensionsCard } from "../utils/DimensionsCard";
import LoginMain from "../routes/Login";

describe("test", () => {
  it("should check for login redirect", () => {
    const { getByTestId, getByRole } = render(<AppWrapper />);
    const App = screen.getByTestId("roott");
    expect(App).toBeInTheDocument();

    const passwordInput = getByTestId("login-password");
    expect(passwordInput).toBeInTheDocument();
    const checkBox = getByRole("checkbox");
    expect(checkBox).toBeInTheDocument();
    expect(passwordInput).toHaveProperty("type", "password");

    fireEvent.click(checkBox);
    expect(passwordInput).toHaveProperty("type", "text");
  });

  it("should check Mounting of placeholder", () => {
    const { getByTestId } = render(<Placeholder height="20px" width="20px" />);
    const div = getByTestId("placeholder-div");
    expect(div).toBeInTheDocument();
  });

  it("should test for login form values", async () => {
    const { getByTestId, queryByTestId } = render(
      <BrowserRouter>
        <LoginMain />
      </BrowserRouter>
    );
    const onSubmitMock = jest.fn();
    jest.spyOn(SubmitUtils, "onSubmit").mockImplementation(onSubmitMock);

    const userInput = getByTestId("login-username");
    expect(userInput).toBeInTheDocument();
    const ele = getByTestId("loginSubmit");
    expect(ele).toBeInTheDocument();
    expect(queryByTestId("error-login")).not.toBeInTheDocument();
    fireEvent.click(ele);

    fireEvent.click(screen.getByText("Show Password"));
    expect(getByTestId("login-password")).toHaveProperty("type", "text");

    // await waitFor(() => {
    //   expect(screen.getByTestId("error-login")).toBeInTheDocument();
    // });
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });

  it("should test for jwt", () => {
    expect(GetJWT()).toBe("");
    document.cookie = "jwtToken=abcd;";
    expect(GetJWT()).toBe("abcd");
    document.cookie = "";
  });
  // render(<AppWrapper />);

  it("should get test dimension utils", () => {
    expect(DimensionsCard(true, true)).toHaveProperty("width", "100%");
    expect(DimensionsCard(true, true)).toHaveProperty("height", "300px");
    expect(DimensionsCard(false, "")).toHaveProperty("height", "200px");
    expect(DimensionsCard("", true)).toHaveProperty("height", "250px");
  });
});
