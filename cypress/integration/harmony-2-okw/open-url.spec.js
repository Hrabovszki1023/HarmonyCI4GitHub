// This file is generated with Harmony
/// <reference types="cypress" />

describe("OpenURL", () => {
  it("T1 Site [CheckboxSite]", () => {
    cy.visit("http://test.openkeyword.de/InputCheckbox/InputTypeCheckbox_HT.htm")
  })

  it("T2 Site [DisableCheckboxSite]", () => {
    cy.visit("DisableCheckboxSite")
  })

  it("T3 Site [InputTypeText]", () => {
    cy.visit("http://test.openkeyword.de/InputText/InputTypeText_HT.htm")
  })

  it("T4 Site [DIV_ContenteEditable]", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_DIV_HT.htm")
  })

  it("T5 Site [P_ContenteEditable]", () => {
    cy.visit("http://test.openkeyword.de/contenteditable/ContentEditable_P_HT.htm")
  })

  it("T6 Site [TextArea]", () => {
    cy.visit("http://test.openkeyword.de/Textarea/textarea_HT.htm")
  })
})