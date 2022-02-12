// This file is generated with Harmony
/// <reference types="cypress" />

describe("P ContentEditable", () => {
  it("T1 Test_P", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_1").SHOULD_BE("Object 1")
    cy.OBJ("object_1").SHOULD_BE("Object 1")
  })

  it("T2 Test_P_Clear", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_1").focus().clear()
    cy.OBJ("object_1").SHOULD_BE('')
  })

  it("T3 Test_P_Placeholder", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'placeholder').should('eq', "attribute placeholder object_1")
  })

  it("T4 Test_P_Placeholder_Abstarkt", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'placeholder').should('eq', "attribute placeholder object_1")
  })

  it("T5 Test_P_DefinedPlaceholder", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_1").should('have.attr', 'placeholder')
  })

  it("T6 Test_P_Tooltip", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'title').should('eq', "attribute title object_1")
  })

  it("T7 Test_P_Tooltip_Abstarkt", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'title').should('eq', "attribute title object_1")
  })

  it("T8 Test_P_DefinedTooltip", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_1").should('have.attr', 'title')
  })

  it("T9 Test_P_Label", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_1").SHOULD_BE("Label Object 1")
  })

  it("T10 Test_P_Label_Abstarkt", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_1").SHOULD_BE("Label Object 1")
  })

  it("T11 Test_P_Focused", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_1").focus()
    cy.OBJ("object_1").should('have.focus')
  })

  it("T12 Test_P_NonFocused", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_2").focus()
    cy.OBJ("object_1").should('not.have.focus')
  })

  it("T13 Test_P_Minlength", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'minlength').should('eq', "0")
  })

  it("T14 Test_P_DefinedMinlength", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_1").should('have.attr', 'minlength')
  })

  it("T15 Test_P_UndefinedMinlength", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_2").should('not.have.attr', 'minlength')
  })

  it("T16 Test_P_Maxlength", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'maxlength').should('eq', "30")
  })

  it("T17 Test_P_DefinedMaxlength", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_1").should('have.attr', 'maxlength')
  })

  it("T18 Test_P_UndefinedMaxlength", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_2").should('not.have.attr', 'maxlength')
  })

  it("T19 Test_P_Present", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_1").should('be.visible')
  })

  it("T20 Test_P_NonPresent", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
    cy.OBJ("object_NotExists").should('not.exist')
  })






















































})