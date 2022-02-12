// This file is generated with Harmony
/// <reference types="cypress" />

describe("Special characters", () => {
  it("T1 Ctrl Space", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_1").clear().IS("abcd")
    cy.OBJ("object_1").wait(2500).type("{movetostart}" + '{enter}')
    cy.OBJ("object_1").wait(2500).type("{del}" + '{enter}')
    cy.OBJ("object_1").SHOULD_BE("bcd")
  })


})