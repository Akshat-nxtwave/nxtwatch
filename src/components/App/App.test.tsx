import { GetJWT } from "../../utils/GetJWT";
import { render, screen } from "@testing-library/react";
import App from ".";
import { BrowserRouter as Router } from "react-router-dom";
import StoreWrapper from "../../components/StoreWrapper";
describe("App", () => {
  test("renders learn react link", () => {
    const AppCom = (
      <StoreWrapper>
        <Router>
          <App />
        </Router>
      </StoreWrapper>
    );
    render(AppCom);
    const linkElement = screen.getByText(/USERNAME/i);
    expect(linkElement).toBeInTheDocument();
    const userNameInput = screen.getByRole("textbox",{ name:"username" })

    console.log(userNameInput,'pppppppppppppppppppppppppppppppppppp');
  });

  test("getJWT from function call", () => {
    const jwtToken = GetJWT();
    expect(jwtToken).toBe("");
  });
});
