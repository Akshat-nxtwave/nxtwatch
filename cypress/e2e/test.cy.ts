/// <reference types="Cypress" />

describe("template spec", async () => {
  it("tests the site", () => {
    cy.visit("http://localhost:3000/trending");
    cy.getCookies().then((cookie) => {
      let param: string = "/";
      if (cookie.length === 0) {
        cy.location().should((loc) => {
          expect(loc.href).to.include("/login");
          param = loc?.search?.split("=")?.[1] || "/";
        });
        // const fetchStub = cy.stub(utils, 'fetchData').returns({ error_msg: "invalid", status_code: 400 });
        cy.get("#loginUsername").type("Hello, World");
        cy.get("#loginPassword").type("Random passssssss");
        cy.get("#show-password", { timeout: 6000 }).check();
        cy.get("#loginSubmit", { timeout: 1000 }).click();
        cy.contains("do not").should("be.visible");

        cy.get("#loginUsername").clear().type("rahul");
        cy.get("#loginPassword").clear().type("rahul@2021");
        cy.get("#show-password").check();
        cy.get("#loginSubmit").click();

        cy.location().should((loc) => {
          expect(loc.pathname).to.be.equal(param);
        });

        cy.get(".tabs-list")
          .filter(':contains("Gaming")')
          .should("be.visible")
          .click();

        cy.get(".test-title-header")
          .should("be.visible")
          .filter(':contains("Gaming")')
          .should("be.visible");
        //Cypress.log({ $el: cy.get(".tabs-list").filter() });
      }

      cy.get("#theme-moon").as("themeMoon").click();
      cy.contains("#theme-moon").should("not.exist");
      cy.get("#theme-sun").should("be.visible");
      cy.contains("#theme-moon").should("not.exist");
      cy.get("#main-videos-section").find("a").eq(1).click();
      cy.contains("Like").should("be.visible");
      cy.contains("Dislike").should("be.visible").prev().click();
      cy.contains("Disliked").should("be.visible");
      cy.get("#video-page-save").should("be.visible").prev().click();

      cy.get(".tabs-list").filter(':contains("Home")').click();
      cy.get("#video-home-section")
        .should("be.visible")
        .find("a")
        .eq(4)
        .click();

      cy.wait(500);
      cy.get("#video-page-save").prev().click();

      cy.contains("Saved videos").click();
      cy.get("#main-videos-section").find("a").should("have.length", 2);

      cy.contains("Logout").click();
      cy.contains("div", "Confirm").click();
      cy.location().should((loc) => {
        expect(loc.pathname).to.be.equal("/login");
      });
    });
  });

  it("test with cookie", () => {
    cy.wait(1000);
    cy.setCookie(
      "jwtToken",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU"
    );
    cy.visit("http://localhost:3000/login");
    cy.location().should((loc) => {
      expect(loc.pathname).to.be.equal("/");
    });
    cy.contains("Saved videos").click();
    cy.contains("No saved videos found").should("be.visible");
    cy.contains("Logout").click();
    cy.contains("div", "Confirm").click();
    cy.getCookies().then((cookie) => {
      expect(cookie).to.have.length(0);
    });
  });
});
