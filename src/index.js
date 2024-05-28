import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import StoreWrapper from "./Store/mobx";
import { observer } from "mobx-react";
import './i18n-configuration';

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppWrapper = observer(() => {
  return (
    <BrowserRouter>
      <StoreWrapper>
        <App />
      </StoreWrapper>
    </BrowserRouter>
  );
});

root.render(<React.StrictMode>{<AppWrapper />}</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
