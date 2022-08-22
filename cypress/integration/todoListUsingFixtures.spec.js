/// <reference types="cypress" />

import { item1, item2, item3 } from "../fixtures/todo.json";

describe("TODO list page", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });

  it("Validate URL", () => {
    cy.url().should("include", "/todo");
  });

  it("Add two items ", () => {
    cy.get("[data-test=new-todo]").type(`${item1}{enter}`);
    cy.get("[data-test=new-todo]").type(`${item2}{enter}`);
  });

  it("Check and item as completed & see completed items ", () => {
    cy.contains(item3).parent().find("input[type=checkbox]").check();
    //filter by completed
    cy.contains("Completed").click();
  });

  it("Go to Utilities", () => {
    cy.contains("Utilities").click();
    cy.url().should("include", "/utilities");
  });

  afterEach(() => {
    cy.screenshot();
  });
});
