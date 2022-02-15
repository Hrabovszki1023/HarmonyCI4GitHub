// This file is generated with Harmony
/// <reference types="cypress" />

describe("Special characters", () => {
  it("T1 Ctrl Space", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_1").IS("abcd")
    cy.OBJ("object_1").type("{movetostart}")
    cy.OBJ("object_1").type("{del}")
    cy.OBJ("object_1").SHOULD_BE("bcd")
  })


})