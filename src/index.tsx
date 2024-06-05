import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import StoreWrapper from "./components/StoreWrapper";
import { observer } from "mobx-react";
import "./utils/I18NextConfig";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element missing");

const root = ReactDOM.createRoot(rootElement);

export const AppWrapper = observer(() => {
  return (
    <BrowserRouter>
      <StoreWrapper>
        <App data-testid="roott" />
      </StoreWrapper>
    </BrowserRouter>
  );
});

root.render(<AppWrapper />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
