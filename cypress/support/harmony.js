// this file is generated by Harmony

Cypress.Commands.add('OBJ', testid =>
  cy.get(`[data-harmony-id=${JSON.stringify(testid)}]`)
)

Cypress.Commands.add('IS', { prevSubject: true }, (subject, value) => {
  const obj = cy.wrap(subject, { log: false })
  obj.then($elem => {
    if ($elem.is("input,textarea")) { obj.type(value) }
    else if ($elem.is("[contenteditable=true]")) { obj.type(value) }
    else throw new Error('Unknown element type: ' + $elem.get(0).nodeName)
  })
})
Cypress.Commands.add('SHOULD_BE', { prevSubject: true }, (subject, value) => {
  const obj = cy.wrap(subject, { log: false })
  obj.should($elem => {
    const isJQuery = 'selector' in $elem
    if (!isJQuery) expect($elem).to.equal(value)
    else if ($elem.is("input")) { expect($elem).to.have.value(value) }
    else if ($elem.is("*")) { expect($elem).to.have.text(value) }
    else expect($elem).to.have.text(value)
  })
})
window.IS = (subject, value) => {
  const $elem = subject
  const isJQuery = 'selector' in $elem
  if (!isJQuery) expect($elem).to.equal(value)
  if (false) ""
  else throw new Error('Unknown element type: ' + $elem.get(0).nodeName)
}
Cypress.Commands.add('IF', { prevSubject: true }, async (subject, condition, fn) => {
  const matched = await condition(subject)
  cy.log('Condition was ' + matched)
  if (matched) return fn()
})
