/// <reference types="Cypress" />

import * as utils from "../../src/utils/FetchUtils";

describe("template spec", async () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/trending");
    cy.getCookies().then((cookie) => {
      let param: string = "/";
      if (cookie.length === 0) {
        cy.location().should((loc) => {
          expect(loc.href).to.include("/login");
          param = loc?.search?.split("=")?.[1] || "/";
        });
        // const fetchStub = cy.stub(utils, 'fetchData').returns({ error_msg: "invalid", status_code: 400 });
        cy.get('#loginUsername').type('Hello, World')
        cy.get('#loginPassword').type('Kuch bhi')
        cy.get('#showPassword', { timeout: 6000 }).check();
        cy.get('#loginSubmit',{timeout: 1000}).click();
        cy.contains('do not').should('be.visible');

        cy.get("#loginUsername").clear().type("rahul");
        cy.get("#loginPassword").clear().type("rahul@2021");
        cy.get("#showPassword").check();
        cy.get("#loginSubmit").click();
        cy.location().should((loc) => {
          expect(loc.pathname).to.be.equal(param);
        });
      }
    });
  });
});
