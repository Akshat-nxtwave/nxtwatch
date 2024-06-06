/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent, waitFor } from "@testing-library/react";
import { AppWrapper } from "..";
import * as FetchUtils from "../utils/FetchUtils";
import responseApiJson from "../fixtures/home.json";
import { videosDataMain } from "../hooks/useRequest";

beforeAll(() => {
  document.cookie = "jwtToken=asvasdv;";
});

describe("a", () => {
  it("should get list of videos", async () => {
    const mockFetch = jest.fn(
      (
        url: string,
        method: string,
        body: object,
        isAuthRequired: Boolean,
        jwtToken: string
      ) => Promise.resolve(new Response(JSON.stringify(responseApiJson)))
    );
    jest.spyOn(FetchUtils, "fetchData").mockImplementation(mockFetch);
    // const { getByText } = render(<AppWrapper />);
    // 30b642bd-7591-49f4-ac30-5c538f975b15-----
    // await waitFor(() => {
    //   expect(getByText("Search")).toBeInTheDocument();
    // });
    // expect(mockFetch).toHaveBeenCalled();
    jest.restoreAllMocks();
  });
});

describe("b", () => {
  it("test videos store home", async () => {
    const { getAllByText } = render(<AppWrapper />);
    videosDataMain.saveVideos(responseApiJson);
    await waitFor(() => {
      expect(videosDataMain.savedVideos.videos.length).toBe(60);
      expect(getAllByText(/views/i)[9]).toBeInTheDocument();
    });
  });

  it("checks dark mode icons", () => {
    const { getByTestId } = render(<AppWrapper />);
    fireEvent.click(getByTestId("theme-moon"));
    expect(getByTestId("theme-sun")).toBeInTheDocument();
  });

  it("should get change route on video-item click", async () => {
    const { getByTestId } = render(<AppWrapper />);
    const videoItem = getByTestId("606f5b7b-9208-4eb2-a68c-1eb5faef4268");
    expect(videoItem).toBeInTheDocument();
    fireEvent.click(videoItem);
    await waitFor(() => {
      expect(getByTestId("video-page")).toBeInTheDocument();
    });
  });
});
