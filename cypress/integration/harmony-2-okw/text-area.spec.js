// This file is generated with Harmony
/// <reference types="cypress" />

describe("TextArea", () => {
  it("T1 Test_TextArea", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_1").clear().IS("Object 1")
    cy.OBJ("object_1").SHOULD_BE("Object 1")
  })

  it("T2 Test_TextArea_Clear", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_1").focus().clear()
    cy.OBJ("object_1").SHOULD_BE('')
  })

  it("T3 Test_TextArea_Placeholder", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'placeholder').should('eq', "attribute placeholder object_1")
  })

  it("T4 Test_TextArea_Placeholder_Abstarkt", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'placeholder').should('eq', "attribute placeholder object_1")
  })

  it("T5 Test_TextArea_DefinedPlaceholder", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_1").should('have.attr', 'placeholder')
  })

  it("T6 Test_TextArea_Tooltip", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'title').should('eq', "attribute title object_1")
  })

  it("T7 Test_TextArea_Tooltip_Abstarkt", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'title').should('eq', "attribute title object_1")
  })

  it("T8 Test_TextArea_DefinedTooltip", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_1").should('have.attr', 'title')
  })

  it("T9 Test_TextArea_Label", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_1").SHOULD_BE("Label Object 1")
  })

  it("T10 Test_TextArea_Label_Abstarkt", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_1").SHOULD_BE("Label Object 1")
  })

  it("T11 Test_TextArea_Focused", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_1").focus()
    cy.OBJ("object_1").should('have.focus')
  })

  it("T12 Test_TextArea_NonFocused", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_2").focus()
    cy.OBJ("object_1").should('not.have.focus')
  })

  it("T13 Test_TextArea_Minlength", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'minlength').should('eq', "0")
  })

  it("T14 Test_InputTypeText_DefinedMinlength", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_1").should('have.attr', 'minlength')
  })

  it("T15 Test_InputTypeText_UndefinedMinlength", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_2").should('not.have.attr', 'minlength')
  })

  it("T16 Test_TextArea_Maxlength", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_1").invoke('attr', 'maxlength').should('eq', "30")
  })

  it("T17 Test_TextArea_DefinedMaxlength", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_1").should('have.attr', 'maxlength')
  })

  it("T18 Test_TextArea_UndefinedMaxlength", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_2").should('not.have.attr', 'maxlength')
  })

  it("T19 Test_TextArea_Present", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_1").should('be.visible')
  })

  it("T20 Test_TextArea_NonPresent", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
    cy.OBJ("object_NotExists").should('not.exist')
  })






















































})