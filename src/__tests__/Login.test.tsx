/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent, waitFor } from "@testing-library/react";
import { AppWrapper } from "..";
import {
  getFormattedUrl,
  getBackgroundColor,
  getUrlFromPath,
} from "../utils/pathUrlUtils";

describe("test for redirecting", () => {
  it("should check redirect to home", () => {
    document.cookie = "jwtToken=3fafae;";
    const { getByText, queryByText, getByTestId } = render(<AppWrapper />);
    const btn = getByText("Logout");
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(getByText("Are You Sure You Want To Logout?")).toBeInTheDocument();
    fireEvent.click(getByTestId("modal-cancel"));
    expect(queryByText("Confirm")).not.toBeInTheDocument();
  });

  it("shpuld test for formatted string", () => {
    expect(getFormattedUrl("https://apis.ccbp.in/videos/324-123-4123")).toBe(
      "324-123-4123"
    );
  });

  it("should test for BackgroundColor util fn", () => {
    expect(getBackgroundColor("PENDING")).toBe("#ffff11");
    expect(getBackgroundColor("SUCCESS")).toBe("#11ff00");
    expect(getBackgroundColor("FAILED")).toBe("#ff1111");
    expect(getBackgroundColor("UNFETCHED")).not.toBe(
      "#ffff11" || "#11ff00" || "#ff1111"
    );
  });

  it("should check for pathUrl", () => {
    expect(getUrlFromPath("/")).toBe("all?search=");
    expect(getUrlFromPath("/videos/trending")).toBe("trending");
    expect(getUrlFromPath("/gaming")).toBe("gaming");
  });
});

describe("Navigate to /login on logout", () => {
  it("should logout and check cookie", async () => {
    const { getByText, getByTestId } = render(<AppWrapper />);
    fireEvent.click(getByText("Logout"));
    fireEvent.click(getByTestId("modal-confirm"));
    expect(getByText("Show Password")).toBeInTheDocument();
  });
});
