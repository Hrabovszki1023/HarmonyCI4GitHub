// This file is generated with Harmony
/// <reference types="cypress" />

describe("DIV ContentEditable", () => {
  it("T1 Test_DIV", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_1").SHOULD_BE("Object 1")
    cy.OBJ("object_1").SHOULD_BE("Object 1")
  })

  it("T2 Test_DIV_Clear", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_1").clear()
    cy.OBJ("object_1").should('attr.text', '')
  })

  it("T3 Test_DIV_Placeholder", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'placeholder').should('eq', "attribute placeholder object_1")
  })

  it("T4 Test_DIV_Placeholder_Abstarkt", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'placeholder').should('eq', "attribute placeholder object_1")
  })

  it("T5 Test_DIV_DefinedPlaceholder", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_1").should('have.attr', 'placeholder')
  })

  it("T6 Test_DIV_Tooltip", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'title').should('eq', "attribute title object_1")
  })

  it("T7 Test_DIV_Tooltip_Abstarkt", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'title').should('eq', "attribute title object_1")
  })

  it("T8 Test_DIV_DefinedTooltip", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_1").should('have.attr', 'title')
  })

  it("T9 Test_DIV_Label", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_1").SHOULD_BE_LABEL("Label Object 1")
  })

  it("T10 Test_DIV_Label_Abstarkt", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_1").SHOULD_BE_LABEL("Label Object 1")
  })

  it("T11 Test_DIV_Focused", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_1").focus()
    cy.OBJ("object_1").should('have.focus')
  })

  it("T12 Test_DIV_NonFocused", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_2").focus()
    cy.OBJ("object_1").should('not.have.focus')
  })

  it("T13 Test_DIV_Minlength", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'minlength').should('eq', "0")
  })

  it("T14 Test_DIV_DefinedMinlength", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_1").should('have.attr', 'minlength')
  })

  it("T15 Test_DIV_UndefinedMinlength", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_2").should('not.have.attr', 'minlength')
  })

  it("T16 Test_DIV_Maxlength", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'maxlength').should('eq', "30")
  })

  it("T17 Test_DIV_DefinedMaxlength", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_1").should('have.attr', 'maxlength')
  })

  it("T18 Test_DIV_UndefinedMaxlength", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_2").should('not.have.attr', 'maxlength')
  })

  it("T19 Test_DIV_Present", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_1").should('exist')
  })

  it("T20 Test_DIV_NonPresent", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
    cy.OBJ("object_NotExists").should('not.exist')
  })






















































})