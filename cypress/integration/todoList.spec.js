/// <reference types="cypress" />

describe("TODO list page", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });

  it("Validate URL", () => {
    cy.url().should("include", "/todo");
  });

  it("Add two items ", () => {
    cy.get("[data-test=new-todo]").type("Learn JavaScript{enter}");
    cy.get("[data-test=new-todo]").type("Learn Cypress{enter}");
    //Assertion
    cy.contains("Learn JavaScript").should("be.visible");
    cy.contains("Learn Cypress").should("be.visible");
  });

  it("Check and item as completed & see completed items ", () => {
    cy.contains("Pay electric bill")
      .parent()
      .find("input[type=checkbox]")
      .check();
    cy.contains("Completed").click();
    //Assertion
    cy.contains("Pay electric bill").should("be.visible");
  });

  it("Go to Utilities", () => {
    cy.contains("Utilities").click();
    cy.url().should("include", "/utilities");
  });
});
