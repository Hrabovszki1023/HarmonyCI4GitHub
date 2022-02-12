// This file is generated with Harmony
/// <reference types="cypress" />

describe("InputTypeText", () => {
  it("T1 Test_TypeInputText", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_1").clear().IS("Object 1")
    cy.OBJ("object_1").SHOULD_BE("Object 1")
  })

  it("T2 Test_InputTypeText_Empty", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_1").focus().clear()
    cy.OBJ("object_1").SHOULD_BE('')
  })

  it("T3 Test_InputTypeText_Placeholder", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'placeholder').should('eq', "attribute placeholder object_1")
  })

  it("T4 Test_InputTypeText_Placeholder_Abstarkt", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'placeholder').should('eq', "attribute placeholder object_1")
  })

  it("T5 Test_InputTypeText_DefinedPlaceholder", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_1").should('have.attr', 'placeholder')
  })

  it("T6 Test_InputTypeText_Tooltip", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'title').should('eq', "attribute title object_1")
  })

  it("T7 Test_InputTypeText_Tooltip_Abstarkt", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'title').should('eq', "attribute title object_1")
  })

  it("T8 Test_InputTypeText_DefinedTooltip", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_1").should('have.attr', 'title')
  })

  it("T9 Test_InputTypeText_Label", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_1").SHOULD_BE("Label Object 1")
  })

  it("T10 Test_InputTypeText_Label_Abstarkt", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_1").SHOULD_BE("Label Object 1")
  })

  it("T11 Test_InputTypeText_Focused", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_1").focus()
    cy.OBJ("object_1").should('have.focus')
  })

  it("T12 Test_InputTypeText_NonFocused", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_2").focus()
    cy.OBJ("object_1").should('not.have.focus')
  })

  it("T13 Test_InputTypeText_Minlength", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'minlength').should('eq', "0")
  })

  it("T14 Test_InputTypeText_DefinedMinlength", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_1").should('have.attr', 'minlength')
  })

  it("T15 Test_InputTypeText_UndefinedMinlength", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_2").should('not.have.attr', 'minlength')
  })

  it("T16 Test_InputTypeText_Maxlength", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'maxlength').should('eq', "30")
  })

  it("T17 Test_InputTypeText_DefinedMaxlength", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_1").should('have.attr', 'maxlength')
  })

  it("T18 Test_InputTypeText_UndefinedMaxlength", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_2").should('not.have.attr', 'maxlength')
  })

  it("T19 TestTypeInputPresent", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_1").should('be.visible')
  })

  it("T20 TestTypeInputNonPresent", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
    cy.OBJ("object_NotExists").should('not.exist')
  })
























































})