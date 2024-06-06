/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { AppWrapper } from "..";

import { BrowserRouter } from "react-router-dom";
import StoreWrapper from "../components/StoreWrapper";
import TitleBar from "../components/TitleBar";
import responseApiJson from "../fixtures/home.json";
import { videosDataMain } from "../hooks/useRequest";
import VideoCard from "../components/VideoCard";
beforeAll(() => {
  document.cookie = "jwtToken=asvasdv;";
});

// describe("a", () => {
//   it("should get list of videos", async () => {
//     const mockFetch = jest.fn(
//       (
//         url: string,
//         method: string,
//         body: object,
//         isAuthRequired: Boolean,
//         jwtToken: string
//       ) => Promise.resolve(new Response(JSON.stringify(responseApiJson)))
//     );
//     jest.spyOn(FetchUtils, "fetchData").mockImplementation(mockFetch);
//     // const { getByText } = render(<AppWrapper />);
//     // 30b642bd-7591-49f4-ac30-5c538f975b15-----
//     // await waitFor(() => {
//     //   expect(getByText("Search")).toBeInTheDocument();
//     // });
//     // expect(mockFetch).toHaveBeenCalled();
//     jest.restoreAllMocks();
//   });
// });

describe("modes and card value check", () => {
  it("checks dark mode icons", () => {
    document.cookie = "jwtToken=asvasdv;";
    const { getByTestId } = render(
      <BrowserRouter>
        <StoreWrapper>
          <TitleBar setIsOpen={() => {}} show={true} />
        </StoreWrapper>
      </BrowserRouter>
    );
    fireEvent.click(getByTestId("theme-moon"));
    expect(getByTestId("theme-sun")).toBeInTheDocument();
  });

  it("should get change route on video-item click", async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <VideoCard item={responseApiJson.videos[0]} />
      </BrowserRouter>
    );
    // videosDataMain.saveVideos(responseApiJson);
    const videoItem = getByTestId("test-video-page");

    expect(videoItem).toBeInTheDocument();
    fireEvent.click(videoItem);
    await waitFor(() => {
      expect(getByTestId("video-page")).toBeInTheDocument();
    });
  });
  it("test videos store home", async () => {
    const { getAllByText } = render(<AppWrapper />);
    videosDataMain.saveVideos(responseApiJson);
    await waitFor(() => {
      expect(videosDataMain.savedVideos.videos.length).toBe(60);
      expect(getAllByText(/views/i)[0]).toBeInTheDocument();
    });
  });
});

describe("test redirect onclick", () => {
  it("should check for saved videos details", async () => {
    const { getByTestId } = render(<AppWrapper />);
    videosDataMain.saveVideos(responseApiJson);
    const videoItem = getByTestId("test-video-page");
    await waitFor(() => {
      expect(videoItem).toBeInTheDocument();
    });
    fireEvent.click(videoItem);
    expect(getByTestId("video-page")).toBeInTheDocument();
  });
});
