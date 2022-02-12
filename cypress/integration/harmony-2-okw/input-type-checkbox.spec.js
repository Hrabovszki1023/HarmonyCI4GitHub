// This file is generated with Harmony
/// <reference types="cypress" />

describe("InputTypeCheckbox", () => {
  it("T1 TestTypeInputCB", () => {
    cy.visit("http://test.openkeyword.de/InputCheckbox/InputTypeCheckbox_HT.htm")
    cy.OBJ("object_1").clear().IS("Object 1")
    cy.OBJ("object_1").SHOULD_BE("Object 1")
  })

  it("T2 TestCBCaption", () => {
    cy.visit("http://test.openkeyword.de/InputCheckbox/InputTypeCheckbox_HT.htm")
    cy.OBJ("object_1").SHOULD_BE("Label Object 1")
  })

  it("T3 TestCB_Undefined-Placeholder", () => {
    cy.visit("http://test.openkeyword.de/InputCheckbox/InputTypeCheckbox_HT.htm")
    cy.OBJ("object_1").should('not.have.attr', 'placeholder')
  })

  it("T4 TestCBTooltip", () => {
    cy.visit("http://test.openkeyword.de/InputCheckbox/InputTypeCheckbox_HT.htm")
    cy.OBJ("object_1").SHOULD_BE("attribute title object_1")
  })

  it("T5 TestCBLabel", () => {
    cy.visit("http://test.openkeyword.de/InputCheckbox/InputTypeCheckbox_HT.htm")
    cy.OBJ("object_1").SHOULD_BE("Label Object 1")
  })

  it("T6 TestCB_Undefined-Minlength", () => {
    cy.visit("http://test.openkeyword.de/InputCheckbox/InputTypeCheckbox_HT.htm")
    cy.OBJ("object_1").should('not.have.attr', 'minlength')
  })

  it("T7 TestCB_Undefined-Maxlength", () => {
    cy.visit("http://test.openkeyword.de/InputCheckbox/InputTypeCheckbox_HT.htm")
    cy.OBJ("object_1").should('not.have.attr', 'maxlength')
  })

  it("T8 TestCBFocused", () => {
    cy.visit("http://test.openkeyword.de/InputCheckbox/InputTypeCheckbox_HT.htm")
    cy.OBJ("object_1").click()
    
    cy.OBJ("object_1").should('have.focus')
    
  })

  it("T9 TestCBNonFocusd", () => {
    cy.visit("http://test.openkeyword.de/InputCheckbox/InputTypeCheckbox_HT.htm")
    cy.OBJ("object_1").click()
    cy.OBJ("object_2").should('not.have.focus')
  })

  it("T10 TestCBPresent", () => {
    cy.visit("http://test.openkeyword.de/InputCheckbox/InputTypeCheckbox_HT.htm")
    cy.OBJ("object_1").should('be.visible')
  })

  it("T11 TestCBNonPresent", () => {
    cy.visit("http://test.openkeyword.de/InputCheckbox/InputTypeCheckbox_HT.htm")
    cy.OBJ("object_notexist").should('not.exist')
  })

  it("T12 TestCBActive", () => {
    cy.visit("http://test.openkeyword.de/InputCheckbox/InputTypeCheckbox_HT.htm")
    cy.OBJ("object_1").should('not.be.disabled')
  })

  it("T13 TestCBNonActive", () => {
    cy.visit("http://test.openkeyword.de/InputCheckbox/InputTypeCheckbox_HT.htm")
    cy.OBJ("object_disabled").should('be.disabled')
  })

  it("T14 TestTypeInputCB", () => {
    cy.visit("http://test.openkeyword.de/InputCheckbox/InputTypeCheckbox_HT.htm")
    cy.OBJ("object_1").click()
    cy.OBJ("object_1").should('have.focus')
    cy.OBJ("object_2").click()
    cy.OBJ("object_2").should('have.focus')
    cy.OBJ("object_1").SHOULD_BE("Object 1")
  })

  it("T15 TestTypeInputCB", () => {
    cy.visit("http://test.openkeyword.de/InputCheckbox/InputTypeCheckbox_HT.htm")
    cy.OBJ("object_1").select("Zozo")
    cy.OBJ("object_1").SHOULD_BE("Object 1")
  })

  it("T16 TestTypeInputCB", () => {
    cy.visit("http://test.openkeyword.de/InputCheckbox/InputTypeCheckbox_HT.htm")
    cy.OBJ("object_1").wait(2500).type(" " + '{enter}')
    cy.OBJ("object_1").SHOULD_BE("Object 1")
  })




































})